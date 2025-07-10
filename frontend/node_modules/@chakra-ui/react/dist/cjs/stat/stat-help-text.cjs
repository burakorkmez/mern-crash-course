'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var stat = require('./stat.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const StatHelpText = forwardRef.forwardRef(
  function StatHelpText2(props, ref) {
    const styles = stat.useStatStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.dd,
      {
        ref,
        ...props,
        className: utils.cx("chakra-stat__help-text", props.className),
        __css: styles.helpText
      }
    );
  }
);
StatHelpText.displayName = "StatHelpText";

exports.StatHelpText = StatHelpText;
