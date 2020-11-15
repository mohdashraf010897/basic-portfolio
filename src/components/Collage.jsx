import React from "react"
import Image1 from "./../images/collage-img-1.png"
import Image2 from "./../images/collage-img-2.png"
import Image3 from "./../images/collage-img-3.png"
import Image4 from "./../images/collage-img-4.png"
import Image5 from "./../images/collage-img-5.png"

const Collage = () => {
  return (
    <div className="collage">
      <img src={Image1} alt="image-1" />
      <img src={Image2} alt="image-2" />
      <img src={Image3} alt="image-3" />
      <img src={Image4} alt="image-4" />
      <img src={Image5} alt="image-5" />
    </div>
  )
}

export default Collage
