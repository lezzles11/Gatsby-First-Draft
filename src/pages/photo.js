import React from "react"
import Container from "../components/Container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Spotify from "../components/photoComponents/Spotify"
import PhotoLeft from "../components/photoLeft"
import PhotoRight from "../components/photoRight"
const json = [
  {
    id: 1,
    image:
      "https://www.dropbox.com/s/qyrf9kbxeskivvy/I%E2%80%99m%20just%20nervous.png?raw=1",
    title: "I'm just nervous",
    caption: "blup blup",
  },
  {
    id: 2,
    image:
      "https://www.dropbox.com/s/u34x6ei83yxl0go/I%20want%20to%20live%20on%20a%20farm%20or%20something.png?raw=1",
    title: "I want to live on a farm or something",
    caption: "blup blup",
  },
]
const captions = ["hi", "whatsup"]

export default function Photo() {
  return (
    <div>
      <div className="row">
        <PhotoRight title="title" text="text" overlayText="overlay" />
      </div>{" "}
      <br />
      <div className="row">
        <PhotoLeft title="title" text="text" overlayText="overlay" />
      </div>
    </div>
  )
}
