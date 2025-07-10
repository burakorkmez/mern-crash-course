'use client';
'use strict';

var styledSystem = require('@chakra-ui/styled-system');

const allPropNames = /* @__PURE__ */ new Set([
  ...styledSystem.propNames,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]);
const validHTMLProps = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function shouldForwardProp(prop) {
  return (validHTMLProps.has(prop) || !allPropNames.has(prop)) && prop[0] !== "_";
}

exports.shouldForwardProp = shouldForwardProp;
