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
      to={`/${node.node_locale}/${node.slug}/`}
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
        </div>
      </div>
    </Link>
  </div>
)

General.propTypes = propTypes

export default General
