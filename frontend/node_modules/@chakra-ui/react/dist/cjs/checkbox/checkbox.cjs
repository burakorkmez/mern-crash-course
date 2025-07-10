'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var react = require('@emotion/react');
var React = require('react');
var checkboxContext = require('./checkbox-context.cjs');
var checkboxIcon = require('./checkbox-icon.cjs');
var useCheckbox = require('./use-checkbox.cjs');
var useInitialAnimationState = require('./use-initial-animation-state.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const controlStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
};
const rootStyles = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
};
const checkAnim = react.keyframes({
  from: {
    opacity: 0,
    strokeDashoffset: 16,
    transform: "scale(0.95)"
  },
  to: {
    opacity: 1,
    strokeDashoffset: 0,
    transform: "scale(1)"
  }
});
const indeterminateOpacityAnim = react.keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
const indeterminateScaleAnim = react.keyframes({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
});
const Checkbox = forwardRef.forwardRef(
  function Checkbox2(props, ref) {
    const group = checkboxContext.useCheckboxGroupContext();
    const mergedProps = { ...group, ...props };
    const styles = useStyleConfig.useMultiStyleConfig("Checkbox", mergedProps);
    const ownProps = styledSystem.omitThemingProps(props);
    const {
      spacing = "0.5rem",
      className,
      children,
      iconColor,
      iconSize,
      icon = /* @__PURE__ */ jsxRuntime.jsx(checkboxIcon.CheckboxIcon, {}),
      isChecked: isCheckedProp,
      isDisabled = group?.isDisabled,
      onChange: onChangeProp,
      inputProps,
      ...rest
    } = ownProps;
    let isChecked = isCheckedProp;
    if (group?.value && ownProps.value) {
      isChecked = group.value.includes(ownProps.value);
    }
    let onChange = onChangeProp;
    if (group?.onChange && ownProps.value) {
      onChange = utils.callAll(group.onChange, onChangeProp);
    }
    const {
      state,
      getInputProps,
      getCheckboxProps,
      getLabelProps,
      getRootProps
    } = useCheckbox.useCheckbox({
      ...rest,
      isDisabled,
      isChecked,
      onChange
    });
    const shouldAnimate = useInitialAnimationState.useInitialAnimationState(state.isChecked);
    const iconStyles = React.useMemo(
      () => ({
        animation: !shouldAnimate ? void 0 : state.isIndeterminate ? `${indeterminateOpacityAnim} 20ms linear, ${indeterminateScaleAnim} 200ms linear` : `${checkAnim} 200ms linear`,
        ...styles.icon,
        ...utils.compact({
          fontSize: iconSize,
          color: iconColor
        })
      }),
      [iconColor, iconSize, shouldAnimate, state.isIndeterminate, styles.icon]
    );
    const clonedIcon = React.cloneElement(icon, {
      __css: iconStyles,
      isIndeterminate: state.isIndeterminate,
      isChecked: state.isChecked
    });
    return /* @__PURE__ */ jsxRuntime.jsxs(
      factory.chakra.label,
      {
        __css: { ...rootStyles, ...styles.container },
        className: utils.cx("chakra-checkbox", className),
        ...getRootProps(),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              className: "chakra-checkbox__input",
              ...getInputProps(inputProps, ref)
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            factory.chakra.span,
            {
              __css: { ...controlStyles, ...styles.control },
              className: "chakra-checkbox__control",
              ...getCheckboxProps(),
              children: clonedIcon
            }
          ),
          children && /* @__PURE__ */ jsxRuntime.jsx(
            factory.chakra.span,
            {
              className: "chakra-checkbox__label",
              ...getLabelProps(),
              __css: {
                marginStart: spacing,
                ...styles.label
              },
              children
            }
          )
        ]
      }
    );
  }
);
Checkbox.displayName = "Checkbox";

exports.Checkbox = Checkbox;
