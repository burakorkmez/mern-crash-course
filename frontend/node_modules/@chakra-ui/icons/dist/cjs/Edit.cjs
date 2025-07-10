'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@chakra-ui/react');

const EditIcon = react.createIcon({
  displayName: "EditIcon",
  path: /* @__PURE__ */ jsxRuntime.jsxs("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2", children: [
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] })
});

exports.EditIcon = EditIcon;
