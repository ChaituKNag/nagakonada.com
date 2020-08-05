import React from "react"
import styled from "styled-components"
import WideColumnContainer from "../styled/WideColumnContainer"
import Row from "../styled/Row"
import { fonts, colors, mediaQueries } from "../../styles/variables"
import Link from "./Link"
import goto from "../../utils/goto-page"
import { useLocation } from "@reach/router"
import { motion } from "framer-motion"

const HeaderWrapper = styled.header`
  background-color: ${colors.light};
  padding: 0 0.5rem;
`

const HeaderRow = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-direction: column;
  @media ${mediaQueries.largeDesktopUp} {
    flex-direction: row;
  }
  min-height: 75px;
`

const TitleSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mediaQueries.largeDesktopUp} {
    align-items: flex-start;
  }
`

const HeaderTitle = styled.h4`
  margin: ${props => (props.home ? `0` : `0.25em 0 0`)};
  cursor: pointer;

  font-size: ${props => (props.home ? "1.8rem" : "1.5rem")};
  color: ${colors.secondary};

  @media ${mediaQueries.desktopUp} {
    font-size: ${props => (props.home ? "1.7rem" : "1.4rem")};
  }
`

const HeaderCaption = styled.span`
  font-family: ${fonts.special};
  @media ${mediaQueries.desktopUp} {
    font-size: 0.7em;
    line-height: 2.4;
  }
`

const LinksSection = styled.div`
  flex: 0;
  flex-basis: 0;

  @media ${mediaQueries.largeDesktopUp} {
    flex-basis: 200px;
  }
`

const HeaderLink = styled(motion.span)`
  margin: 0 0.5em;
`

const navVariants = {
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

const linkVariants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
  },
}

const linkTransition = {
  duration: 0.5,
  ease: "easeInOut",
}

const Header = () => {
  const location = useLocation()
  const home = location.pathname === "/"
  return (
    <HeaderWrapper>
      <WideColumnContainer>
        <HeaderRow>
          <TitleSection>
            <HeaderTitle
              tabIndex="0"
              home={home}
              onClick={goto("/")}
              onKeyPress={goto("/")}
            >
              Naga Konada
            </HeaderTitle>
            {!home ? <HeaderCaption>I make UI. I React! </HeaderCaption> : null}
          </TitleSection>
          <LinksSection>
            <motion.nav
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <Row justify="space-between">
                <HeaderLink variants={linkVariants} transition={linkTransition}>
                  <Link activeClassName="active" to="/all-articles">
                    Articles
                  </Link>
                </HeaderLink>
                <HeaderLink variants={linkVariants} transition={linkTransition}>
                  <Link activeClassName="active" to="/all-tutorials">
                    Tutorials
                  </Link>
                </HeaderLink>
                <HeaderLink variants={linkVariants} transition={linkTransition}>
                  <Link activeClassName="active" to="/all-blogs">
                    Blogs
                  </Link>
                </HeaderLink>
              </Row>
            </motion.nav>
          </LinksSection>
        </HeaderRow>
      </WideColumnContainer>
    </HeaderWrapper>
  )
}

export default Header
