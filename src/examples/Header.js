import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const getSiteData = graphql`
    query FirstQuery{
      site {
        info: siteMetadata {
          title
          description
          author
        }
      }
    }
  `


const Header = () => {
  const {
    site: { info },
  } = useStaticQuery(getSiteData)
  return (
    <div>
      <h1>title:{info.title} </h1>
      <h1>author:{info.author} </h1>
    </div>
  )
}

export default Header
