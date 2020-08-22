import React, { Fragment } from "react"
import Container from "../styled/Container"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../common/Seo"
import { fadeInVariants } from "../../styles/framer-utils"
import { motion } from "framer-motion"
import ItemsGridContainer from "../items-grid/ItemsGridContainer"
import { mapItem } from "../../utils/map-md-item"
import { colors } from "../../styles/variables"

const TutorialLayout = ({ data }) => {
  const slug = data.mdx.slug
  const tutorialEntries = data.allMdx.edges
  console.log(data.mdx.frontmatter.title)
  return (
    <Fragment>
      <Container
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        margin="2rem auto 0"
      >
        <Seo title={data.mdx.frontmatter.title} />
        {data.mdx.frontmatter.title ? (
          <motion.h1 layoutId={`post-${slug}`}>
            {data.mdx.frontmatter.title}
          </motion.h1>
        ) : null}
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Container>
      <Container
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        wide
        margin="0 auto"
      >
        <ItemsGridContainer
          items={tutorialEntries.map(mapItem)}
          itemUrlPrefix={`/tutorial/`}
          noItemsMessage="No tutorials yet. Keep looking!"
          themeColor={colors.primary}
        />
      </Container>
    </Fragment>
  )
}

export const query = graphql`
  query($id: String!, $tutorialId: String!) {
    mdx(id: { eq: $id }) {
      slug
      frontmatter {
        title
        date(fromNow: true)
        intro
        tutorialId
      }
      body
    }
    allMdx(filter: { frontmatter: { tutorialParent: { eq: $tutorialId } } }) {
      edges {
        node {
          slug
          frontmatter {
            title
            date(fromNow: true)
            intro
          }
          timeToRead
        }
      }
    }
  }
`

export default TutorialLayout
