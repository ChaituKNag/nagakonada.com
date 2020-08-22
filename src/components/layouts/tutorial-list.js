import React from "react"
import Container from "../styled/Container"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../common/Seo"
import { fadeInVariants } from "../../styles/framer-utils"
import { motion } from "framer-motion"

const TutorialLayout = ({ data }) => {
  const slug = data.mdx.slug
  console.log(data)
  return (
    <Container
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Seo title={data.mdx.frontmatter.title} />
      {data.mdx.frontmatter.title ? (
        <motion.h1 layoutId={`post-${slug}`}>
          {data.mdx.frontmatter.title}
        </motion.h1>
      ) : null}
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Container>
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
    allMdx(filter: { frontmatter: { tutorialId: { eq: $tutorialId } } }) {
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
