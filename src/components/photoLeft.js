import React, { Component } from "react"
import ImageFormat from "./ImageFormat"
function PhotoLeft({ title, text, overlayText }) {
  const height = {
    height: "250px",
  }
  const border = {
    borderStyle: "dotted",
    color: "black",
    height: "420px",
    padding: "5px",
  }
  return (
    <div style={height} className="row">
      <div style={border} className="col-6 justify-content-center">
        <ImageFormat
          alt="cat"
          overlayText="cat"
          url="https://www.dropbox.com/s/u34x6ei83yxl0go/I%20want%20to%20live%20on%20a%20farm%20or%20something.png?raw=1"
        />
      </div>
      <div style={border} className="col-6 justify-content-center">
        <div className="text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default PhotoLeft
