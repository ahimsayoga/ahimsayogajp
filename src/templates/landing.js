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
              console.log(component)
              if (component.parentalias !== 'undefined') {
                const componentName = component.parentalias.id + 'Wrapper';
                const ContentfulWrapper = contentfulWrapper[componentName];
                return (
                  <ContentfulWrapper key={component.id} {...component} />
                );
              } else {
                console.log('Invalid component: ' + component)
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
`
