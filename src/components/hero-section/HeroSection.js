import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const HeroSection = () => {
  const { imageSharp: image } = useStaticQuery(graphql`
    {
      imageSharp(fluid: { originalName: { eq: "smiley-with-coat.jpeg" } }) {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  `)

  return (
    <div className="hero-section">
      <a
        href="https://thebestdeveloper.me"
        target="_blank"
        rel="noreferrer"
      >
        <Img fluid={image.fluid} alt="My profile pic" />
      </a>
      <h2 className="hero-section__caption">I make UI. I React!</h2>
      <div className="hero-section__content">
        <p>
          Check out all my{" "}
          <Link to="/all-articles">front-end technical articles</Link>. I make{" "}
          <Link to="/all-tutorials">very interesting tutorials</Link> series on
          various useful front-end topics. I also{" "}
          <Link to="/all-blogs">blog</Link> on my personal stuff as well.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
