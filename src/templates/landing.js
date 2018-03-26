import React from 'react'

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
    }
  }
}
`
