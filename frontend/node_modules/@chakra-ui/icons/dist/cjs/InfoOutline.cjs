'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@chakra-ui/react');

const InfoOutlineIcon = react.createIcon({
  displayName: "InfoOutlineIcon",
  path: /* @__PURE__ */ jsxRuntime.jsxs(
    "g",
    {
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "square",
      strokeWidth: "2",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "12", fill: "none", r: "11", stroke: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("line", { fill: "none", x1: "11.959", x2: "11.959", y1: "11", y2: "17" }),
        /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "11.959", cy: "7", r: "1", stroke: "none" })
      ]
    }
  )
});

exports.InfoOutlineIcon = InfoOutlineIcon;
