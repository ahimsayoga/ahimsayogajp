import React from 'react'

class IndexEnPage extends React.PureComponent {
  render () {
    const enLandingEdges = this.props.data.en.edges
    // console.log(enLandingEdges)
    return (
      <div>
        {enLandingEdges.map(({ node }, i) => (
          <div key={node.id}>
            <h2>{node.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: node.body.childMarkdownRemark.html
              }}
            />
          </div>
        ))}
        <br />
      </div>
    )
  }
}

export default IndexEnPage

export const pageEnQuery = graphql`
query PageEnQuery {
  en: allContentfulLanding(filter: { slug: { eq: "<front>" }, node_locale: { eq: "en" } }) {
    edges {
      node {
        id
        node_locale
        title
        slug
        body {
          childMarkdownRemark {
            html
          }
        },
        components {
          id
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
