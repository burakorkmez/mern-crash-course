'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const fallbackIcon = {
  path: /* @__PURE__ */ jsxRuntime.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
};
const Icon = forwardRef.forwardRef((props, ref) => {
  const {
    as: element,
    viewBox,
    color = "currentColor",
    focusable = false,
    children,
    className,
    __css,
    ...rest
  } = props;
  const _className = utils.cx("chakra-icon", className);
  const customStyles = useStyleConfig.useStyleConfig("Icon", props);
  const styles = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color,
    ...__css,
    ...customStyles
  };
  const shared = {
    ref,
    focusable,
    className: _className,
    __css: styles
  };
  const _viewBox = viewBox ?? fallbackIcon.viewBox;
  if (element && typeof element !== "string") {
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.svg, { as: element, ...shared, ...rest });
  }
  const _path = children ?? fallbackIcon.path;
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.svg, { verticalAlign: "middle", viewBox: _viewBox, ...shared, ...rest, children: _path });
});
Icon.displayName = "Icon";

exports.Icon = Icon;
