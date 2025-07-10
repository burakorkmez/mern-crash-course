'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Badge = forwardRef.forwardRef(function Badge2(props, ref) {
  const styles = useStyleConfig.useStyleConfig("Badge", props);
  const { className, ...rest } = styledSystem.omitThemingProps(props);
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.span,
    {
      ref,
      className: utils.cx("chakra-badge", props.className),
      ...rest,
      __css: {
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        ...styles
      }
    }
  );
});
Badge.displayName = "Badge";

exports.Badge = Badge;
