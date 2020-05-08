import React from "react"

import Spotify from "./photoComponents/Spotify"
function ImageFormat({ url, alt, overlayText }) {
  return (
    <div style={{ height: "100%" }} className="d-flex align-items-center p-5">
      <div
        style={{
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <div className="view overlay">
          <Spotify />
          <div className="mask flex-center rgba-green-slight">
            <p className="white-text">{overlayText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ImageFormat
