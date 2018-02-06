import React from 'react'
import Link from 'gatsby-link'
import { getCurrentLangKey } from 'ptz-i18n'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const ListLinkByLang = props =>
  <ul style={{ listStyle: `none`, float: `right` }}>
    <ListLink to={'/' + props.lang + '/'}>Home</ListLink>
    <ListLink to={'/' + props.lang + '/about'}>About</ListLink>
    <ListLink to={'/' + props.lang + '/schedule'}>Schedule</ListLink>
  </ul>

class GeneralTemplate extends React.Component {
  render () {
    const page = this.props.data.contentfulGeneral

    const url = window.location.pathname
    const { langs, defaultLangKey } = this.props.data.site.siteMetadata.languages
    const langKey = getCurrentLangKey(langs, defaultLangKey, url)

    return (
      <div>
        <ListLinkByLang lang={langKey} />
        <h1>{page.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: page.body.childMarkdownRemark.html
          }}
        />
      </div>
    )
  }
}

export default GeneralTemplate

export const pageQuery = graphql`
query generalQuery($id: String!) {
  contentfulGeneral(id: { eq: $id }) {
    title,
    body {
      childMarkdownRemark {
        html
      }
    }
  }
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
