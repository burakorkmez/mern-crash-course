'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var table = require('./table.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Td = forwardRef.forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = table.useTableStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.td,
      {
        ...rest,
        ref,
        __css: styles.td,
        "data-is-numeric": isNumeric
      }
    );
  }
);

exports.Td = Td;
