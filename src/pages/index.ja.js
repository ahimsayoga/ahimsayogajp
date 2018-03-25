import React from 'react'

import General from '../components/General'

class IndexJaPage extends React.PureComponent {
  render () {
    const jaGeneralEdges = this.props.data.ja.edges
    return (
      <div>
        {jaGeneralEdges.map(({ node }, i) => (
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

export default IndexJaPage

export const pageJaQuery = graphql`
query PageJaQuery {
  ja: allContentfulGeneral(filter: { slug: { eq: "<front>" }, node_locale: { eq: "ja" } }) {
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
}
`
