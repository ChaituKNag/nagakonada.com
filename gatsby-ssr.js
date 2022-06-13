require("prismjs/themes/prism-okaidia.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
const React = require("react")
const Header = require("./src/components/common/Header").default
const Footer = require("./src/components/common/Footer").default

exports.wrapPageElement = ({ element }) => {
  return (
    <>
      <Header />
      {element}
      <Footer />
    </>
  )
}
