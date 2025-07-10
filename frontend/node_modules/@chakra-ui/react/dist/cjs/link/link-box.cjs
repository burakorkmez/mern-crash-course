'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const LinkOverlay = forwardRef.forwardRef(
  function LinkOverlay2(props, ref) {
    const { isExternal, target, rel, className, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.a,
      {
        ...rest,
        ref,
        className: utils.cx("chakra-linkbox__overlay", className),
        rel: isExternal ? "noopener noreferrer" : rel,
        target: isExternal ? "_blank" : target,
        __css: {
          position: "static",
          "&::before": {
            content: "''",
            cursor: "inherit",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%"
          }
        }
      }
    );
  }
);
const LinkBox = forwardRef.forwardRef(
  function LinkBox2(props, ref) {
    const { className, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        position: "relative",
        ...rest,
        className: utils.cx("chakra-linkbox", className),
        __css: {
          /* Elevate the links and abbreviations up */
          "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
            position: "relative",
            zIndex: 1
          }
        }
      }
    );
  }
);

exports.LinkBox = LinkBox;
exports.LinkOverlay = LinkOverlay;
