import { graphql } from "gatsby"
import React from "react"

import * as styles from "../../styles/projectpage.module.css"

import Layout from "../../components/Layout/Layout"
import { Link } from "@reach/router"
import Img from "gatsby-image"

export default function index({ data }) {
  const projects = data.allMarkdownRemark.edges.map(({ node }) => {
    const { fluid } = node.frontmatter.thumbnail.childImageSharp
    return (
      <Link
        to={`/projects${node.fields.slug}`}
        key={node.id}
        className={styles.project}
      >
        <Img fluid={fluid} />
        <h3>{node.frontmatter.title}</h3>
        <p>{node.frontmatter.stack}</p>
      </Link>
    )
  })

  return (
    <Layout>
      <div>
        <h3 className={styles.header}>This is the project page.</h3>
        <div className={styles.projects}>{projects}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPage {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            stack
            title
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
          id
        }
      }
    }
  }
`
