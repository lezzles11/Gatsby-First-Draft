import React from "react"
import Spotify from "../components/photoComponents/Spotify"
import BeingTrueToMyself from "../components/photoComponents/beingTrueToMyself"
import FinancialIndependence from "../components/photoComponents/financialIndependence"
import FlirtingWithBf from "../components/photoComponents/flirtingWithBf"
import IfYouCare from "../components/photoComponents/ifYouCare"
import JustBeingMoreMyself from "../components/photoComponents/justBeingMoreMyself"
import JustLikeBreathe from "../components/photoComponents/justLikeBreathe"
import JustLikeWhatever from "../components/photoComponents/justLikeWhatever"
import JustTakeItEasy from "../components/photoComponents/justTakeItEasy"

function Card({ text }) {
  return (
    <div className="card-body">
      <br />
      <br />

      <br />

      <br />
      <h3 className="font17 card-title text-center">{text}</h3>
    </div>
  )
}

function Roses({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <Card text="are you paying attention?" />
      </div>
      <div className="col">
        <div style={imageSize}>
          <Spotify />
        </div>
      </div>
    </div>
  )
}
function WalkingNight({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card-body">
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
          <h3 className="font11 card-title text-center">
            Financial Independence!
          </h3>
        </div>
      </div>
      <div className="col">
        <div style={imageSize}>
          <FinancialIndependence />
        </div>
      </div>
    </div>
  )
}

function Organizing({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br /> <br /> <br />
          <br /> <br />
          <br />
          <h3 className="font17 card-title text-center">
            is this what it means to be more true to myself and follow what I
            want
          </h3>
        </div>
      </div>{" "}
      <div className="col">
        <div style={imageSize}>
          {" "}
          <BeingTrueToMyself />
        </div>
      </div>
    </div>
  )
}

function StevenDyingHair({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div style={imageSize}>
          {" "}
          <FlirtingWithBf />
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br />
          <h3 className="font17 card-title text-center">
            Flirting with my boyfriend~
          </h3>
        </div>
      </div>
    </div>
  )
}
function PrettyTree({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div style={imageSize}>
          {" "}
          <IfYouCare />
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <h3 className="font17 card-title text-center">
            if you care about it, you care about it.{" "}
          </h3>
        </div>
      </div>
    </div>
  )
}
function Baking({ imageSize }) {
  return (
    <div className="row">
      {" "}
      <div className="col">
        <div style={imageSize}>
          {" "}
          <JustBeingMoreMyself />
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3 className="font17 card-title text-center">
            just being more myself, whatever that means.{" "}
          </h3>
        </div>
      </div>
    </div>
  )
}

function StevenSandwich({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div style={imageSize}>
          {" "}
          <JustTakeItEasy />
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br /> <br />
          <h3 className="font17 card-title text-center">
            just like, take it easy.
          </h3>
        </div>
      </div>
    </div>
  )
}

function Candles({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br />
          <h3 className="font17 card-title text-center">Just like, breathe.</h3>
        </div>
      </div>{" "}
      <div className="col">
        <div style={imageSize}>
          {" "}
          <JustLikeBreathe />
        </div>
      </div>
    </div>
  )
}

function Siblings({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div style={imageSize}>
          {" "}
          <JustLikeWhatever />
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <br />
          <h3 className="font17 card-title text-center">I'm not really sure</h3>
        </div>
      </div>
    </div>
  )
}

function NightPage() {
  const imageSize = {
    maxWidth: "600px",
    marginBotton: "1.45rem",
  }
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <h1 className="font6">when it gets dark</h1>

      <Roses imageSize={imageSize} />
      <PrettyTree imageSize={imageSize} />
      <WalkingNight imageSize={imageSize} />
      <StevenDyingHair imageSize={imageSize} />
      <Organizing imageSize={imageSize} />

      <Baking imageSize={imageSize} />

      <Candles imageSize={imageSize} />
    </div>
  )
}

export default NightPage
