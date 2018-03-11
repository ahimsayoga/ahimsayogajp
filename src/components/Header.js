import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import SelectLanguage from './SelectLanguage'
import MainMenu from './MainMenu'

const Header = (props) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Ahimsa Yoga
        </Link>
      </h1>
      <SelectLanguage langs={props.langs} />
      <MainMenu locale={props.locale} />
    </div>
  </div>
)

Header.propTypes = {
  langs: PropTypes.array,
  locale: PropTypes.string
}

export default Header
