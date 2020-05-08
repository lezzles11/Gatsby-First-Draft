import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const ButYouCanFuckThem = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "butYouCanFuckThem.png" }) {
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

export default ButYouCanFuckThem
