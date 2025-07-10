'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const TableContainer = forwardRef.forwardRef(
  (props, ref) => {
    const { overflow, overflowX, className, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        className: utils.cx("chakra-table__container", className),
        ...rest,
        __css: {
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: overflow ?? overflowX ?? "auto",
          overflowY: "hidden",
          maxWidth: "100%"
        }
      }
    );
  }
);

exports.TableContainer = TableContainer;
