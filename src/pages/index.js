import React from 'react'
import * as PropTypes from 'prop-types'
import { getUserLangKey } from 'ptz-i18n'
import { withPrefix } from 'gatsby-link'

const propTypes = {
  data: PropTypes.object.isRequired
}

class IndexPage extends React.PureComponent {
  /* SKIP THIS PART FOR NOW FOR SETTING DEFAULT LANG */
  /* This can be set now, but we need to create menu first for simplicity */
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
    return (
      <div>
        <h2>Home</h2>
        <p>
          Redirecting...
        </p>
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
query PageQuery {
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
