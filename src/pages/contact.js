import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from '../components/Contact/Contact'
export default function contact({ data }) {
  return (
    <Layout>
      <StyledHero img={data.connectBcg.info.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      info: childImageSharp {
        fluid(quality: 90, maxWidth: 4060) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
