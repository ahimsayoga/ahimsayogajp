import React from 'react'

class IndexJaPage extends React.PureComponent {
  render () {
    const jaLandingEdges = this.props.data.ja.edges
    console.log(jaLandingEdges)
    return (
      <div>
        {jaLandingEdges.map(({ node }, i) => (
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

export default IndexJaPage

export const pageJaQuery = graphql`
query PageJaQuery {
  ja: allContentfulLanding(filter: { slug: { eq: "<front>" }, node_locale: { eq: "ja" } }) {
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
}
`
