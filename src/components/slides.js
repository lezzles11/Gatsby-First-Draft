import React, { useState } from "react"
import MorningPage from "../pages/morning"

function EachSlide({ text }) {
  const style = {
    color: "#37474f ",
    fontSize: "4rem",
  }
  return (
    <div>
      <h1 style={style} className="font6">
        {text}
      </h1>{" "}
      <br />
    </div>
  )
}

function Problem() {
  const style = {
    color: "#37474f ",
    fontSize: "3rem",
  }
  return (
    <div>
      <h1 style={style} className="font6">
        Over the past couple of weeks, I started slowing down, doing one thing
        at a time. <br />
        <br />
        The weird thing is, there are so many beautiful things in our lives, if
        we only learn to look. These small pleasures may seem insignificant, but
        they are anything but.
      </h1>{" "}
      <br />
    </div>
  )
}

function Purpose() {
  const style = {
    color: "#37474f ",
    fontSize: "3rem",
  }
  return (
    <div>
      <h1 style={style} className="font6">
        {" "}
        Ideally, you'd be listening to the song (on the bottom right) while
        browsing through these photos. The purpose, really, is to remind
        ourselves to look around more. We have it pretty good.
      </h1>{" "}
      <br />
    </div>
  )
}

function Grateful() {
  const style = {
    color: "#37474f ",
    fontSize: "3rem",
  }
  return (
    <div>
      <h1 style={style} className="font6">
        But if you're not feeling happy, or are not feeling safe, for whatever
        reason, maybe you should say something. If you're feeling something,
        someone else probably feels the same way, too. We're not that different
        from one another.
      </h1>{" "}
      <br />
    </div>
  )
}

export default function Slides() {
  const [slide, setSlide] = useState(1)
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      {slide === 1 && (
        <div>
          <EachSlide text="hi." />

          <button
            className="d-flex justify-content-center"
            style={{ textTransform: "lowercase" }}
            className="font6 button btn btn-outline-dark waves-effect"
            onClick={() => setSlide(2)}
          >
            hi
          </button>
        </div>
      )}
      {slide === 2 && (
        <div>
          <Problem />
          <button
            style={{ textTransform: "lowercase" }}
            className="font6 button btn btn-outline-dark waves-effect"
            onClick={() => setSlide(3)}
          >
            yeah?
          </button>
        </div>
      )}
      {slide === 3 && (
        <div>
          {" "}
          <Purpose />
          <button
            style={{ textTransform: "lowercase" }}
            className="font6 button btn btn-outline-dark waves-effect"
            onClick={() => setSlide(4)}
          >
            Earphones are in!
          </button>
        </div>
      )}{" "}
      {slide === 4 && (
        <div>
          <Grateful />
          <button
            style={{ textTransform: "lowercase" }}
            className="font6 button btn btn-outline-dark waves-effect"
            onClick={() => setSlide(5)}
          >
            let's see how inspired i am after these photos.
          </button>
        </div>
      )}
      {slide === 5 && (
        <div>
          <EachSlide text="(you can click through the pages now)" />
          <br />
          <br />
          <h6 className="font6">
            ** Sidenote **
            <br />
            <br /> pictures were taken during the corona virus (a.k.a. SARS
            round 2) <br /> captions are from my journaling entries
          </h6>
        </div>
      )}
    </div>
  )
}
