import React from "react"
import Collage from "../components/Collage-old"
import HeaderImage from "./../images/heading-img.png"
import "./../styles/index.scss"
import HeaderComponent from "../components/Header"
const IndexPage = () => (
  <div>
    <HeaderComponent
      headerObj={{ textImage: HeaderImage, redirectUrl: "/" }}
      options={[
        { label: "about", value: "one" },
        { label: "projects", value: "two" },
        { label: "contact", value: "three" },
      ]}
    />
    <main>
      <div className="lhs-fixed-collage">
        <Collage />
      </div>
      <div className="rhs-content">
        <h1>Hi! I’m Sanjana. I’m an engineer based in NYC.</h1>
        <section id="one">
          <h2>about</h2>
          <p style={{ marginBottom: "35px" }}>
            I’m originally from Singapore and have grown up in and lived in
            seven different countries! I moved to NYC in July 2019 to pursue my
            MSc in Chemical Engineering at Columbia University. I’m passionate
            about sustainability, design, technology, and user experiences.
          </p>
          <p>
            In my spare time, I enjoy reading essay collections, discovering new
            magazines, teaching myself embroidery, listening to podcasts about
            fashion and design, and taking long walks around the city.
          </p>
        </section>
        <section id="two">
          <h2>projects</h2>
          <div>
            <h3>City Hikes ➚</h3>
            <p>
              An app prototype that generates personalized and user contributed
              tours of NYC through an immersive augmented reality experience.
            </p>
          </div>
          <div>
            <h3>Columbia Connect ➚</h3>
            <p>
              A social platform that facilitates meaningful interactions between
              Columbia and Barnard students.
            </p>
          </div>
          <em>More exciting projects coming soon.</em>
        </section>
        <section id="three">
          <h2>contact</h2>
          <p>Contact Feel free to reach out! Seriously.</p>
          <ul>
            <li>
              <a href="">Twitter ➚</a>
            </li>
            <li>
              <a href="">Github ➚</a>
            </li>
            <li>
              <a href="">Are.Na ➚</a>
            </li>
            <li>
              <a href="">LinkedIn ➚</a>
            </li>
            <li>
              <a href="">Email ➚</a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  </div>
)

export default IndexPage
