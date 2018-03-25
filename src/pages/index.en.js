import React from 'react'

class IndexEnPage extends React.PureComponent {
  render () {
    const enGeneralEdges = this.props.data.en.edges
    return (
      <div>
        {enGeneralEdges.map(({ node }, i) => (
          <div>
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
  en: allContentfulGeneral(filter: { slug: { eq: "<front>" }, node_locale: { eq: "en" } }) {
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
