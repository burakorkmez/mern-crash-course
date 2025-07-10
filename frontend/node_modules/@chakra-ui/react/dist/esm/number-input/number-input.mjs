'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { createContext, cx } from '@chakra-ui/utils';
import { useMemo } from 'react';
import { TriangleDownIcon, TriangleUpIcon } from './icons.mjs';
import { useNumberInput } from './use-number-input.mjs';
import { useFormControlProps } from '../form-control/use-form-control.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';

const [NumberInputStylesProvider, useNumberInputStyles] = createContext({
  name: `NumberInputStylesContext`,
  errorMessage: `useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `
});
const [NumberInputProvider, useNumberInputContext] = createContext({
  name: "NumberInputContext",
  errorMessage: "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"
});
const NumberInput = forwardRef(
  function NumberInput2(props, ref) {
    const styles = useMultiStyleConfig("NumberInput", props);
    const ownProps = omitThemingProps(props);
    const controlProps = useFormControlProps(ownProps);
    const { htmlProps, ...context } = useNumberInput(controlProps);
    const ctx = useMemo(() => context, [context]);
    return /* @__PURE__ */ jsx(NumberInputProvider, { value: ctx, children: /* @__PURE__ */ jsx(NumberInputStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...htmlProps,
        ref,
        className: cx("chakra-numberinput", props.className),
        __css: {
          position: "relative",
          zIndex: 0,
          ...styles.root
        }
      }
    ) }) });
  }
);
NumberInput.displayName = "NumberInput";
const NumberInputStepper = forwardRef(
  function NumberInputStepper2(props, ref) {
    const styles = useNumberInputStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        "aria-hidden": true,
        ref,
        ...props,
        __css: {
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "0",
          insetEnd: "0px",
          margin: "1px",
          height: "calc(100% - 2px)",
          zIndex: 1,
          ...styles.stepperGroup
        }
      }
    );
  }
);
NumberInputStepper.displayName = "NumberInputStepper";
const NumberInputField = forwardRef(
  function NumberInputField2(props, ref) {
    const { getInputProps } = useNumberInputContext();
    const input = getInputProps(props, ref);
    const styles = useNumberInputStyles();
    return /* @__PURE__ */ jsx(
      chakra.input,
      {
        ...input,
        className: cx("chakra-numberinput__field", props.className),
        __css: {
          width: "100%",
          ...styles.field
        }
      }
    );
  }
);
NumberInputField.displayName = "NumberInputField";
const StyledStepper = chakra("div", {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    transitionProperty: "common",
    transitionDuration: "normal",
    userSelect: "none",
    cursor: "pointer",
    lineHeight: "normal"
  }
});
const NumberDecrementStepper = forwardRef(function NumberDecrementStepper2(props, ref) {
  const styles = useNumberInputStyles();
  const { getDecrementButtonProps } = useNumberInputContext();
  const decrement = getDecrementButtonProps(props, ref);
  return /* @__PURE__ */ jsx(StyledStepper, { ...decrement, __css: styles.stepper, children: props.children ?? /* @__PURE__ */ jsx(TriangleDownIcon, {}) });
});
NumberDecrementStepper.displayName = "NumberDecrementStepper";
const NumberIncrementStepper = forwardRef(function NumberIncrementStepper2(props, ref) {
  const { getIncrementButtonProps } = useNumberInputContext();
  const increment = getIncrementButtonProps(props, ref);
  const styles = useNumberInputStyles();
  return /* @__PURE__ */ jsx(StyledStepper, { ...increment, __css: styles.stepper, children: props.children ?? /* @__PURE__ */ jsx(TriangleUpIcon, {}) });
});
NumberIncrementStepper.displayName = "NumberIncrementStepper";

export { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, StyledStepper, useNumberInputStyles };
