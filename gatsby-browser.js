require("prismjs/plugins/line-numbers/prism-line-numbers.css");
require("prismjs/themes/prism-okaidia.css");
const React = require('react');
const Footer = require('./src/components/common/Footer').default;
const Header = require('./src/components/common/Header').default;
require('./src/styles/global.css');

exports.wrapPageElement = ({ element }) => {
  return (
    <>
      <Header />
      {element}
      <Footer />
    </>
  )
}
