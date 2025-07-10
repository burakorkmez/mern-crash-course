'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var stat = require('./stat.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const StatNumber = forwardRef.forwardRef(
  function StatNumber2(props, ref) {
    const styles = stat.useStatStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.dd,
      {
        ref,
        ...props,
        className: utils.cx("chakra-stat__number", props.className),
        __css: {
          ...styles.number,
          fontFeatureSettings: "pnum",
          fontVariantNumeric: "proportional-nums"
        }
      }
    );
  }
);
StatNumber.displayName = "StatNumber";

exports.StatNumber = StatNumber;
