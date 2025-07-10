'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var table = require('./table.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const TableCaption = forwardRef.forwardRef(
  (props, ref) => {
    const { placement = "bottom", ...rest } = props;
    const styles = table.useTableStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.caption,
      {
        ...rest,
        ref,
        __css: {
          ...styles.caption,
          captionSide: placement
        }
      }
    );
  }
);
TableCaption.displayName = "TableCaption";

exports.TableCaption = TableCaption;
