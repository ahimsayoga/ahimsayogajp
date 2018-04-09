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
              node.components.map(( component ) => {
                if (component.parentalias !== 'undefined') {
                  const componentName = component.parentalias.id + 'Wrapper';
                  const ContentfulWrapper = contentfulWrapper[componentName];

                  return (
                    <ContentfulWrapper key={component.id} component={component} />
                  );
                }
                else {
                  console.log('Invalid component: ' + component)
                }
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
            parentalias: parent {
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
            parentalias: parent {
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
            parentalias: parent {
              id
            }
            heading
            components {
              id
              parentalias: parent {
                id
              }
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
            parentalias: parent {
              id
            }
            heading
            components {
              id
              parentalias: parent {
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
            parentalias: parent {
              id
            }
            heading
            components {
              id
              parentalias: parent {
                id
              }
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
