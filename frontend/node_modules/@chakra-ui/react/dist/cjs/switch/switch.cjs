'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var useCheckbox = require('../checkbox/use-checkbox.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Switch = forwardRef.forwardRef(
  function Switch2(props, ref) {
    const styles = useStyleConfig.useMultiStyleConfig("Switch", props);
    const {
      spacing = "0.5rem",
      children,
      ...ownProps
    } = styledSystem.omitThemingProps(props);
    const {
      getIndicatorProps,
      getInputProps,
      getCheckboxProps,
      getRootProps,
      getLabelProps
    } = useCheckbox.useCheckbox(ownProps);
    const containerStyles = React.useMemo(
      () => ({
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle",
        lineHeight: 0,
        ...styles.container
      }),
      [styles.container]
    );
    const trackStyles = React.useMemo(
      () => ({
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "flex-start",
        boxSizing: "content-box",
        cursor: "pointer",
        ...styles.track
      }),
      [styles.track]
    );
    const labelStyles = React.useMemo(
      () => ({
        userSelect: "none",
        marginStart: spacing,
        ...styles.label
      }),
      [spacing, styles.label]
    );
    return /* @__PURE__ */ jsxRuntime.jsxs(
      factory.chakra.label,
      {
        ...getRootProps(),
        className: utils.cx("chakra-switch", props.className),
        __css: containerStyles,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("input", { className: "chakra-switch__input", ...getInputProps({}, ref) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            factory.chakra.span,
            {
              ...getCheckboxProps(),
              className: "chakra-switch__track",
              __css: trackStyles,
              children: /* @__PURE__ */ jsxRuntime.jsx(
                factory.chakra.span,
                {
                  __css: styles.thumb,
                  className: "chakra-switch__thumb",
                  ...getIndicatorProps()
                }
              )
            }
          ),
          children && /* @__PURE__ */ jsxRuntime.jsx(
            factory.chakra.span,
            {
              className: "chakra-switch__label",
              ...getLabelProps(),
              __css: labelStyles,
              children
            }
          )
        ]
      }
    );
  }
);
Switch.displayName = "Switch";

exports.Switch = Switch;
