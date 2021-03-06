import React from 'react'

import * as contentfulWrapper from '../components/ContentfulWrapper'

class LandingTemplate extends React.Component {
  render () {
    const page = this.props.data.contentfulLanding

    return (
      <div>
        <h1>{page.title}</h1>
          {
            page.components.map(( component ) => {
              if (component.parent !== undefined) {
                const componentName = component.parent.id + 'Wrapper';
                const ContentfulWrapper = contentfulWrapper[componentName];

                return (
                  <ContentfulWrapper {...component} key={component.id} />
                );
              } else {
                console.log('Component: ' + component.id + ' has no Parent ID')
              }
            })
          }
      </div>
    )
  }
}

export default LandingTemplate

export const pageQuery = graphql`
query landingQuery($id: String!) {
  contentfulLanding(id: { eq: $id }) {
    title
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
`
