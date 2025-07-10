'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var usePinInput = require('./use-pin-input.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

function PinInput(props) {
  const styles = useStyleConfig.useStyleConfig("PinInput", props);
  const { children, ...rest } = styledSystem.omitThemingProps(props);
  const { descendants, ...context } = usePinInput.usePinInput(rest);
  const clones = utils.getValidChildren(children).map(
    (child) => React.cloneElement(child, { __css: styles })
  );
  return /* @__PURE__ */ jsxRuntime.jsx(usePinInput.PinInputDescendantsProvider, { value: descendants, children: /* @__PURE__ */ jsxRuntime.jsx(usePinInput.PinInputProvider, { value: context, children: clones }) });
}
PinInput.displayName = "PinInput";
const PinInputField = forwardRef.forwardRef(
  function PinInputField2(props, ref) {
    const inputProps = usePinInput.usePinInputField(props, ref);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.input,
      {
        ...inputProps,
        className: utils.cx("chakra-pin-input", props.className)
      }
    );
  }
);
PinInputField.displayName = "PinInputField";

exports.PinInput = PinInput;
exports.PinInputField = PinInputField;
