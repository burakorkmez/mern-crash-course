'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const fallbackId = "chakra-skip-nav";
function getStyles(styles) {
  return {
    userSelect: "none",
    border: "0",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    outline: "0",
    overflow: "hidden",
    position: "absolute",
    clip: "rect(0 0 0 0)",
    ...styles,
    _focus: {
      clip: "auto",
      width: "auto",
      height: "auto",
      ...styles["_focus"]
    }
  };
}
const SkipNavLink = forwardRef.forwardRef(
  function SkipNavLink2(props, ref) {
    const styles = useStyleConfig.useStyleConfig("SkipLink", props);
    const { id = fallbackId, ...rest } = styledSystem.omitThemingProps(props);
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.a, { ...rest, ref, href: `#${id}`, __css: getStyles(styles) });
  }
);
SkipNavLink.displayName = "SkipNavLink";
const SkipNavContent = forwardRef.forwardRef(
  function SkipNavContent2(props, ref) {
    const { id = fallbackId, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        id,
        tabIndex: -1,
        style: { outline: 0 },
        ...rest
      }
    );
  }
);
SkipNavContent.displayName = "SkipNavContent";

exports.SkipNavContent = SkipNavContent;
exports.SkipNavLink = SkipNavLink;
