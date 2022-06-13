import { useLocation } from "@reach/router"
import React from "react"


const TableOfContents = ({ links }) => {
  const location = useLocation()
  console.log(location)
  return (
    <div className="toc-wrapper">
      <div className="toc-container">
        <h3 className="toc-title">Table of contents</h3>
        <ul className="toc-list">
          {links.map((link, i) => (
            <li className="toc-item"
              key={`${link.url}-${i}`}
            >
              <a className="toc-link" href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TableOfContents
