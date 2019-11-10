import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
  </Layout>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
