import React from 'react'

import General from '../components/General'

class IndexJaPage extends React.PureComponent {
  render () {
    const jaGeneralEdges = this.props.data.ja.edges
    return (
      <div>
        <h2>Home</h2>
        <p>
          Add text about Shivam Yoga.
        </p>
        <br />
        <br />
        <h3>ja - General Pages</h3>
        {jaGeneralEdges.map(({ node }, i) => (
          <General node={node} key={node.id} />
        ))}
        <br />
      </div>
    )
  }
}

export default IndexJaPage

export const pageJaQuery = graphql`
query PageJaQuery {
  ja: allContentfulGeneral(filter: { node_locale: { eq: "ja" } }) {
    edges {
      node {
        id
        node_locale
        title
        slug
        body {
          body
        }
      }
    }
  }
}
`
