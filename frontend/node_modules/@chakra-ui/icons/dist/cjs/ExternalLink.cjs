'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@chakra-ui/react');

const ExternalLinkIcon = react.createIcon({
  displayName: "ExternalLinkIcon",
  path: /* @__PURE__ */ jsxRuntime.jsxs("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2", children: [
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 14L21 3" })
  ] })
});

exports.ExternalLinkIcon = ExternalLinkIcon;
