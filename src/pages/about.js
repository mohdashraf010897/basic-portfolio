import React, { useRef, useEffect } from "react"
import Image from "./../images/photo-landing-page.png"
import { TweenMax, Power3 } from "gsap"

const About = () => {
  let aboutRootEle = useRef(null)
  let aboutLhsEle = useRef(null)

  useEffect(() => {
    TweenMax.fromTo(
      aboutRootEle,
      0.8,
      { opacity: 0 },
      { opacity: 1, ease: Power3.easeInOut }
    )
    TweenMax.fromTo(
      aboutLhsEle,
      0.8,
      { opacity: 0 },
      { opacity: 1, ease: Power3.easeInOut, delay: 0.4 }
    )
  }, [])
  return (
    <div ref={ele => (aboutRootEle = ele)} className="about-page center-h ">
      <div ref={ele => (aboutLhsEle = ele)} className="about-page__lhs">
        <p>
          I’m originally from Singapore and have grown up in and lived in seven
          different countries! I moved to NYC in July 2019 to pursue my MSc in
          Chemical Engineering at Columbia University. I’m passionate about
          sustainability, design, technology, and user experiences.
        </p>
        <p>
          In my spare time, I enjoy reading essay collections, discovering new
          magazines, listening to podcasts about fashion and design, and taking
          long walks around the city.
        </p>
      </div>
      <div className="about-page__rhs center-v">
        <img src={Image} alt="my photo" />{" "}
      </div>
    </div>
  )
}

export default About
