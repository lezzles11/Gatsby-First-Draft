import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import MorningPage from "../pages/morning"
import AfternoonPage from "../pages/afternoon"
import NightPage from "../pages/night"
import Slides from "./slides"
import Video from "./video"

function Header({ siteTitle }) {
  const [page, setPage] = useState(1)
  return (
    <div>
      <header
        style={{
          background: `white`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
          className="row"
        >
          <h2 className="font6" style={{ padding: 10 }}>
            <div>
              <a style={{ color: "#01579b" }} onClick={() => setPage(1)}>
                everyday pleasures
              </a>
            </div>
          </h2>
          <h2 className="font6" style={{ padding: 10 }}>
            <div>
              <a style={{ color: "#e65100" }} onClick={() => setPage(2)}>
                morning
              </a>
            </div>
          </h2>
          <h2 className="font6" style={{ padding: 10 }}>
            <div>
              <a style={{ color: "#33691e" }} onClick={() => setPage(3)}>
                afternoon
              </a>
            </div>
          </h2>
          <h2 className="font6" style={{ padding: 10 }}>
            <div>
              <a style={{ color: "#6d4c41 " }} onClick={() => setPage(4)}>
                night
              </a>
            </div>
          </h2>
        </div>
      </header>
      <main>
        {page === 1 && <Slides />}
        {page === 2 && <MorningPage />}
        {page === 3 && <AfternoonPage />}
        {page === 4 && <NightPage />}
      </main>
      <div className="stickToBottom">
        <footer>
          <div className="row">
            <div className="col-9"></div>
            <div className="col-3">
              {" "}
              <Video
                videoSrcURL="https://www.youtube.com/embed/0vH9FjGZ_Oc"
                videoTitle="Official Music Video on YouTube"
              />
              <br />
              <p style={{ padding: "1px", color: "white" }}>
                {" "}
                &nbsp;&nbsp;&nbsp;{" "}
                <span className=" orange darken-3 container">
                  built during the corona
                </span>
                <br />
                {` `}&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {` `}
                <span className=" blue accent-4 container">
                  built by lezzles
                </span>
                <br />
                {` `}&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="pink accent-4 container">
                  built with{" "}
                  <a style={{ color: "white" }} href="https://www.gatsbyjs.org">
                    Gatsby
                  </a>
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>{" "}
      <br />
      <br />
    </div>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
