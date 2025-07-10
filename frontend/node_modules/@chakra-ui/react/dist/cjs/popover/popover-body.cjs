'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var popoverContext = require('./popover-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const PopoverBody = forwardRef.forwardRef(
  function PopoverBody2(props, ref) {
    const { getBodyProps } = popoverContext.usePopoverContext();
    const styles = popoverContext.usePopoverStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...getBodyProps(props, ref),
        className: utils.cx("chakra-popover__body", props.className),
        __css: styles.body
      }
    );
  }
);
PopoverBody.displayName = "PopoverBody";

exports.PopoverBody = PopoverBody;
