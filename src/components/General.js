import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'

import {pathFromSlug} from '../utils/pathFromSlug'

const propTypes = {
  node: PropTypes.object.isRequired
}

// Create a Wrapper component that'll render a <div> tag with some styles
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`

const General = ({ node }) => (
  <div>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={pathFromSlug(node.node_locale, node.slug)}
    >
      <TitleWrapper>
        <div>
          <h1>{node.title}</h1>
        </div>
      </TitleWrapper>
    </Link>
  </div>
)

General.propTypes = propTypes

export default General
