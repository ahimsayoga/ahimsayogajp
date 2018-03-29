import React from 'react'

import * as contentfulWrapper from '../components/ContentfulWrapper'

class LandingTemplate extends React.Component {
  render () {
    const page = this.props.data.contentfulLanding
    console.log(page)

    return (
      <div>
        <h1>{page.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: page.body.childMarkdownRemark.html
          }}
        />
          {
            page.components.map(( element ) => {
              const componentName = element.parent.id;
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
    title,
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
`
