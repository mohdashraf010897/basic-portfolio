import GatsbyImage from "gatsby-image"
import React from "react"
import Image from "./../images/photo-landing-page.png"

const About = () => {
  return (
    <div className="about-page center-h ">
      <div className="about-page__lhs">
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
