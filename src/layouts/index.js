import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.func.isRequired
}

class DefaultLayout extends React.Component {
  render () {
    return (
      <div>
        <Link style={{ textDecoration: `none` }} to='/'>
          <h3 style={{ color: `tomato` }}>
            A title coming from layout JS.
          </h3>
        </Link>
        {this.props.children()}
        <hr />
        <p>
          Perhaps footer content here from layout JS.
        </p>
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
