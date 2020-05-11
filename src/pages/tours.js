import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Tours from "../components/Tours/Tours"
const tours = (props) => {
  return (
    <Layout>
      <StyledHero img={props.data.defaultBcg.info.fluid} />
      <Tours/>
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      info: childImageSharp {
        fluid(quality: 90, maxWidth: 4060) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
