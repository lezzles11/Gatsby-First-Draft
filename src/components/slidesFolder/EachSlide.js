import React from "react"
function EachSlide({ text }) {
  const style = {
    color: "#37474f ",
    fontSize: "4rem",
  }
  return (
    <div>
      <h1 style={style} className="font6">
        {text}
      </h1>{" "}
      <br />
    </div>
  )
}

export default EachSlide
