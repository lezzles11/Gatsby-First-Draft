import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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
        <Link
          to="/"
          style={{
            color: `darkBlue`,
            textDecoration: `none`,
          }}
        >
          everyday pleasures
        </Link>
      </h2>
      <h2 className="font6" style={{ padding: 10 }}>
        <Link
          to="/morning"
          style={{
            color: `darkBlue`,
            textDecoration: `none`,
          }}
        >
          {"   "}
          morning
        </Link>
      </h2>
      <h2 className="font6" style={{ padding: 10 }}>
        <Link
          to="/afternoon"
          style={{
            color: `darkBlue`,
            textDecoration: `none`,
          }}
        >
          afternoon
        </Link>
      </h2>
      <h2 className="font6" style={{ padding: 10 }}>
        <Link
          to="/night"
          style={{
            color: `darkBlue`,
            textDecoration: `none`,
          }}
        >
          night
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
