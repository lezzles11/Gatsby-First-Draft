import React, { useState } from "react"

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
  const [slideOne, setSlideOne] = useState(true)

  const [slideTwo, setSlideTwo] = useState(false)

  const [slideThree, setSlideThree] = useState(false)

  const [slideFour, setSlideFour] = useState(false)

  const [slideFive, setSlideFive] = useState(false)

  const slideOneHandler = event => {
    setSlideOne(false)
    setSlideTwo(true)
  }
  const slideTwoHandler = event => {
    setSlideTwo(false)
    setSlideThree(true)
  }
  const slideThreeHandler = event => {
    setSlideThree(false)
    setSlideFour(true)
  }
  const slideFourHandler = event => {
    setSlideFour(false)
    setSlideFive(true)
  }
  const slideFiveHandler = event => {
    setSlideFive(false)
    setSlideOne(true)
  }
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      {slideOne === true && (
        <div>
          <EachSlide text="hi." />

          <button
            className="d-flex justify-content-center"
            style={{ textTransform: "lowercase" }}
            className="font6 button btn btn-outline-dark waves-effect"
            onClick={slideOneHandler}
          >
            hi
          </button>
        </div>
      )}
      {slideTwo === true && (
        <div>
          <Problem />
          <button
            style={{ textTransform: "lowercase" }}
            className="font6 button btn btn-outline-dark waves-effect"
            onClick={slideTwoHandler}
          >
            yeah
          </button>
        </div>
      )}
      {slideThree === true && (
        <div>
          <Purpose />
          <button
            style={{ textTransform: "lowercase" }}
            className="font6 button btn btn-outline-dark waves-effect"
            onClick={slideThreeHandler}
          >
            Earphones are in!
          </button>
        </div>
      )}{" "}
      {slideFour === true && (
        <div>
          <Grateful />
          <button
            style={{ textTransform: "lowercase" }}
            className="font6 button btn btn-outline-dark waves-effect"
            onClick={slideFourHandler}
          >
            playing song now, too!
          </button>
        </div>
      )}
      {slideFive === true && (
        <div>
          <EachSlide text="(you can click through the pages now)" />
          <br />
          <br />
          <h6 className="font6">
            ** Sidenote **
            <br />
            <br /> pictures were taken during the corona virus (a.k.a. SARS
            round 2) <br /> captions are from my journaling entries
          </h6>{" "}
          <button
            style={{ textTransform: "lowercase" }}
            className="font6 button btn btn-outline-dark waves-effect"
            onClick={slideFiveHandler}
          >
            restart
          </button>
        </div>
      )}
    </div>
  )
}
