import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import HeaderImage from "./../images/heading-img.png"
export default ({ headerObj: { textImage, redirectUrl }, options }) => {
  const scrolldiv = eleId => {
    window.scrollTo({
      top: findPosition(document.getElementById(eleId)) - 80,
      behavior: "smooth",
    })
  }
  const findPosition = obj => {
    var currenttop = 0
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop
      } while ((obj = obj.offsetParent))
      return [currenttop]
    }
  }

  return (
    <header>
      <Link to={redirectUrl}>
        {<img src={textImage} alt="sanjana jagganathan" />}
      </Link>
      <nav>
        <select
          name="nav-select"
          id="nav-select"
          onChange={e => scrolldiv(e.target.value)}
        >
          {options.map((item, idx) => (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </nav>
    </header>
  )
}
