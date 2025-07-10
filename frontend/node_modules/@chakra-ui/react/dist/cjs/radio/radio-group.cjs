'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var React = require('react');
var useRadioGroup = require('./use-radio-group.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const [RadioGroupProvider, useRadioGroupContext] = utils.createContext({
  name: "RadioGroupContext",
  strict: false
});
const RadioGroup = forwardRef.forwardRef((props, ref) => {
  const {
    colorScheme,
    size,
    variant,
    children,
    className,
    isDisabled,
    isFocusable,
    ...rest
  } = props;
  const { value, onChange, getRootProps, name, htmlProps } = useRadioGroup.useRadioGroup(rest);
  const group = React.useMemo(
    () => ({
      name,
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled,
      isFocusable
    }),
    [
      name,
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled,
      isFocusable
    ]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(RadioGroupProvider, { value: group, children: /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ...getRootProps(htmlProps, ref),
      className: utils.cx("chakra-radio-group", className),
      children
    }
  ) });
});
RadioGroup.displayName = "RadioGroup";

exports.RadioGroup = RadioGroup;
exports.useRadioGroupContext = useRadioGroupContext;
