'use client';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { omitThemingProps, getCSSVar } from '@chakra-ui/styled-system';
import { omit, pick } from '@chakra-ui/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { isValidElement, Children, cloneElement } from 'react';
import { getElementRef } from '../element-ref.mjs';
import { scale } from './tooltip.transition.mjs';
import { useTooltip } from './use-tooltip.mjs';
import { useTheme } from '../system/use-theme.mjs';
import { cssVars } from '../popper/utils.mjs';
import { Portal } from '../portal/portal.mjs';
import { chakra } from '../system/factory.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';

const MotionDiv = chakra(motion.div);
const Tooltip = forwardRef((props, ref) => {
  const styles = useStyleConfig("Tooltip", props);
  const ownProps = omitThemingProps(props);
  const theme = useTheme();
  const {
    children,
    label,
    shouldWrapChildren,
    "aria-label": ariaLabel,
    hasArrow,
    bg,
    portalProps,
    background,
    backgroundColor,
    bgColor,
    motionProps,
    animatePresenceProps,
    ...rest
  } = ownProps;
  const userDefinedBg = background ?? backgroundColor ?? bg ?? bgColor;
  if (userDefinedBg) {
    styles.bg = userDefinedBg;
    const bgVar = getCSSVar(theme, "colors", userDefinedBg);
    styles[cssVars.arrowBg.var] = bgVar;
  }
  const tooltip = useTooltip({ ...rest, direction: theme.direction });
  const shouldWrap = !isValidElement(children) || shouldWrapChildren;
  let trigger;
  if (shouldWrap) {
    trigger = /* @__PURE__ */ jsx(
      chakra.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...tooltip.getTriggerProps(),
        children
      }
    );
  } else {
    const child = Children.only(children);
    trigger = cloneElement(
      child,
      tooltip.getTriggerProps(child.props, getElementRef(child))
    );
  }
  const hasAriaLabel = !!ariaLabel;
  const _tooltipProps = tooltip.getTooltipProps({}, ref);
  const tooltipProps = hasAriaLabel ? omit(_tooltipProps, ["role", "id"]) : _tooltipProps;
  const srOnlyProps = pick(_tooltipProps, ["role", "id"]);
  if (!label) {
    return /* @__PURE__ */ jsx(Fragment, { children });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    trigger,
    /* @__PURE__ */ jsx(AnimatePresence, { ...animatePresenceProps, children: tooltip.isOpen && /* @__PURE__ */ jsx(Portal, { ...portalProps, children: /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...tooltip.getTooltipPositionerProps(),
        __css: {
          zIndex: styles.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ jsxs(
          MotionDiv,
          {
            variants: scale,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...motionProps,
            ...tooltipProps,
            __css: styles,
            children: [
              label,
              hasAriaLabel && /* @__PURE__ */ jsx(chakra.span, { srOnly: true, ...srOnlyProps, children: ariaLabel }),
              hasArrow && /* @__PURE__ */ jsx(
                chakra.div,
                {
                  "data-popper-arrow": true,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: /* @__PURE__ */ jsx(
                    chakra.div,
                    {
                      "data-popper-arrow-inner": true,
                      className: "chakra-tooltip__arrow",
                      __css: { bg: styles.bg }
                    }
                  )
                }
              )
            ]
          }
        )
      }
    ) }) })
  ] });
});
Tooltip.displayName = "Tooltip";

export { Tooltip };
