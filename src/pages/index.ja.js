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
            {console.log(node) }
            {
              node.components.map(( element ) => {
                const componentName = element.parent.id + 'Wrapper';
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
        components {
          ... on ContentfulText {
            id
            parent {
              id
            }
            body {
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulHero {
            id
            parent {
              id
            }
            body {
              childMarkdownRemark {
                html
              }
            }
            media {
              resolutions {
                base64
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
          }
          ... on ContentfulSchedule {
            id
            parent {
              id
            }
            heading
            items {
              id
              title
              day
              time
              location {
                id
                slug
              }
            }
          }
          ... on ContentfulCollection {
            id
            parent {
              id
            }
            heading
            components {
              id
              parent {
                id
              }
              heading
              price
              body {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
          ... on ContentfulLocationMap {
            id
            parent {
              id
            }
            heading
            components {
              id
              heading
              location {
                lon
                lat
              }
            }
          }
        }
      }
    }
  }
}
`
