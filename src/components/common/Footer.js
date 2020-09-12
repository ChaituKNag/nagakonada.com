import React from "react"
import styled from "styled-components"
import Container from "../styled/Container"
import { fonts, colors } from "../../styles/variables"
import Anchor from "./Anchor"
import { motion } from "framer-motion"

const socialParentVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fromLeftVariants = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

const FooterWrapper = styled.footer`
  background-image: linear-gradient(
    135deg,
    ${colors.light} 0%,
    ${colors.white} 100%
  );
  padding: 1rem;
`
const FooterHeading = styled.h6`
  font-size: 1.1em;
  margin-top: 2rem;
`

const PortfolioLink = styled(Anchor)`
  padding: 0.25em 0;
`

const SocialLinksRow = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const SocialLink = styled(Anchor)`
  &::after {
    height: 2px;
  }
  &:not(:last-child) {
    margin-right: 1em;
  }
`

const Disclaimer = styled.p`
  font-family: ${fonts.special};
  font-size: 0.8em;
  line-height: 1.4;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterHeading>
        Checkout my portfolio site{" "}
        <span role="img" aria-label="portfolio suitcase icon">
          💼
        </span>
      </FooterHeading>
      <PortfolioLink
        underlineColor={colors.primary}
        href="https://thebestdeveloper.me"
        target="_blank"
        rel="noreferrer"
      >
        The Best Developer
      </PortfolioLink>
      <FooterHeading>
        My social media links{" "}
        <span role="img" aria-label="social post icon">
          ✍️
        </span>
      </FooterHeading>
      <SocialLinksRow
        variants={socialParentVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <SocialLink
          href="https://www.linkedin.com/in/nagachaitanyakonada/"
          color="#0077B5"
          target="_blank"
          rel="noreferrer"
          variants={fromLeftVariants}
        >
          LinkedIn
        </SocialLink>
        <SocialLink
          href="https://github.com/ChaituKNag"
          color="#4078c0"
          target="_blank"
          rel="noreferrer"
          variants={fromLeftVariants}
        >
          GitHub
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/channel/UCl5dc2m9rRGZsAu04ytfDjw/featured?view_as=subscriber"
          color="#ff0000"
          target="_blank"
          rel="noreferrer"
          variants={fromLeftVariants}
        >
          YouTube
        </SocialLink>
        <SocialLink
          href="https://twitter.com/ItsKNC"
          color="#1da1f2"
          target="_blank"
          rel="noreferrer"
          variants={fromLeftVariants}
        >
          Twitter
        </SocialLink>
        <SocialLink
          href="https://www.facebook.com/ChaituKNag"
          color="#3b5998"
          target="_blank"
          rel="noreferrer"
          variants={fromLeftVariants}
        >
          Facebook
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/chaituknag/"
          color="#e1306c"
          target="_blank"
          rel="noreferrer"
          variants={fromLeftVariants}
        >
          Instagram
        </SocialLink>
      </SocialLinksRow>
      <FooterHeading>Disclaimer</FooterHeading>
      <Disclaimer>
        All technical writings as accurate as humanly possible. All blog posts
        are my personal facts and opinions. All rights are reserved &copy; Naga
        Konada.
      </Disclaimer>
    </FooterWrapper>
  )
}

export default Footer
