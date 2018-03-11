import React from 'react'

class GeneralTemplate extends React.Component {
  render () {
    const page = this.props.data.contentfulGeneral

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

export default GeneralTemplate

export const pageQuery = graphql`
query generalQuery($id: String!) {
  contentfulGeneral(id: { eq: $id }) {
    title,
    body {
      childMarkdownRemark {
        html
      }
    }
  }
}
`
