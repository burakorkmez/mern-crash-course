'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var icons = require('./icons.cjs');
var useNumberInput = require('./use-number-input.cjs');
var useFormControl = require('../form-control/use-form-control.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');

const [NumberInputStylesProvider, useNumberInputStyles] = utils.createContext({
  name: `NumberInputStylesContext`,
  errorMessage: `useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `
});
const [NumberInputProvider, useNumberInputContext] = utils.createContext({
  name: "NumberInputContext",
  errorMessage: "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"
});
const NumberInput = forwardRef.forwardRef(
  function NumberInput2(props, ref) {
    const styles = useStyleConfig.useMultiStyleConfig("NumberInput", props);
    const ownProps = styledSystem.omitThemingProps(props);
    const controlProps = useFormControl.useFormControlProps(ownProps);
    const { htmlProps, ...context } = useNumberInput.useNumberInput(controlProps);
    const ctx = React.useMemo(() => context, [context]);
    return /* @__PURE__ */ jsxRuntime.jsx(NumberInputProvider, { value: ctx, children: /* @__PURE__ */ jsxRuntime.jsx(NumberInputStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...htmlProps,
        ref,
        className: utils.cx("chakra-numberinput", props.className),
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
const NumberInputStepper = forwardRef.forwardRef(
  function NumberInputStepper2(props, ref) {
    const styles = useNumberInputStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
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
const NumberInputField = forwardRef.forwardRef(
  function NumberInputField2(props, ref) {
    const { getInputProps } = useNumberInputContext();
    const input = getInputProps(props, ref);
    const styles = useNumberInputStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.input,
      {
        ...input,
        className: utils.cx("chakra-numberinput__field", props.className),
        __css: {
          width: "100%",
          ...styles.field
        }
      }
    );
  }
);
NumberInputField.displayName = "NumberInputField";
const StyledStepper = factory.chakra("div", {
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
const NumberDecrementStepper = forwardRef.forwardRef(function NumberDecrementStepper2(props, ref) {
  const styles = useNumberInputStyles();
  const { getDecrementButtonProps } = useNumberInputContext();
  const decrement = getDecrementButtonProps(props, ref);
  return /* @__PURE__ */ jsxRuntime.jsx(StyledStepper, { ...decrement, __css: styles.stepper, children: props.children ?? /* @__PURE__ */ jsxRuntime.jsx(icons.TriangleDownIcon, {}) });
});
NumberDecrementStepper.displayName = "NumberDecrementStepper";
const NumberIncrementStepper = forwardRef.forwardRef(function NumberIncrementStepper2(props, ref) {
  const { getIncrementButtonProps } = useNumberInputContext();
  const increment = getIncrementButtonProps(props, ref);
  const styles = useNumberInputStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(StyledStepper, { ...increment, __css: styles.stepper, children: props.children ?? /* @__PURE__ */ jsxRuntime.jsx(icons.TriangleUpIcon, {}) });
});
NumberIncrementStepper.displayName = "NumberIncrementStepper";

exports.NumberDecrementStepper = NumberDecrementStepper;
exports.NumberIncrementStepper = NumberIncrementStepper;
exports.NumberInput = NumberInput;
exports.NumberInputField = NumberInputField;
exports.NumberInputStepper = NumberInputStepper;
exports.StyledStepper = StyledStepper;
exports.useNumberInputStyles = useNumberInputStyles;
