'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var mark = require('./mark.cjs');
var useHighlight = require('./use-highlight.cjs');

function Highlight(props) {
  const { children, query, styles } = props;
  if (typeof children !== "string") {
    throw new Error("The children prop of Highlight must be a string");
  }
  const chunks = useHighlight.useHighlight({ query, text: children });
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: chunks.map((chunk, index) => {
    return chunk.match ? /* @__PURE__ */ jsxRuntime.jsx(mark.Mark, { sx: styles, children: chunk.text }, index) : /* @__PURE__ */ jsxRuntime.jsx(React.Fragment, { children: chunk.text }, index);
  }) });
}

exports.Highlight = Highlight;
