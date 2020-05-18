import React from "react"
const Video = ({ videoSrcURL, height, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      height={height}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video
