import React from "react"
import { StaticQuery, graphql } from "gatsby"
const getSiteData = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        author
      }
    }
  }
`
const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={(data) => {
        return (
          <div>
            <h2>title: {data.site.info.title}</h2>
            <h4>author: {data.site.info.author}</h4>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
