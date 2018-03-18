import React from 'react'

import General from '../components/General'

class IndexEnPage extends React.PureComponent {
  render () {
    const enGeneralEdges = this.props.data.en.edges
    return (
      <div>
        <h2>Home</h2>
        <p>
          Add text about Shivam Yoga.
        </p>
        <br />
        <br />
        <h3>en - General Pages</h3>
        {enGeneralEdges.map(({ node }, i) => (
          <General node={node} key={node.id} />
        ))}
        <br />
      </div>
    )
  }
}

export default IndexEnPage

export const pageEnQuery = graphql`
query PageEnQuery {
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
