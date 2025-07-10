'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var inputGroup = require('./input-group.cjs');
var factory = require('../system/factory.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const StyledInputElement = factory.chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2
  }
});
const InputElement = forwardRef.forwardRef(
  function InputElement2(props, ref) {
    const { placement = "left", ...rest } = props;
    const styles = inputGroup.useInputGroupStyles();
    const input = styles.field;
    const attr = placement === "left" ? "insetStart" : "insetEnd";
    const elementStyles = {
      [attr]: "0",
      width: input?.height ?? input?.h,
      height: input?.height ?? input?.h,
      fontSize: input?.fontSize,
      ...styles.element
    };
    return /* @__PURE__ */ jsxRuntime.jsx(StyledInputElement, { ref, __css: elementStyles, ...rest });
  }
);
InputElement.id = "InputElement";
InputElement.displayName = "InputElement";
const InputLeftElement = forwardRef.forwardRef(
  function InputLeftElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = utils.cx("chakra-input__left-element", className);
    return /* @__PURE__ */ jsxRuntime.jsx(
      InputElement,
      {
        ref,
        placement: "left",
        className: _className,
        ...rest
      }
    );
  }
);
InputLeftElement.id = "InputLeftElement";
InputLeftElement.displayName = "InputLeftElement";
const InputRightElement = forwardRef.forwardRef(
  function InputRightElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = utils.cx("chakra-input__right-element", className);
    return /* @__PURE__ */ jsxRuntime.jsx(
      InputElement,
      {
        ref,
        placement: "right",
        className: _className,
        ...rest
      }
    );
  }
);
InputRightElement.id = "InputRightElement";
InputRightElement.displayName = "InputRightElement";

exports.InputLeftElement = InputLeftElement;
exports.InputRightElement = InputRightElement;
