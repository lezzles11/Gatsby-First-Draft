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
        <div style={imageSize}>
          <Spotify />
        </div>
      </div>
      <div className="col">
        <Card text="are you paying attention?" />
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
          <h3 className="font11 card-title text-center">are you?</h3>
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
          <h3 className="font17 card-title text-center">I'm not really sure</h3>
        </div>
      </div>
    </div>
  )
}

function StevenAndKitty({ imageSize }) {
  return (
    <div className="row">
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
          <br />

          <br />
          <h3 className="font17 card-title text-center">I'm not really sure</h3>
        </div>
      </div>
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

function KittySleeping({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card-body">
          <br />
          <br />

          <br />
          <br />
          <br />
          <h3 className="font11 card-title text-center">
            Dude, he might just be sleeping
          </h3>
        </div>
      </div>
      <div className="col">
        <div style={imageSize}>
          <DudeHeMightJustBeSleeping />
        </div>
      </div>
    </div>
  )
}
function ImageLeft({ imageSize }) {
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
          <h3 className="font17 card-title text-center">I'm not really sure</h3>
        </div>
      </div>
    </div>
  )
}

function ImageRight({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card-body">
          <br />
          <br />
          <br />
          <br />
          <h3 className="font11 card-title text-center">are you?</h3>
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

function KittyHead({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card-body">
          <br />
          <br />
          <br />
          <br />
          <h3 className="font11 card-title text-center">are you?</h3>
        </div>
      </div>
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
          <br />
          <br />

          <br />
          <h3 className="font17 card-title text-center">I'm not really sure</h3>
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
          <h3 className="font11 card-title text-center">are you?</h3>
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
function IndexPage() {
  const imageSize = {
    maxWidth: "600px",
    marginBotton: "1.45rem",
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Roses imageSize={imageSize} />
      <Night imageSize={imageSize} />
      <StevenAndKitty imageSize={imageSize} />
      <Granola imageSize={imageSize} />
      <Bench imageSize={imageSize} />
      <Tree imageSize={imageSize} />
      <Bamboo imageSize={imageSize} />
      <KittyHead imageSize={imageSize} />
      <KittySleeping imageSize={imageSize} />
      <BeingTrueToMyself />
      {/* TODO: make sure that you write content here */}
      you write content here
      <h5>The beauty of everyday things</h5>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <butYouCanFuckThem />
      <DudeYoureDoingGreat />
      <ButYouCanFuckThem />
      <FarmInDenmark />
      <FlirtingWithBf />
      <GetBetterAtShit />
      <IfYouCare />
      <IMeanYouHaveYourOwnShit />
      <ImJustNervous />
      <IWantToLiveOnAFarm />
      <JustBeingMoreMyself />
      <JustLikeBreathe /> <JustLikeWhatever /> <JustTakeItEasy />{" "}
      <LoveAsASkill />
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/about"> About</Link>
      <Link to="/photo">Photo</Link>
    </Layout>
  )
}

export default IndexPage
