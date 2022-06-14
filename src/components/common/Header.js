import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import React from "react"


const Header = () => {
  const location = useLocation()
  const home = location.pathname === "/"
  return (
    <header className="flex flex-col items-center md:flex-row py-5 px-5 bg-gray-100 rounded-lg mt-2 mb-8 border-2 border-slate-500">
      <div className="title flex-1">
        <h1 className="text-sky-600 text-xl mb-3 md:mb-0">
          <Link to="/" >Naga Konada</Link>
        </h1>

        {!home ? <span>I make UI. I React! </span> : null}
      </div>
      <div className="nav-links">
        <nav>
          <div>
            <Link className="ml-3 font-bold text-blue-800 hover:text-blue-600" activeClassName="active" to="/all-articles">
              Articles
            </Link>
            <Link className="ml-3 font-bold text-blue-800 hover:text-blue-600" activeClassName="active" to="/all-tutorials">
              Tutorials
            </Link>
            <Link className="ml-3 font-bold text-blue-800 hover:text-blue-600" activeClassName="active" to="/all-blogs">
              Blogs
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
