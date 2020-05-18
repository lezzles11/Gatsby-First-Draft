import EachSlide from "./EachSlide"
import React from "react"
function Purpose() {
  const style = {
    color: "#37474f ",
    fontSize: "3rem",
  }
  return (
    <div>
      <h1 style={style} className="font6">
        {" "}
        Ideally, you'd be listening to the song (on the bottom right) while
        browsing through these photos. The purpose, really, is to remind
        ourselves to look around more. We have it pretty good.
      </h1>{" "}
      <br />
    </div>
  )
}
const SlideThree = () => {
  return (
    <div>
      <Purpose />
    </div>
  )
}

export default SlideThree
