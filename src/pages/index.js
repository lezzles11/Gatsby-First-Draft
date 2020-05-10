import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import { createStore } from "redux"
import Header from "../components/Header"
function IndexPage() {
  const imageSize = {
    maxWidth: "600px",
  }
  const style = {
    margin: "100",
  }
  return (
    <div>
      <Header />
    </div>
  )
}

export default IndexPage
