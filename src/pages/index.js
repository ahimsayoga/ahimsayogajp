import React from 'react'
import graphql from 'graphql'
import * as PropTypes from 'prop-types'
import { getUserLangKey } from 'ptz-i18n'
import { Link, withPrefix } from 'gatsby-link'

const propTypes = {
  data: PropTypes.object.isRequired
}

const General = ({ node }) => (
  <div>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/${node.node_locale}/${node.slug}/`}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          borderBottom: `1px solid lightgray`
        }}
      >
        <div>
          <h1>{node.title}</h1>
          {/* <div>{node.body.body}</div> */}
          {console.log(node)}
        </div>
      </div>
    </Link>
  </div>
)

class IndexPage extends React.PureComponent {
  constructor (args) {
    super(args)

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = args.data.site.siteMetadata.languages
      const langKey = getUserLangKey(langs, defaultLangKey)
      const homeUrl = withPrefix(`/${langKey}/`)

      // I don`t think this is the best solution
      // I would like to use Gatsby Redirects like:
      // https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redirects
      // But Gatsby Redirects are static, they need to be specified at build time,
      // This redirect is dynamic, It needs to know the user browser language.
      // Any ideias? Join the issue: https://github.com/angeloocana/gatsby-starter-default-i18n/issues/4
      window.___history.replace(homeUrl)
    }
  }

  render () {
    return (<div />)
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
query PageQuery {
  en: allContentfulGeneral(filter: { node_locale: { eq: "en" } }) {
    edges {
      node {
        id
        node_locale
        title
        slug
        body {
          body
        }
      }
    }
  }
  ja: allContentfulGeneral(filter: { node_locale: { eq: "ja" } }) {
    edges {
      node {
        id
        node_locale
        title
        slug
        body {
          body
        }
      }
    }
  }
  site{
    siteMetadata{
      languages {
        defaultLangKey
        langs
      }
    }
  }
}
`
