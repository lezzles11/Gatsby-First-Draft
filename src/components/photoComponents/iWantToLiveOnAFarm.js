import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const IWantToLiveOnAFarm = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "IWantToLiveOnAFarm.png" }) {
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

export default IWantToLiveOnAFarm
