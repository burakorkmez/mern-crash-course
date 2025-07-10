'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var popoverContext = require('./popover-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const PopoverHeader = forwardRef.forwardRef(
  function PopoverHeader2(props, ref) {
    const { getHeaderProps } = popoverContext.usePopoverContext();
    const styles = popoverContext.usePopoverStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.header,
      {
        ...getHeaderProps(props, ref),
        className: utils.cx("chakra-popover__header", props.className),
        __css: styles.header
      }
    );
  }
);
PopoverHeader.displayName = "PopoverHeader";

exports.PopoverHeader = PopoverHeader;
