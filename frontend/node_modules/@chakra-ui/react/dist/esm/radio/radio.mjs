'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { omitThemingProps, layoutPropNames } from '@chakra-ui/styled-system';
import { callAll, split } from '@chakra-ui/utils';
import { useRadioGroupContext } from './radio-group.mjs';
import { useRadio } from './use-radio.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Radio = forwardRef((props, ref) => {
  const group = useRadioGroupContext();
  const { onChange: onChangeProp, value: valueProp } = props;
  const styles = useMultiStyleConfig("Radio", { ...group, ...props });
  const ownProps = omitThemingProps(props);
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
    onChange = callAll(group.onChange, onChangeProp);
  }
  const name = props?.name ?? group?.name;
  const {
    getInputProps,
    getRadioProps,
    getLabelProps,
    getRootProps,
    htmlProps
  } = useRadio({
    ...rest,
    isChecked,
    isFocusable,
    isDisabled,
    onChange,
    name
  });
  const [layoutProps, otherProps] = split(htmlProps, layoutPropNames);
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
  return /* @__PURE__ */ jsxs(chakra.label, { className: "chakra-radio", ...rootProps, __css: rootStyles, children: [
    /* @__PURE__ */ jsx("input", { className: "chakra-radio__input", ...inputProps }),
    /* @__PURE__ */ jsx(
      chakra.span,
      {
        className: "chakra-radio__control",
        ...checkboxProps,
        __css: checkboxStyles
      }
    ),
    children && /* @__PURE__ */ jsx(
      chakra.span,
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

export { Radio };
