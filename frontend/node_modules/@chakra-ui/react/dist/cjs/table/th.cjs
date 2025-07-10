'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var table = require('./table.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Th = forwardRef.forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = table.useTableStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.th,
      {
        ...rest,
        ref,
        __css: styles.th,
        "data-is-numeric": isNumeric
      }
    );
  }
);

exports.Th = Th;
