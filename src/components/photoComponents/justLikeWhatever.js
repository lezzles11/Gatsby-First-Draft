import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const JustLikeWhatever = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "justLikeWhatever.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default JustLikeWhatever
