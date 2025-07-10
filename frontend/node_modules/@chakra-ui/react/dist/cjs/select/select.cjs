'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var selectField = require('./select-field.cjs');
var useFormControl = require('../form-control/use-form-control.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');

const Select = forwardRef.forwardRef((props, ref) => {
  const styles = useStyleConfig.useMultiStyleConfig("Select", props);
  const {
    rootProps,
    placeholder,
    icon,
    color,
    height,
    h,
    minH,
    minHeight,
    iconColor,
    iconSize,
    ...rest
  } = styledSystem.omitThemingProps(props);
  const [layoutProps, otherProps] = utils.split(rest, styledSystem.layoutPropNames);
  const ownProps = useFormControl.useFormControl(otherProps);
  const rootStyles = {
    width: "100%",
    height: "fit-content",
    position: "relative",
    color
  };
  const fieldStyles = {
    paddingEnd: "2rem",
    ...styles.field,
    _focus: {
      zIndex: "unset",
      ...styles.field?.["_focus"]
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    factory.chakra.div,
    {
      className: "chakra-select__wrapper",
      __css: rootStyles,
      ...layoutProps,
      ...rootProps,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          selectField.SelectField,
          {
            ref,
            height: h ?? height,
            minH: minH ?? minHeight,
            placeholder,
            ...ownProps,
            __css: fieldStyles,
            children: props.children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          SelectIcon,
          {
            "data-disabled": utils.dataAttr(ownProps.disabled),
            ...(iconColor || color) && { color: iconColor || color },
            __css: styles.icon,
            ...iconSize && { fontSize: iconSize },
            children: icon
          }
        )
      ]
    }
  );
});
Select.displayName = "Select";
const DefaultIcon = (props) => /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsxRuntime.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }
) });
const IconWrapper = factory.chakra("div", {
  baseStyle: {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)"
  }
});
const SelectIcon = (props) => {
  const { children = /* @__PURE__ */ jsxRuntime.jsx(DefaultIcon, {}), ...rest } = props;
  const clone = React.cloneElement(children, {
    role: "presentation",
    className: "chakra-select__icon",
    focusable: false,
    "aria-hidden": true,
    // force icon to adhere to `IconWrapper` styles
    style: {
      width: "1em",
      height: "1em",
      color: "currentColor"
    }
  });
  return /* @__PURE__ */ jsxRuntime.jsx(IconWrapper, { ...rest, className: "chakra-select__icon-wrapper", children: React.isValidElement(children) ? clone : null });
};
SelectIcon.displayName = "SelectIcon";

exports.DefaultIcon = DefaultIcon;
exports.Select = Select;
