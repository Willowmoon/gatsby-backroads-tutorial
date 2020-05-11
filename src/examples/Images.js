import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import img from "../images/connectBcg.jpeg"
import Img from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      info: childImageSharp {
        fixed(width: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      info: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={img} alt="" className="basic" />
      </article>
      <article>
        <h3>Fixed Image/Blur</h3>
        <Img fixed={data.fixed.info.fixed} />
      </article>
      <article>
        <h3>Fluid Image/SVG</h3>
        fluid takes size of parent element
        <Img fluid={data.fluid.info.fluid} />
        <div className="fluid">
          <Img fluid={data.fluid.info.fluid} />
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 3px #f5f5f5 solid;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
  .fluid {
      width: 200px;
  }
`

export default Images
