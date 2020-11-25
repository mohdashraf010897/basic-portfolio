import React, { useRef, useState, useEffect } from "react"
import { TweenMax, Power3 } from "gsap"

const Index = () => {
  let indexEle = useRef(null)

  useEffect(() => {
    TweenMax.fromTo(
      indexEle,
      0.8,
      { opacity: 0 },
      { opacity: 1, ease: Power3.easeInOut }
    )
  }, [])

  return (
    <div ref={ele => (indexEle = ele)} className="home-page center-v-h">
      <span>
        Hi! I’m <p>Sanjana</p>. I’m an engineer based in NYC.
      </span>
    </div>
  )
}

export default Index
