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
    font-weight: 300;
    font-size: 18px;
    line-height: 200%;
    color: ${colors.base}
}

h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.heading};
    font-style: oblique;
    font-weight: 800;
    margin: .25em 0 .5em;
    line-height: 100%;
    color: ${colors.primary}
}

h1 { font-size: 4rem;}
h2 { font-size: 2.5rem;}
h3 { font-size: 2rem;}
h4 { font-size: 1.75rem;}
h5 { font-size: 1.5rem;}
h6 { font-size: 1.4rem;}

@media ${mediaQueries.desktopUp} {
    html, body {
        font-size: 20px;
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
`

export default GlobalStyles
