import React from "react"
import slug from "slug"
import Typography from "@material-ui/core/Typography"
import { graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/Link"

const IndexPage = props => {
  const { classes } = props

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Layout>
  )
}

const styles = () => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
})

export default withStyles(styles)(IndexPage)

export const query = graphql`
  {
    allCollectionsJson {
      edges {
        node {
          title
        }
      }
    }
  }
`
