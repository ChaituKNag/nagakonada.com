import React from "react"
import styled from "styled-components"
import Row from "../styled/Row"
import { fonts, colors, mediaQueries } from "../../styles/variables"
import Link from "./Link"
import goto from "../../utils/goto-page"
import { useLocation } from "@reach/router"
import { motion } from "framer-motion"


const Header = () => {
  const location = useLocation()
  const home = location.pathname === "/"
  return (
    <header>
      <div>
        <div className="title">
          {home ? (
            <h1
              tabIndex="0"
              onClick={goto("/")}
              onKeyPress={goto("/")}
            >
              Naga Konada
            </h1>
          ) : (
            <h1
              tabIndex="0"
              onClick={goto("/")}
              onKeyPress={goto("/")}
            >
              Naga Konada
            </h1>
          )}

          {!home ? <span>I make UI. I React! </span> : null}
        </div>
        <div className="nav-links">
          <nav>
            <div>
                <Link activeClassName="active" to="/all-articles">
                  Articles
                </Link>
                <Link activeClassName="active" to="/all-tutorials">
                  Tutorials
                </Link>
                <Link activeClassName="active" to="/all-blogs">
                  Blogs
                </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
