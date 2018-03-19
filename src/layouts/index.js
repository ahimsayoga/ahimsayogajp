import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider, addLocaleData } from 'react-intl'
import styled from 'styled-components'
import 'intl'

import Header from '../components/Header'
import { rhythm } from '../utils/typography'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'
import ja from 'react-intl/locale-data/ja'
import 'intl/locale-data/jsonp/ja'

// Create a Wrapper component that'll render a <section> tag with some styles
const ContentWrapper = styled.section`
  margin: 0 auto;
  max-width: 650px;
  margin-top: ${rhythm(1.5)};
  margin-bottom: ${rhythm(1.5)};
  padding-left: ${rhythm(3 / 4)};
  padding-right: ${rhythm(3 / 4)};
`

// add concatenated locale data
addLocaleData([...en, ...ja])

const TemplateWrapper = ({ children, data, location }) => {
  const url = location.pathname
  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}/`
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))

  // get the appropriate message file based on langKey
  // at the moment this assumes that langKey will provide us
  // with the appropriate language code
  const i18nMessages = require(`../data/messages/${langKey}`)

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <div>
        <Helmet
          title='Ahimsa Yoga Website'
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header langs={langsMenu} locale={langKey} />
        <ContentWrapper>
          {children()}
        </ContentWrapper>
      </div>
    </IntlProvider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`
