import React from "react"

import * as styles from "../styles/homepage.module.css"
import Layout from "../components/Layout/Layout"
import { navigate, graphql } from "gatsby"
import Img from "gatsby-image"

export default function HomePage({ data }) {
  const { fluid } = data.file.childImageSharp

  return (
    <Layout>
      <div className="wrapper">
        <div className={styles.container}>
          <h3 className={styles.header}>Web Tech Programming</h3>
          <p className={styles.paragraph}>Website Design & Development</p>
          <button onClick={() => navigate("/projects")} className={styles.btn}>
            View Projects
          </button>
        </div>
        <Img fluid={fluid} />
      </div>
    </Layout>
  )
}

export const getImages = graphql`
  query MyQuery {
    file(relativePath: { eq: "project.png" }) {
      sourceInstanceName
      relativePath
      childImageSharp {
        fluid(maxWidth: 2048, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
