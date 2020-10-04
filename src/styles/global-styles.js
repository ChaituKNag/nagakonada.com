import { createGlobalStyle } from "styled-components"
import { fonts, mediaQueries, colors } from "./variables"

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
    font-family: ${fonts.body};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: ${colors.base}
}

h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.heading};
    font-weight: 900;
    margin: 0;
    padding-top: .5em;
    line-height: 1.5;
    color: ${colors.primary}
}

h1 { font-size: 3.3rem;}
h2 { font-size: 2.5rem;}
h3 { font-size: 2rem;}
h4 { font-size: 1.75rem;}
h5 { font-size: 1.5rem;}
h6 { font-size: 1.4rem;}

@media ${mediaQueries.largeDesktopUp} {
    html, body {
        font-size: 18px;
    }
}

blockquote {
    font-size: 1.3rem;
    font-family: ${fonts.special};
    border-left: 5px solid ${colors.secondary};
    margin: 0;
    padding: .5em 1em;
}

blockquote p {
    margin: 0;
}

img {
  width: 100%;
}

.gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
    font-size: .85em;
  }

.gatsby-highlight-code-line {
    background-color: #133865;
    display: block;
    margin-right: -1em;
    margin-left: -1.4em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #7695bb;
  }
  
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }
  
  /**
   * If you only want to use line numbering
   */
  
  .gatsby-highlight {
    background-color: #0a2240;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 0.5em 1em;
    overflow: auto;
  }
  
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }

a {
  color: ${props => props.color || colors.secondary};
  font-family: ${fonts.body};
  font-weight: 800;
  text-decoration: none;
  position: relative;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    transform: scaleX(0);
    width: 100%;
    height: 3px;
    background-color: ${props => props.underlineColor || `currentColor`};
    transition: transform 200ms ease-in-out;
    transform-origin: right;
  }

  &:focus::after,
  &:active::after,
  &:hover::after,
  &.active::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}

`

export default GlobalStyles
