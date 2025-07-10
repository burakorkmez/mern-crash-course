'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useInputGroupStyles } from './input-group.mjs';
import { chakra } from '../system/factory.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const StyledInputElement = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2
  }
});
const InputElement = forwardRef(
  function InputElement2(props, ref) {
    const { placement = "left", ...rest } = props;
    const styles = useInputGroupStyles();
    const input = styles.field;
    const attr = placement === "left" ? "insetStart" : "insetEnd";
    const elementStyles = {
      [attr]: "0",
      width: input?.height ?? input?.h,
      height: input?.height ?? input?.h,
      fontSize: input?.fontSize,
      ...styles.element
    };
    return /* @__PURE__ */ jsx(StyledInputElement, { ref, __css: elementStyles, ...rest });
  }
);
InputElement.id = "InputElement";
InputElement.displayName = "InputElement";
const InputLeftElement = forwardRef(
  function InputLeftElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = cx("chakra-input__left-element", className);
    return /* @__PURE__ */ jsx(
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
const InputRightElement = forwardRef(
  function InputRightElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = cx("chakra-input__right-element", className);
    return /* @__PURE__ */ jsx(
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

export { InputLeftElement, InputRightElement };
