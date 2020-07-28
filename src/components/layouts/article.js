import React from "react"

const ArticleLayout = ({ children }) => {
  return (
    <div>
      {children}
      <footer>this is the article layout</footer>
    </div>
  )
}

export default ArticleLayout
