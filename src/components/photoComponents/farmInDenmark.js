import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const FarmInDenmark = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "farmInDenmark.png" }) {
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

export default FarmInDenmark
