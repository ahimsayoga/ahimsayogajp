import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired
}

const General = ({ node }) => (
  <div>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/general/${node.id}/`}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          borderBottom: `1px solid lightgray`
        }}
      >
        <div>
          <h1>{node.title}</h1>
          {/* <div>{node.body.body}</div> */}
        </div>
      </div>
    </Link>
  </div>
)

class IndexPage extends React.Component {
  render () {
    const enGeneralEdges = this.props.data.en.edges
    const jaGeneralEdges = this.props.data.ja.edges
    return (
      <div>
        <h2>Home</h2>
        <p>
          Add text about Shivam Yoga.
        </p>
        <br />
        <br />
        <h3>en - General Pages</h3>
        {enGeneralEdges.map(({ node }, i) => (
          <General node={node} key={node.id} />
        ))}
        <br />
        <br />
        <h3>ja - General Pages</h3>
        {jaGeneralEdges.map(({ node }, i) => (
          <General node={node} key={node.id} />
        ))}
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
query PageQuery {
  en: allContentfulGeneral(filter: { node_locale: { eq: "en" } }) {
    edges {
      node {
        id
        title
        body {
          body
        }
      }
    }
  }
  ja: allContentfulGeneral(filter: { node_locale: { eq: "ja" } }) {
    edges {
      node {
        id
        title
        body {
          body
        }
      }
    }
  }
}
`
