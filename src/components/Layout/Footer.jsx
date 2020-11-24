import React from "react"
import { Link } from "gatsby"

const NAV_ITEMS = [
  { url: "/about", text: "about" },
  { url: "/projects", text: "projects" },
  { url: "/contact", text: "contact" },
]

const Footer = ({ location }) => {
  const mapLinkToJsx = () =>
    NAV_ITEMS.map((item, idx) => (
      <li
        className={`${location.pathname === item.url ? "active-link" : ""}`}
        key={idx}
      >
        <Link to={item.url}>{item.text}</Link>
      </li>
    ))

  return (
    <footer>
      <ul>{mapLinkToJsx()}</ul>
    </footer>
  )
}

export default Footer
