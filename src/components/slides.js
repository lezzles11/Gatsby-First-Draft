import React, { useState } from "react"

import SlideOne from "./slidesFolder/SlideOne"

import SlideTwo from "./slidesFolder/SlideTwo"

import SlideThree from "./slidesFolder/SlideThree"

import SlideFour from "./slidesFolder/SlideFour"

import SlideFive from "./slidesFolder/SlideFive"

const Slides = () => {
  const [slide, setSlide] = useState(0)
  function next(event) {
    setSlide(slide + 1)
  }
  return (
    <div className="container">
      {slide === 0 && <SlideOne />}

      {slide === 1 && <SlideTwo />}

      {slide === 2 && <SlideThree />}

      {slide === 3 && <SlideFour />}

      {slide === 4 && <SlideFive />}
      {slide > 4 && (
        <button
          className="btn button btn-outline-dark waves-effect"
          onClick={() => setSlide(0)}
        >
          {" "}
          restart
        </button>
      )}
      <button
        className="btn button btn-outline-dark waves-effect"
        value={slide}
        onClick={next}
      >
        Next
      </button>
    </div>
  )
}

export default Slides
