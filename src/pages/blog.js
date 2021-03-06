import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"
const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <StyledHero img={data.blogBcg.info.fluid} />
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      info: childImageSharp {
        fluid(quality: 90, maxWidth: 4060) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
