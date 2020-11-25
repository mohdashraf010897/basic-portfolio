import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import { TweenMax, Power3 } from "gsap"

const Contact = () => {
  let contactEle = useRef(null)

  useEffect(() => {
    TweenMax.fromTo(
      contactEle,
      0.8,
      { opacity: 0 },
      { opacity: 1, ease: Power3.easeInOut }
    )
  }, [])
  return (
    <div ref={ele => (contactEle = ele)} className="contact-page center-v-h">
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
