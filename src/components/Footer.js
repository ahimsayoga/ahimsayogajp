import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MainMenu from './MainMenu'

// Create a Wrapper component that'll render a <div> tag with some styles
const FooterWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Footer = (props) => (
  <FooterWrapper>
    <MainMenu locale={props.locale} />
  </FooterWrapper>
)

Footer.propTypes = {
  langs: PropTypes.array,
  locale: PropTypes.string
}

export default Footer
