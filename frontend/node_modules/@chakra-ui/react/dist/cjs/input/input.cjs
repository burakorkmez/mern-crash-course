'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var useFormControl = require('../form-control/use-form-control.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Input = forwardRef.forwardRef(
  function Input2(props, ref) {
    const { htmlSize, ...rest } = props;
    const styles = useStyleConfig.useMultiStyleConfig("Input", rest);
    const ownProps = styledSystem.omitThemingProps(rest);
    const input = useFormControl.useFormControl(ownProps);
    const _className = utils.cx("chakra-input", props.className);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.input,
      {
        size: htmlSize,
        ...input,
        __css: styles.field,
        ref,
        className: _className
      }
    );
  }
);
Input.displayName = "Input";
Input.id = "Input";

exports.Input = Input;
