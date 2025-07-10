'use client';
import { jsx, jsxs } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { callAll, compact, cx } from '@chakra-ui/utils';
import { keyframes } from '@emotion/react';
import { useMemo, cloneElement } from 'react';
import { useCheckboxGroupContext } from './checkbox-context.mjs';
import { CheckboxIcon } from './checkbox-icon.mjs';
import { useCheckbox } from './use-checkbox.mjs';
import { useInitialAnimationState } from './use-initial-animation-state.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

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
const checkAnim = keyframes({
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
const indeterminateOpacityAnim = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
const indeterminateScaleAnim = keyframes({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
});
const Checkbox = forwardRef(
  function Checkbox2(props, ref) {
    const group = useCheckboxGroupContext();
    const mergedProps = { ...group, ...props };
    const styles = useMultiStyleConfig("Checkbox", mergedProps);
    const ownProps = omitThemingProps(props);
    const {
      spacing = "0.5rem",
      className,
      children,
      iconColor,
      iconSize,
      icon = /* @__PURE__ */ jsx(CheckboxIcon, {}),
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
      onChange = callAll(group.onChange, onChangeProp);
    }
    const {
      state,
      getInputProps,
      getCheckboxProps,
      getLabelProps,
      getRootProps
    } = useCheckbox({
      ...rest,
      isDisabled,
      isChecked,
      onChange
    });
    const shouldAnimate = useInitialAnimationState(state.isChecked);
    const iconStyles = useMemo(
      () => ({
        animation: !shouldAnimate ? void 0 : state.isIndeterminate ? `${indeterminateOpacityAnim} 20ms linear, ${indeterminateScaleAnim} 200ms linear` : `${checkAnim} 200ms linear`,
        ...styles.icon,
        ...compact({
          fontSize: iconSize,
          color: iconColor
        })
      }),
      [iconColor, iconSize, shouldAnimate, state.isIndeterminate, styles.icon]
    );
    const clonedIcon = cloneElement(icon, {
      __css: iconStyles,
      isIndeterminate: state.isIndeterminate,
      isChecked: state.isChecked
    });
    return /* @__PURE__ */ jsxs(
      chakra.label,
      {
        __css: { ...rootStyles, ...styles.container },
        className: cx("chakra-checkbox", className),
        ...getRootProps(),
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "chakra-checkbox__input",
              ...getInputProps(inputProps, ref)
            }
          ),
          /* @__PURE__ */ jsx(
            chakra.span,
            {
              __css: { ...controlStyles, ...styles.control },
              className: "chakra-checkbox__control",
              ...getCheckboxProps(),
              children: clonedIcon
            }
          ),
          children && /* @__PURE__ */ jsx(
            chakra.span,
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

export { Checkbox };
