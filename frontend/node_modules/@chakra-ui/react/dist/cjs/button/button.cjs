'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var hooks = require('@chakra-ui/hooks');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var buttonContext = require('./button-context.cjs');
var buttonIcon = require('./button-icon.cjs');
var buttonSpinner = require('./button-spinner.cjs');
var useButtonType = require('./use-button-type.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Button = forwardRef.forwardRef((props, ref) => {
  const group = buttonContext.useButtonGroup();
  const styles = useStyleConfig.useStyleConfig("Button", { ...group, ...props });
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
  } = styledSystem.omitThemingProps(props);
  const buttonStyles = React.useMemo(() => {
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
  const { ref: _ref, type: defaultType } = useButtonType.useButtonType(as);
  const contentProps = {
    rightIcon,
    leftIcon,
    iconSpacing,
    children,
    shouldWrapChildren
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    factory.chakra.button,
    {
      disabled: isDisabled || isLoading,
      ref: hooks.useMergeRefs(ref, _ref),
      as,
      type: type ?? defaultType,
      "data-active": utils.dataAttr(isActive),
      "data-loading": utils.dataAttr(isLoading),
      __css: buttonStyles,
      className: utils.cx("chakra-button", className),
      ...rest,
      children: [
        isLoading && spinnerPlacement === "start" && /* @__PURE__ */ jsxRuntime.jsx(
          buttonSpinner.ButtonSpinner,
          {
            className: "chakra-button__spinner--start",
            label: loadingText,
            placement: "start",
            spacing: iconSpacing,
            children: spinner
          }
        ),
        isLoading ? loadingText || /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.span, { opacity: 0, children: /* @__PURE__ */ jsxRuntime.jsx(ButtonContent, { ...contentProps }) }) : /* @__PURE__ */ jsxRuntime.jsx(ButtonContent, { ...contentProps }),
        isLoading && spinnerPlacement === "end" && /* @__PURE__ */ jsxRuntime.jsx(
          buttonSpinner.ButtonSpinner,
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
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      leftIcon && /* @__PURE__ */ jsxRuntime.jsx(buttonIcon.ButtonIcon, { marginEnd: iconSpacing, children: leftIcon }),
      children,
      rightIcon && /* @__PURE__ */ jsxRuntime.jsx(buttonIcon.ButtonIcon, { marginStart: iconSpacing, children: rightIcon })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("span", { style: { display: "contents" }, children: [
    leftIcon && /* @__PURE__ */ jsxRuntime.jsx(buttonIcon.ButtonIcon, { marginEnd: iconSpacing, children: leftIcon }),
    children,
    rightIcon && /* @__PURE__ */ jsxRuntime.jsx(buttonIcon.ButtonIcon, { marginStart: iconSpacing, children: rightIcon })
  ] });
}

exports.Button = Button;
