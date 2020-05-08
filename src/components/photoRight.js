import React, { Component } from "react"
import ImageFormat from "./ImageFormat"
function PhotoRight({ title, text, overlayText }) {
  const border = {
    borderStyle: "dotted",
    justifyContent: "center",
    alignSelf: "center",
    color: "black",
    height: "800px",
    padding: "5px",
  }
  const width = {
    width: "100%",
  }
  return (
    <div className="row">
      <div style={border} className="col-6">
        <div className="text-center ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
      <div style={border} className="col">
        <ImageFormat
          alt="cat"
          overlayText="cat"
          url="https://www.dropbox.com/s/u34x6ei83yxl0go/I%20want%20to%20live%20on%20a%20farm%20or%20something.png?raw=1"
        />
      </div>
    </div>
  )
}

export default PhotoRight
