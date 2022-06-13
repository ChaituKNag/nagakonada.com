import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import React from "react"


const Header = () => {
  const location = useLocation()
  const home = location.pathname === "/"
  return (
    <header>
      <div>
        <div className="title">
            <h1
            >
              <Link to="/">Naga Konada</Link>
            </h1>

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
