import React from "react"
import Container from "../components/Container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

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

function PhotoLeft({ leftTitle, leftText, leftPhoto, leftOverlay }) {
  return (
    <div style={{ width: "100%", height: "200px" }} className="row">
      <div className="col">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="text-center">
          <h5 className="card-title">{leftTitle}</h5>
          <p className="card-text">{leftText}</p>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="col">
        <div className="view overlay">
          <div className="mask flex-center rgba-green-slight">
            <p className="white-text">{leftOverlay}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TestLayout() {
  return (
    <div>
      <PhotoLeft
        leftTitle="I want to live on a farm in denmark or something"
        leftPhoto="areyoupayingattention.png"
        leftOverlay="comfort in rice and eggs"
      />
    </div>
  )
}
export default function Photo() {
  return (
    <div>
      <TestLayout />
    </div>
  )
}
