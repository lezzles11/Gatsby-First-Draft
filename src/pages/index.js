import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

function IndexPage() {
  const imageSize = {
    maxWidth: "600px",
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <br />
        <br />
        <br />
        <h1>hi.</h1>
        <button type="btn button waves-outline">hi</button>
        <h2 className="font11">we all feel lonely</h2>
      </div>
    </Layout>
  )
}

export default IndexPage
