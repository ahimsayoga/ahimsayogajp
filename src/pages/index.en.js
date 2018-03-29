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
            <div
              dangerouslySetInnerHTML={{
                __html: node.body.childMarkdownRemark.html
              }}
            />
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
