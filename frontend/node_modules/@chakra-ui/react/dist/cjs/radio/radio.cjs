'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var radioGroup = require('./radio-group.cjs');
var useRadio = require('./use-radio.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Radio = forwardRef.forwardRef((props, ref) => {
  const group = radioGroup.useRadioGroupContext();
  const { onChange: onChangeProp, value: valueProp } = props;
  const styles = useStyleConfig.useMultiStyleConfig("Radio", { ...group, ...props });
  const ownProps = styledSystem.omitThemingProps(props);
  const {
    spacing = "0.5rem",
    children,
    isDisabled = group?.isDisabled,
    isFocusable = group?.isFocusable,
    inputProps: htmlInputProps,
    ...rest
  } = ownProps;
  let isChecked = props.isChecked;
  if (group?.value != null && valueProp != null) {
    isChecked = group.value === valueProp;
  }
  let onChange = onChangeProp;
  if (group?.onChange && valueProp != null) {
    onChange = utils.callAll(group.onChange, onChangeProp);
  }
  const name = props?.name ?? group?.name;
  const {
    getInputProps,
    getRadioProps,
    getLabelProps,
    getRootProps,
    htmlProps
  } = useRadio.useRadio({
    ...rest,
    isChecked,
    isFocusable,
    isDisabled,
    onChange,
    name
  });
  const [layoutProps, otherProps] = utils.split(htmlProps, styledSystem.layoutPropNames);
  const checkboxProps = getRadioProps(otherProps);
  const inputProps = getInputProps(htmlInputProps, ref);
  const labelProps = getLabelProps();
  const rootProps = Object.assign({}, layoutProps, getRootProps());
  const rootStyles = {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    cursor: "pointer",
    position: "relative",
    ...styles.container
  };
  const checkboxStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    ...styles.control
  };
  const labelStyles = {
    userSelect: "none",
    marginStart: spacing,
    ...styles.label
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(factory.chakra.label, { className: "chakra-radio", ...rootProps, __css: rootStyles, children: [
    /* @__PURE__ */ jsxRuntime.jsx("input", { className: "chakra-radio__input", ...inputProps }),
    /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.span,
      {
        className: "chakra-radio__control",
        ...checkboxProps,
        __css: checkboxStyles
      }
    ),
    children && /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.span,
      {
        className: "chakra-radio__label",
        ...labelProps,
        __css: labelStyles,
        children
      }
    )
  ] });
});
Radio.displayName = "Radio";

exports.Radio = Radio;
