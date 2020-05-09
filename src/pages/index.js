import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

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

function IndexPage() {
  const imageSize = {
    maxWidth: "600px",
  }
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
