'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Text = forwardRef.forwardRef(function Text2(props, ref) {
  const styles = useStyleConfig.useStyleConfig("Text", props);
  const { className, align, decoration, casing, ...rest } = styledSystem.omitThemingProps(props);
  const aliasedProps = utils.compact({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.p,
    {
      ref,
      className: utils.cx("chakra-text", props.className),
      ...aliasedProps,
      ...rest,
      __css: styles
    }
  );
});
Text.displayName = "Text";

exports.Text = Text;
