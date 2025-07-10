'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var stat = require('./stat.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const StatLabel = forwardRef.forwardRef(
  function StatLabel2(props, ref) {
    const styles = stat.useStatStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.dt,
      {
        ref,
        ...props,
        className: utils.cx("chakra-stat__label", props.className),
        __css: styles.label
      }
    );
  }
);
StatLabel.displayName = "StatLabel";

exports.StatLabel = StatLabel;
