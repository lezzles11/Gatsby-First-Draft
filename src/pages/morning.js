import React from "react"
import SEO from "../components/seo"
import DoYouNeedToBeHappier from "../components/photoComponents/doYouNeedToBeHappier"
import IMeanWeCanFigureItOut from "../components/photoComponents/iMeanWeCanFigureItOut"
import ImNotReallySure from "../components/photoComponents/imNotReallySure"
import TheresSomePsychological from "../components/photoComponents/theresSomePsychological"
import TryingToDoAlot from "../components/photoComponents/tryingToDoAlot"
import YouAreDoingGreat from "../components/photoComponents/youAreDoingGreat"

import Possible from "../components/photoComponents/possible"
import Introspection from "../components/photoComponents/introspection"

function Bench({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div style={imageSize}>
          <ImNotReallySure />
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
          <h3 className="font17 card-title text-center">
            I'm not really sure.
          </h3>
        </div>
      </div>
    </div>
  )
}

function SittingAlone({ imageSize }) {
  return (
    <div className="row">
      {" "}
      <div className="col">
        <div style={imageSize}>
          {" "}
          <Introspection />
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
          <br />

          <br />
          <h3 className="font17 card-title text-center">
            It's important that we can always come back to this, no matter what
            happens.
          </h3>
        </div>
      </div>{" "}
    </div>
  )
}

function StevenAndKitty({ imageSize }) {
  return (
    <div className="row">
      {" "}
      <div className="col">
        <div style={imageSize}>
          {" "}
          <DoYouNeedToBeHappier />
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
          <h3 className="font17 card-title text-center">
            do you need to be happier?
          </h3>
        </div>
      </div>{" "}
    </div>
  )
}
function Granola({ imageSize }) {
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
          <br />
          <br />
          <h3 className="font11 card-title text-center">
            I mean, we can figure it out.
          </h3>
        </div>
      </div>
      <div className="col">
        <div style={imageSize}>
          <IMeanWeCanFigureItOut />
        </div>
      </div>
    </div>
  )
}

function KittyHead({ imageSize }) {
  return (
    <div className="row">
      {" "}
      <div className="col">
        <div className="card-body">
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3 className="font11 card-title text-center">
            girl, it seems like you’re trying to do a lot.
          </h3>
        </div>
      </div>{" "}
      <div className="col">
        <div style={imageSize}>
          <TryingToDoAlot />
        </div>
      </div>
    </div>
  )
}
function Bamboo({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div style={imageSize}>
          <TheresSomePsychological />
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3 className="font17 card-title text-center">be more like water</h3>
        </div>
      </div>
    </div>
  )
}
function Tree({ imageSize }) {
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
          <br />
          <br />
          <br />
          <br />
          <h3 className="font11 card-title text-center">
            dude, you’re doing great.
          </h3>
        </div>
      </div>
      <div className="col">
        <div style={imageSize}>
          {" "}
          <YouAreDoingGreat />
        </div>
      </div>
    </div>
  )
}

function ItsPossible({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card-body">
          <br />

          <br />
          <br />
          <br />
          <h3 className="font11 card-title text-center">
            It’s strange, actually, if you think about it deeply. That we all
            crave love, but are all afraid to love first.
          </h3>
        </div>
      </div>
      <div className="col">
        <div style={imageSize}>
          <Possible />
        </div>
      </div>
    </div>
  )
}

function MorningPage() {
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
      <SEO title="Morning" /> <h1 className="font6">the pitter patter hours</h1>
      <Granola imageSize={imageSize} />
      <Bench imageSize={imageSize} />
      <Tree imageSize={imageSize} />
      <Bamboo imageSize={imageSize} />
      <KittyHead imageSize={imageSize} />
      <SittingAlone imageSize={imageSize} />
      <ItsPossible imageSize={imageSize} />
    </div>
  )
}

export default MorningPage
