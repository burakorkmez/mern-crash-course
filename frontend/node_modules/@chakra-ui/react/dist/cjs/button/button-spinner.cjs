'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var spinner = require('../spinner/spinner.cjs');
var factory = require('../system/factory.cjs');

function ButtonSpinner(props) {
  const {
    label,
    placement,
    spacing = "0.5rem",
    children = /* @__PURE__ */ jsxRuntime.jsx(spinner.Spinner, { color: "currentColor", width: "1em", height: "1em" }),
    className,
    __css,
    ...rest
  } = props;
  const _className = utils.cx("chakra-button__spinner", className);
  const marginProp = placement === "start" ? "marginEnd" : "marginStart";
  const spinnerStyles = React.useMemo(
    () => styledSystem.defineStyle({
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute",
      [marginProp]: label ? spacing : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...__css
    }),
    [__css, label, marginProp, spacing]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { className: _className, ...rest, __css: spinnerStyles, children });
}
ButtonSpinner.displayName = "ButtonSpinner";

exports.ButtonSpinner = ButtonSpinner;
