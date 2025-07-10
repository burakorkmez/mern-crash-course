'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Divider = forwardRef.forwardRef(
  function Divider2(props, ref) {
    const {
      borderLeftWidth,
      borderBottomWidth,
      borderTopWidth,
      borderRightWidth,
      borderWidth,
      borderStyle,
      borderColor,
      ...styles
    } = useStyleConfig.useStyleConfig("Divider", props);
    const {
      className,
      orientation = "horizontal",
      __css,
      ...rest
    } = styledSystem.omitThemingProps(props);
    const dividerStyles = {
      vertical: {
        borderLeftWidth: borderLeftWidth || borderRightWidth || borderWidth || "1px",
        height: "100%"
      },
      horizontal: {
        borderBottomWidth: borderBottomWidth || borderTopWidth || borderWidth || "1px",
        width: "100%"
      }
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.hr,
      {
        ref,
        "aria-orientation": orientation,
        ...rest,
        __css: {
          ...styles,
          border: "0",
          borderColor,
          borderStyle,
          ...dividerStyles[orientation],
          ...__css
        },
        className: utils.cx("chakra-divider", className)
      }
    );
  }
);
Divider.displayName = "Divider";

exports.Divider = Divider;
