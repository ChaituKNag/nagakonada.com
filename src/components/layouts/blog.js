import React from "react"

const BlogLayout = ({ pageContext, children }) => {
  return (
    <div>
      <header>Title: {pageContext.frontmatter.title || ""}</header>
      {children}
      <footer>this is the blog layout</footer>
    </div>
  )
}

export default BlogLayout
