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
