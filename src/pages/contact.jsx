import React from "react"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <div className="contact-page center-v-h">
      <ul className="contact-list">
        <li>
          <Link>Twitter</Link>
        </li>
        <li>
          <Link>Github</Link>
        </li>
        <li>
          <Link>Are.na</Link>
        </li>
        <li>
          <Link>Linkedin</Link>
        </li>
        <li>
          <Link>Email</Link>
        </li>
      </ul>
    </div>
  )
}

export default Contact
