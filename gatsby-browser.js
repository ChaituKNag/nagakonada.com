require("prismjs/themes/prism-okaidia.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
const React = require("react")
const ThemeWrapper = require("./src/styles/theme").ThemeWrapper
const Header = require("./src/components/common/Header").default
const Footer = require("./src/components/common/Footer").default
const AnimateSharedLayout = require("framer-motion").AnimateSharedLayout

exports.wrapPageElement = ({ element }) => {
  return (
    <ThemeWrapper>
      <AnimateSharedLayout type="crossfade">
        <Header />
        {element}
        <Footer />
      </AnimateSharedLayout>
    </ThemeWrapper>
  )
}
