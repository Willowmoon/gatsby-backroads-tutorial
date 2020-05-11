import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/items.module.css"
import Tour from "./Tour"
import Title from "../Title"

const getTourList = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const TourList = () => {
  const response = useStaticQuery(getTourList)
  const tours = response.tours.edges
  const sortedTours = response.tours.edges
  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours.map(({ node }) => {
          return <Tour tour={node} key={node.contentful_id} />
        })}
      </div>
    </section>
  )
}

export default TourList
