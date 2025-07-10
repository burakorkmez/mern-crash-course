'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var progress = require('./progress.cjs');
var factory = require('../system/factory.cjs');

const ProgressLabel = (props) => {
  const styles = progress.useProgressStyles();
  const labelStyles = styledSystem.defineStyle({
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    ...styles.label
  });
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { ...props, __css: labelStyles });
};
ProgressLabel.displayName = "ProgressLabel";

exports.ProgressLabel = ProgressLabel;
