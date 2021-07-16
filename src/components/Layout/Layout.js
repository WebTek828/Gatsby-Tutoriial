import React from "react"

import "../../styles/global.css"
import NavBar from "../NavBar/NavBar"

export default function Layout(props) {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  )
}
