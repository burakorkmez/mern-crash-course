'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Kbd = forwardRef.forwardRef(function Kbd2(props, ref) {
  const styles = useStyleConfig.useStyleConfig("Kbd", props);
  const { className, ...rest } = styledSystem.omitThemingProps(props);
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.kbd,
    {
      ref,
      className: utils.cx("chakra-kbd", className),
      ...rest,
      __css: {
        fontFamily: "mono",
        ...styles
      }
    }
  );
});
Kbd.displayName = "Kbd";

exports.Kbd = Kbd;
