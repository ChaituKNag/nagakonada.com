export const fonts = {
  heading: `'Merriweather', cursive`,
  body: `"Ubuntu", sans-serif`,
  // special: `'Montserrat Alternates', sans-serif`,
  special: `'Merriweather', cursive`,
}

export const widths = {
  mobile: `500px`,
  desktop: `769px`,
  largeDesktop: `1050px`,
}

export const mediaQueries = {
  mobileUp: `only screen and (min-width: ${widths.mobile})`,
  desktopUp: `only screen and (min-width: ${widths.desktop})`,
  largeDesktopUp: `only screen and (min-width: ${widths.largeDesktop})`,
}

export const colors = {
  base: "#3d405b",
  primary: "#f94144",
  secondary: "#00296b",
  light: "#ffeedd",
  white: "white",
  boxShadow: `rgba(0, 0, 0, 0.4)`,
}
