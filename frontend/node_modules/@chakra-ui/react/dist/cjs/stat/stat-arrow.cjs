'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var stat = require('./stat.cjs');
var icon = require('../icon/icon.cjs');
var factory = require('../system/factory.cjs');

const StatDownArrow = (props) => /* @__PURE__ */ jsxRuntime.jsx(icon.Icon, { color: "red.400", ...props, children: /* @__PURE__ */ jsxRuntime.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) });
StatDownArrow.displayName = "StatDownArrow";
function StatUpArrow(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(icon.Icon, { color: "green.400", ...props, children: /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
    }
  ) });
}
StatUpArrow.displayName = "StatUpArrow";
function StatArrow(props) {
  const { type, "aria-label": ariaLabel, ...rest } = props;
  const styles = stat.useStatStyles();
  const BaseIcon = type === "increase" ? StatUpArrow : StatDownArrow;
  const defaultAriaLabel = type === "increase" ? "increased by" : "decreased by";
  const label = ariaLabel || defaultAriaLabel;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.span, { srOnly: true, children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(BaseIcon, { "aria-hidden": true, ...rest, __css: styles.icon })
  ] });
}
StatArrow.displayName = "StatArrow";

exports.StatArrow = StatArrow;
exports.StatDownArrow = StatDownArrow;
exports.StatUpArrow = StatUpArrow;
