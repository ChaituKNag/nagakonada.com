require("prismjs/plugins/line-numbers/prism-line-numbers.css");
require("prismjs/themes/prism-okaidia.css");
const React = require('react');
require('./src/styles/global.css');

exports.wrapPageElement = ({ element }) => {
  return (
    <>{element}</>
  )
}
