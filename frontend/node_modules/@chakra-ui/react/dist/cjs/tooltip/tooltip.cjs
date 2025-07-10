'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils$1 = require('@chakra-ui/utils');
var framerMotion = require('framer-motion');
var React = require('react');
var elementRef = require('../element-ref.cjs');
var tooltip_transition = require('./tooltip.transition.cjs');
var useTooltip = require('./use-tooltip.cjs');
var useTheme = require('../system/use-theme.cjs');
var utils = require('../popper/utils.cjs');
var portal = require('../portal/portal.cjs');
var factory = require('../system/factory.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');

const MotionDiv = factory.chakra(framerMotion.motion.div);
const Tooltip = forwardRef.forwardRef((props, ref) => {
  const styles = useStyleConfig.useStyleConfig("Tooltip", props);
  const ownProps = styledSystem.omitThemingProps(props);
  const theme = useTheme.useTheme();
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
    const bgVar = styledSystem.getCSSVar(theme, "colors", userDefinedBg);
    styles[utils.cssVars.arrowBg.var] = bgVar;
  }
  const tooltip = useTooltip.useTooltip({ ...rest, direction: theme.direction });
  const shouldWrap = !React.isValidElement(children) || shouldWrapChildren;
  let trigger;
  if (shouldWrap) {
    trigger = /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...tooltip.getTriggerProps(),
        children
      }
    );
  } else {
    const child = React.Children.only(children);
    trigger = React.cloneElement(
      child,
      tooltip.getTriggerProps(child.props, elementRef.getElementRef(child))
    );
  }
  const hasAriaLabel = !!ariaLabel;
  const _tooltipProps = tooltip.getTooltipProps({}, ref);
  const tooltipProps = hasAriaLabel ? utils$1.omit(_tooltipProps, ["role", "id"]) : _tooltipProps;
  const srOnlyProps = utils$1.pick(_tooltipProps, ["role", "id"]);
  if (!label) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    trigger,
    /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { ...animatePresenceProps, children: tooltip.isOpen && /* @__PURE__ */ jsxRuntime.jsx(portal.Portal, { ...portalProps, children: /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...tooltip.getTooltipPositionerProps(),
        __css: {
          zIndex: styles.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          MotionDiv,
          {
            variants: tooltip_transition.scale,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...motionProps,
            ...tooltipProps,
            __css: styles,
            children: [
              label,
              hasAriaLabel && /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.span, { srOnly: true, ...srOnlyProps, children: ariaLabel }),
              hasArrow && /* @__PURE__ */ jsxRuntime.jsx(
                factory.chakra.div,
                {
                  "data-popper-arrow": true,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: /* @__PURE__ */ jsxRuntime.jsx(
                    factory.chakra.div,
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

exports.Tooltip = Tooltip;
