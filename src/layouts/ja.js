import React from 'react'
import graphql from 'graphql'
import Layout from './index'
import { addLocaleData } from 'react-intl'

import messages from '../data/messages/ja'
import ja from 'react-intl/locale-data/ja'
import 'intl/locale-data/jsonp/ja'

addLocaleData(ja)

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />)

export const pageQuery = graphql`
  query LayoutPt {
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
