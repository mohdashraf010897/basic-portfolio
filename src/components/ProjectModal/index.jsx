import React from "react"
import Header from "../Header"
import HeaderImage from "./../../images/heading-img.png"

export default () => {
  return (
    <div className="project-modal">
      <div className="project-modal__header">
        <Header
          headerObj={{ textImage: HeaderImage, redirectUrl: "/" }}
          options={[
            { label: "overview", value: "overview" },
            { label: "user research", value: "user-research" },
            { label: "problem", value: "problem" },
            {
              label: "user research synthesis",
              value: "user-research-synthesis",
            },
          ]}
        />
        <div className="close-btn">X</div>
      </div>
      <div className="project-modal__body"></div>
    </div>
  )
}
