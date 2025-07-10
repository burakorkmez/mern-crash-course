'use client';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useMergeRefs } from '@chakra-ui/hooks';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { dataAttr, cx } from '@chakra-ui/utils';
import { useMemo } from 'react';
import { useButtonGroup } from './button-context.mjs';
import { ButtonIcon } from './button-icon.mjs';
import { ButtonSpinner } from './button-spinner.mjs';
import { useButtonType } from './use-button-type.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Button = forwardRef((props, ref) => {
  const group = useButtonGroup();
  const styles = useStyleConfig("Button", { ...group, ...props });
  const {
    isDisabled = group?.isDisabled,
    isLoading,
    isActive,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing = "0.5rem",
    type,
    spinner,
    spinnerPlacement = "start",
    className,
    as,
    shouldWrapChildren,
    ...rest
  } = omitThemingProps(props);
  const buttonStyles = useMemo(() => {
    const _focus = { ...styles?.["_focus"], zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...styles,
      ...!!group && { _focus }
    };
  }, [styles, group]);
  const { ref: _ref, type: defaultType } = useButtonType(as);
  const contentProps = {
    rightIcon,
    leftIcon,
    iconSpacing,
    children,
    shouldWrapChildren
  };
  return /* @__PURE__ */ jsxs(
    chakra.button,
    {
      disabled: isDisabled || isLoading,
      ref: useMergeRefs(ref, _ref),
      as,
      type: type ?? defaultType,
      "data-active": dataAttr(isActive),
      "data-loading": dataAttr(isLoading),
      __css: buttonStyles,
      className: cx("chakra-button", className),
      ...rest,
      children: [
        isLoading && spinnerPlacement === "start" && /* @__PURE__ */ jsx(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--start",
            label: loadingText,
            placement: "start",
            spacing: iconSpacing,
            children: spinner
          }
        ),
        isLoading ? loadingText || /* @__PURE__ */ jsx(chakra.span, { opacity: 0, children: /* @__PURE__ */ jsx(ButtonContent, { ...contentProps }) }) : /* @__PURE__ */ jsx(ButtonContent, { ...contentProps }),
        isLoading && spinnerPlacement === "end" && /* @__PURE__ */ jsx(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--end",
            label: loadingText,
            placement: "end",
            spacing: iconSpacing,
            children: spinner
          }
        )
      ]
    }
  );
});
Button.displayName = "Button";
function ButtonContent(props) {
  const { leftIcon, rightIcon, children, iconSpacing, shouldWrapChildren } = props;
  if (!shouldWrapChildren) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      leftIcon && /* @__PURE__ */ jsx(ButtonIcon, { marginEnd: iconSpacing, children: leftIcon }),
      children,
      rightIcon && /* @__PURE__ */ jsx(ButtonIcon, { marginStart: iconSpacing, children: rightIcon })
    ] });
  }
  return /* @__PURE__ */ jsxs("span", { style: { display: "contents" }, children: [
    leftIcon && /* @__PURE__ */ jsx(ButtonIcon, { marginEnd: iconSpacing, children: leftIcon }),
    children,
    rightIcon && /* @__PURE__ */ jsx(ButtonIcon, { marginStart: iconSpacing, children: rightIcon })
  ] });
}

export { Button };
