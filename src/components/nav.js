import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const Nav = () => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem`, fontSize: `20px` }}>
    <nav style={{ marginBottom: `1.5rem` }}>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/schedule/">Schedule</ListLink>
        <ListLink to="/instructors/">Instructors</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </nav>
  </div>
)

export default Nav
