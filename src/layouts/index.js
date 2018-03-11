import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'
import { rhythm } from '../utils/typography'
import Link from 'gatsby-link'
import 'intl'

import messagesEn from '../data/messages/en'
import messagesJa from '../data/messages/ja'

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname
  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}/`
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))

  // Hack for using products / categories template when params not passed to wrapper.
  if (i18nMessages === undefined) {
    if (langKey === 'ja') {
      i18nMessages = messagesJa
    } else {
      i18nMessages = messagesEn
    }
  }

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
        <div
          style={{
            margin: `0 auto`,
            marginTop: rhythm(1.5),
            marginBottom: rhythm(1.5),
            maxWidth: 650,
            paddingLeft: rhythm(3 / 4),
            paddingRight: rhythm(3 / 4)
          }}
        >
          <Link style={{ textDecoration: `none` }} to='/'>
            <h3 style={{ color: `tomato`, marginBottom: rhythm(1.5) }}>
              Example of using Contentful as a data source for a Gatsby site
            </h3>
          </Link>
          {children()}
        </div>
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
