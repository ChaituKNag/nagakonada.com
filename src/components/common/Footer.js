import React from "react"
import styled from "styled-components"
import WideColumnContainer from "../styled/WideColumnContainer"
import { fonts, colors, mediaQueries } from "../../styles/variables"
import Row from "../styled/Row"

const FooterWrapper = styled.footer`
  background-color: ${colors.light};
  padding: 1rem 0.5rem 2rem;
`
const FooterHeading = styled.h6`
  font-size: 0.9em;
  margin-top: 2rem;
`

const PortfolioLink = styled.a`
  font-family: ${fonts.body};
  font-weight: 800;
  color: ${colors.secondary};
  text-decoration: none;
  padding: 0.25em 0;

  &:hover,
  &:focus,
  &:active {
    border-bottom: 5px solid ${colors.primary};
  }
`

const SocialLink = styled.a`
  color: ${props => props.color || colors.secondary};
  font-family: ${fonts.body};
  font-weight: 800;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  &:hover,
  &:focus,
  &:active {
    border-bottom: 2px solid currentColor;
  }

  &:not(:last-child) {
    margin-right: 1em;
  }
`

const Disclaimer = styled.p`
  font-family: ${fonts.special};
  font-size: 0.7em;
  line-height: 1.4;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <WideColumnContainer>
        <FooterHeading>Checkout my portfolio site 💼</FooterHeading>
        <PortfolioLink href="https://thebestdeveloper.me" target="_blank">
          The Best Developer
        </PortfolioLink>
        <FooterHeading>My social media links ✍️</FooterHeading>
        <Row justify="flex-start" wrap="wrap">
          <SocialLink
            href="https://www.linkedin.com/in/nagachaitanyakonada/"
            color="#0077B5"
            target="_blank"
          >
            LinkedIn
          </SocialLink>
          <SocialLink
            href="https://github.com/ChaituKNag"
            color="#4078c0"
            target="_blank"
          >
            GitHub
          </SocialLink>
          <SocialLink
            href="https://www.youtube.com/channel/UCl5dc2m9rRGZsAu04ytfDjw/featured?view_as=subscriber"
            color="#ff0000"
            target="_blank"
          >
            YouTube
          </SocialLink>
          <SocialLink
            href="https://twitter.com/ItsKNC"
            color="#1da1f2"
            target="_blank"
          >
            Twitter
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/ChaituKNag"
            color="#3b5998"
            target="_blank"
          >
            Facebook
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/chaituknag/"
            color="#e1306c"
            target="_blank"
          >
            Instagram
          </SocialLink>
        </Row>
        <FooterHeading>Disclaimer</FooterHeading>
        <Disclaimer>
          All technical writings as accurate as humanly possible. All blog posts
          are my personal facts and opinions. All rights are reserved &copy;
          Naga Konada.
        </Disclaimer>
      </WideColumnContainer>
    </FooterWrapper>
  )
}

export default Footer
