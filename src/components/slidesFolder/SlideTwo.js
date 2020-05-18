import EachSlide from "./EachSlide"
import React from "react"
function Problem() {
  const style = {
    color: "#37474f ",
    fontSize: "3rem",
  }
  return (
    <div>
      <h1 style={style} className="font6">
        Over the past couple of weeks, I started slowing down, doing one thing
        at a time. <br />
        <br />
        The weird thing is, there are so many beautiful things in our lives, if
        we only learn to look. These small pleasures may seem insignificant, but
        they are anything but.
      </h1>{" "}
      <br />
    </div>
  )
}
const SlideTwo = () => {
  return (
    <div>
      <Problem />
    </div>
  )
}

export default SlideTwo
