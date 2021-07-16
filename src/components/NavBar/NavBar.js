import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import "../../styles/global.css"

import { Link } from "gatsby"

export default function NavBar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav className="nav">
      <h2 className="nav__logo">{title}</h2>
      <ul className="list">
        <Link to="/">
          <li className="list__item">Home</li>
        </Link>
        <Link to="/about">
          <li className="list__item">About</li>
        </Link>
        <Link to="/projects">
          <li className="list__item">Projects</li>
        </Link>
        <Link to="/hire">
          <li className="list__item">Hire</li>
        </Link>
      </ul>
    </nav>
  )
}
