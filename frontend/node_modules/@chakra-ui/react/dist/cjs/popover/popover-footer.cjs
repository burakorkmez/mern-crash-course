'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var popoverContext = require('./popover-context.cjs');
var factory = require('../system/factory.cjs');

function PopoverFooter(props) {
  const styles = popoverContext.usePopoverStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.footer,
    {
      ...props,
      className: utils.cx("chakra-popover__footer", props.className),
      __css: styles.footer
    }
  );
}
PopoverFooter.displayName = "PopoverFooter";

exports.PopoverFooter = PopoverFooter;
