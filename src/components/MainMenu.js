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
  <ul style={{ listStyle: `none`, float: `right` }}>
    <ListLink to={'/' + props.locale + '/'}>Home</ListLink>
    <ListLink to={'/' + props.locale + '/about'}>About</ListLink>
    <ListLink to={'/' + props.locale + '/schedule'}>Schedule</ListLink>
  </ul>

const MainMenu = (props) => {
  return (
    <section>
      <ListLinkByLang locale={props.locale} />
    </section>
  )
}

MainMenu.propTypes = {
  locale: PropTypes.string
}

export default MainMenu
