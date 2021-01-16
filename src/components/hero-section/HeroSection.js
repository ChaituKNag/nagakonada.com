import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { fonts, colors, mediaQueries, widths } from "../../styles/variables"
import Link from "../common/Link"
import { motion } from "framer-motion"

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
  max-width: ${widths.desktop};
`
const ImageWrapper = styled(Img)`
  width: 200px;
  backface-visibility: visible;
  transform: perspective(200px) rotateY(5deg);
  margin: 0 2rem;
  border: 2px solid ${colors.primary};
  border-radius: 5px;
  box-shadow: -5px 0 10px ${colors.boxShadow};
  transition: transform 200ms ease-out;
  cursor: pointer;

  @media ${mediaQueries.desktopUp} {
    width: 300px;
    margin-left: 3rem;
  }

  &:hover {
    transform: perspective(200px) rotateY(-5deg);
    box-shadow: 5px 0 10px ${colors.boxShadow};
  }
`

const ImageLink = styled.a`
  text-decoration: none;
  &:focus::after,
  &:active::after,
  &:hover::after,
  &.active::after {
    transform: scaleX(0);
  }
`

const HeroCaption = styled(motion.span)`
  font-family: ${fonts.special};
  font-size: 3rem;
  line-height: 1.1;
  letter-spacing: -3px;
  text-align: center;
  margin: 0.5em 0 0;
  z-index: 1;

  @media ${mediaQueries.desktopUp} {
    font-size: 4.5rem;
  }
`

const HeroContent = styled.div`
  text-align: center;
`

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
    <HeroWrapper>
      <ImageLink
        href="https://thebestdeveloper.me"
        target="_blank"
        rel="noreferrer"
      >
        <ImageWrapper fluid={image.fluid} alt="My profile pic" />
      </ImageLink>
      <HeroCaption>I make UI. I React!</HeroCaption>
      <HeroContent>
        <p>
          Check out all my{" "}
          <Link to="/all-articles">front-end technical articles</Link>. I make{" "}
          <Link to="/all-tutorials">very interesting tutorials</Link> series on
          various useful front-end topics. I also{" "}
          <Link to="/all-blogs">blog</Link> on my personal stuff as well.
        </p>
      </HeroContent>
    </HeroWrapper>
  )
}

export default HeroSection
