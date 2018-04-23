import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SelectLanguage from './SelectLanguage'
import MainMenu from './MainMenu'
import logo from '../pages/assets/images/logo.png'

// Create a Wrapper component that'll render a <div> tag with some styles
const HeaderWrapper = styled.div`
  background: white;
  margin-bottom: 1.45rem;
`

const HeaderInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 0 1rem 0;
`

const Header = (props) => (
  <HeaderWrapper>
    <header>
      <HeaderInner>
        <h1 style={{ margin: 0, display: 'inline-block' }}>
          <Link
            to='/'
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            <img src={logo} width="150px" alt="Logo" style={{margin: 0}} />
          </Link>
        </h1>
        <MainMenu locale={props.locale} />
        <SelectLanguage langs={props.langs} />
      </HeaderInner>
    </header>
  </HeaderWrapper>
)

Header.propTypes = {
  langs: PropTypes.array,
  locale: PropTypes.string
}

export default Header
