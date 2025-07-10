'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var popoverContext = require('./popover-context.cjs');
var factory = require('../system/factory.cjs');

const resolveVar = (scale, value) => value ? `${scale}.${value}, ${value}` : void 0;
function PopoverArrow(props) {
  const {
    bg,
    bgColor,
    backgroundColor,
    shadow,
    boxShadow,
    shadowColor,
    ...rest
  } = props;
  const { getArrowProps, getArrowInnerProps } = popoverContext.usePopoverContext();
  const styles = popoverContext.usePopoverStyles();
  const arrowBg = bg ?? bgColor ?? backgroundColor;
  const arrowShadow = shadow ?? boxShadow;
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ...getArrowProps(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ jsxRuntime.jsx(
        factory.chakra.div,
        {
          className: utils.cx("chakra-popover__arrow", props.className),
          ...getArrowInnerProps(rest),
          __css: {
            "--popper-arrow-shadow-color": resolveVar("colors", shadowColor),
            "--popper-arrow-bg": resolveVar("colors", arrowBg),
            "--popper-arrow-shadow": resolveVar("shadows", arrowShadow),
            ...styles.arrow
          }
        }
      )
    }
  );
}
PopoverArrow.displayName = "PopoverArrow";

exports.PopoverArrow = PopoverArrow;
