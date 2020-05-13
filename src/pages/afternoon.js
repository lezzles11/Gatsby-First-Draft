import React from "react"
import ButYouCanFuckThem from "../components/photoComponents/butYouCanFkThem"
import DudeHeMightJustBeSleeping from "../components/photoComponents/DudeHeMightJustBeSleeping"
import DudeYoureDoingGreat from "../components/photoComponents/DudeYoureDoingGreat"
import FarmInDenmark from "../components/photoComponents/farmInDenmark"
import GetBetterAtShit from "../components/photoComponents/getBetterAtShit"
import IMeanYouHaveYourOwnShit from "../components/photoComponents/iMeanYouHaveYourOwnShit"
import ImJustNervous from "../components/photoComponents/imJustNervous"
import IWantToLiveOnAFarm from "../components/photoComponents/iWantToLiveOnAFarm"
import LoveAsASkill from "../components/photoComponents/loveAsASkill"

function KittySleeping({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div style={imageSize}>
          <DudeHeMightJustBeSleeping />
        </div>
      </div>
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
    </div>
  )
}

function ForgetIt({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br />
          <h3 className="font17 card-title text-center">
            But you can. Fuck them.{" "}
          </h3>
        </div>
      </div>{" "}
      <div className="col">
        <div style={imageSize}>
          <ButYouCanFuckThem />
        </div>
      </div>
    </div>
  )
}

function Notecard({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div style={imageSize}>
          {" "}
          <DudeYoureDoingGreat />
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br /> <br />
          <br /> <br />
          <h3 className="font17 card-title text-center">I’m done.</h3>
        </div>
      </div>
    </div>
  )
}
function Eggs({ imageSize }) {
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
          <h3 className="font17 card-title text-center">
            Or just give everything up and go to Denmark and start a farm
          </h3>
        </div>
      </div>{" "}
      <div className="col">
        <div style={imageSize}>
          {" "}
          <FarmInDenmark />
        </div>
      </div>
    </div>
  )
}
function Playlist({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div style={imageSize}>
          {" "}
          <GetBetterAtShit />
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br /> <br /> <br /> <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <h3 className="font17 card-title text-center">
            Get better at shit. Get really good at this. And then when you have
            life together, you can afford a house and a husband lol
          </h3>
        </div>
      </div>
    </div>
  )
}
function WhoAmI({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br />
          <br />
          <h3 className="font17 card-title text-center">
            i mean, you have your own shit, too. this is how society works, i
            guess.
          </h3>
        </div>
      </div>{" "}
      <div className="col">
        <div style={imageSize}>
          {" "}
          <IMeanYouHaveYourOwnShit />
        </div>
      </div>
    </div>
  )
}

function Poster({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div style={imageSize}>
          {" "}
          <ImJustNervous />
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <br />
          <br />
          <br />
          <br />
          <h3 className="font17 card-title text-center">I'm just nervous.</h3>
        </div>
      </div>
    </div>
  )
}
function StevenLunch({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div style={imageSize}>
          {" "}
          <LoveAsASkill />
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br /> <br />
          <h3 className="font17 card-title text-center">
            {" "}
            so glad we talked about love as a skill
          </h3>
        </div>
      </div>
    </div>
  )
}

function KittyNapping({ imageSize }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card-body">
          <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <h3 className="font17 card-title text-center">
            I still want to live on a farm or something.{" "}
          </h3>
        </div>
      </div>{" "}
      <div className="col">
        <div style={imageSize}>
          {" "}
          <IWantToLiveOnAFarm />
        </div>
      </div>
    </div>
  )
}

function AfternoonPage() {
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
      <h1 className="font6">the afternoon</h1>
      <br />
      <Poster imageSize={imageSize} />
      <WhoAmI imageSize={imageSize} />
      <Playlist imageSize={imageSize} />
      <Eggs imageSize={imageSize} />
      <StevenLunch imageSize={imageSize} />
      <KittyNapping imageSize={imageSize} />

      <KittySleeping imageSize={imageSize} />
      <ForgetIt imageSize={imageSize} />
      <Notecard imageSize={imageSize} />
    </div>
  )
}

export default AfternoonPage
