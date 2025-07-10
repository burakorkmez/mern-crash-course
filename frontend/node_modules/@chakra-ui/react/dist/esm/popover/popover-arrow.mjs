'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { usePopoverContext, usePopoverStyles } from './popover-context.mjs';
import { chakra } from '../system/factory.mjs';

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
  const { getArrowProps, getArrowInnerProps } = usePopoverContext();
  const styles = usePopoverStyles();
  const arrowBg = bg ?? bgColor ?? backgroundColor;
  const arrowShadow = shadow ?? boxShadow;
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ...getArrowProps(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ jsx(
        chakra.div,
        {
          className: cx("chakra-popover__arrow", props.className),
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

export { PopoverArrow };
