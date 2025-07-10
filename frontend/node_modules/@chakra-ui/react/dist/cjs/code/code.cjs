'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Code = forwardRef.forwardRef(function Code2(props, ref) {
  const styles = useStyleConfig.useStyleConfig("Code", props);
  const { className, ...rest } = styledSystem.omitThemingProps(props);
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.code,
    {
      ref,
      className: utils.cx("chakra-code", props.className),
      ...rest,
      __css: {
        display: "inline-block",
        ...styles
      }
    }
  );
});
Code.displayName = "Code";

exports.Code = Code;
