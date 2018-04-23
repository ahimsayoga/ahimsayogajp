import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const ListLinkByLang = props =>
  <ul style={{ listStyle: `none`, display: 'inline-block' }}>
    <ListLink to={'/' + props.locale + '/'}>Home</ListLink>
    <ListLink to={'/' + props.locale + '/about'}>About</ListLink>
    <ListLink to={'/' + props.locale + '/schedule'}>Schedule</ListLink>
    <ListLink to={'/' + props.locale + '/contact'}>Contact</ListLink>
  </ul>

const MainMenu = (props) => {
  return (
    <ListLinkByLang locale={props.locale} />
  )
}

MainMenu.propTypes = {
  locale: PropTypes.string
}

export default MainMenu
