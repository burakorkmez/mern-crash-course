'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var react = require('@emotion/react');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const spin = react.keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
const Spinner = forwardRef.forwardRef((props, ref) => {
  const styles = useStyleConfig.useStyleConfig("Spinner", props);
  const {
    label = "Loading...",
    thickness = "2px",
    speed = "0.45s",
    emptyColor = "transparent",
    className,
    ...rest
  } = styledSystem.omitThemingProps(props);
  const _className = utils.cx("chakra-spinner", className);
  const spinnerStyles = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: thickness,
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    animation: `${spin} ${speed} linear infinite`,
    ...styles
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ref,
      __css: spinnerStyles,
      className: _className,
      ...rest,
      children: label && /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.span, { srOnly: true, children: label })
    }
  );
});
Spinner.displayName = "Spinner";

exports.Spinner = Spinner;
