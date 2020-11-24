import React from "react"
import Footer from "./Footer"
import { Link } from "gatsby"

const Layout = ({ children, location }) => {
  console.log(location)
  return (
    <div className="layout-container">
      <Link to="/">
        <h1>Sanjana Jagannathan</h1>
      </Link>
      <div className="layout-body">{children}</div>
      <Footer location={location} />
    </div>
  )
}

export default Layout
