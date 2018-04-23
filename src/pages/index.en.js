import React from 'react'

import * as contentfulWrapper from '../components/ContentfulWrapper'

class IndexEnPage extends React.PureComponent {
  render () {
    const page = this.props.data.en.edges
    return (
      <div>
        {page.map(({ node }, i) => (
          <div key={node.id}>
            <h2>{node.title}</h2>
            {
              node.components.map(( component ) => {
                if (component.parent !== undefined) {
                  const componentName = component.parent.id + 'Wrapper';
                  const ContentfulWrapper = contentfulWrapper[componentName];

                  return (
                    <ContentfulWrapper {...component} key={component.id} />
                  );
                }
                else {
                  console.log('Component: ' + component.id + ' has no Parent ID')
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
              sizes {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
          ... on ContentfulSchedule {
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
              parent {
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
