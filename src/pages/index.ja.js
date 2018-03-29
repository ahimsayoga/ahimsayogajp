import React from 'react'

import * as contentfulWrapper from '../components/ContentfulWrapper'

class IndexJaPage extends React.PureComponent {
  render () {
    const page = this.props.data.ja.edges
    console.log(page)
    return (
      <div>
        {page.map(({ node }, i) => (
          <div key={node.id}>
            <h2>{node.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: node.body.childMarkdownRemark.html
              }}
            />
            {console.log(node) }
            {
              node.components.map(( element ) => {
                const componentName = element.parent.id;
                const ContentfulWrapper = contentfulWrapper[componentName];

                return (
                  <ContentfulWrapper key={element.id} component={element} />
                );
              })
            }
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
          parent {
            id
          }
          body {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
}
`
