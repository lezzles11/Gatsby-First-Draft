import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Spotify from "../components/photoComponents/Spotify"
import BeingTrueToMyself from "../components/photoComponents/beingTrueToMyself"
import ButYouCanFuckThem from "../components/photoComponents/butYouCanFkThem"
import DoYouNeedToBeHappier from "../components/photoComponents/doYouNeedToBeHappier"
import DudeHeMightJustBeSleeping from "../components/photoComponents/dudeHeMightJustBeSleeping"
import DudeYoureDoingGreat from "../components/photoComponents/DudeYoureDoingGreat"
import FarmInDenmark from "../components/photoComponents/farmInDenmark"
import FinancialIndependence from "../components/photoComponents/financialIndependence"
import FlirtingWithBf from "../components/photoComponents/flirtingWithBf"
import GetBetterAtShit from "../components/photoComponents/getBetterAtShit"
import IfYouCare from "../components/photoComponents/ifYouCare"
import IMeanWeCanFigureItOut from "../components/photoComponents/iMeanWeCanFigureItOut"
import IMeanYouHaveYourOwnShit from "../components/photoComponents/iMeanYouHaveYourOwnShit"
import ImJustNervous from "../components/photoComponents/imJustNervous"
import ImNotReallySure from "../components/photoComponents/imNotReallySure"
import IWantToLiveOnAFarm from "../components/photoComponents/iWantToLiveOnAFarm"
import JustBeingMoreMyself from "../components/photoComponents/justBeingMoreMyself"
import JustLikeBreathe from "../components/photoComponents/justLikeBreathe"
import JustLikeWhatever from "../components/photoComponents/justLikeWhatever"
import JustTakeItEasy from "../components/photoComponents/justTakeItEasy"
import LoveAsASkill from "../components/photoComponents/loveAsASkill"
import TheresSomePsychological from "../components/photoComponents/theresSomePsychological"
import TryingToDoAlot from "../components/photoComponents/tryingToDoAlot"
import YouAreDoingGreat from "../components/photoComponents/youAreDoingGreat"

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
function Night({ imageSize }) {
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
      <div className="col">
        <div style={imageSize}>
          {" "}
          <JustBeingMoreMyself />
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
        <div style={imageSize}>
          {" "}
          <JustLikeBreathe />
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br />
          <h3 className="font17 card-title text-center">Just like, breathe.</h3>
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

function IndexPage() {
  const imageSize = {
    maxWidth: "600px",
    marginBotton: "1.45rem",
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="font6">when it gets dark</h1>

      <Roses imageSize={imageSize} />
      <PrettyTree imageSize={imageSize} />
      <Night imageSize={imageSize} />
      <Organizing imageSize={imageSize} />
      <StevenDyingHair imageSize={imageSize} />

      <Baking imageSize={imageSize} />

      <Candles imageSize={imageSize} />
      <Siblings imageSize={imageSize} />
      <StevenSandwich imageSize={imageSize} />

      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/about"> About</Link>
      <Link to="/photo">Photo</Link>
    </Layout>
  )
}

export default IndexPage
