'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var table = require('./table.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Tbody = forwardRef.forwardRef((props, ref) => {
  const styles = table.useTableStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.tbody, { ...props, ref, __css: styles.tbody });
});

exports.Tbody = Tbody;
