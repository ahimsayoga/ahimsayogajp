import React from 'react'

import * as contentfulWrapper from '../components/ContentfulWrapper'

class LandingTemplate extends React.Component {
  render () {
    const page = this.props.data.contentfulLanding

    return (
      <div>
        <h1>{page.title}</h1>
          {
            page.components.map(( element ) => {
              const componentName = element.parent.id + 'Wrapper';
              const ContentfulWrapper = contentfulWrapper[componentName];

              return (
                <ContentfulWrapper key={element.id} component={element} />
              );
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
      ... on ContentfulCostCollection {
        id
        parent {
          id
        }
        heading
        components {
          id
          heading
          price
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      ... on ContentfulLocationCollection {
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
`
