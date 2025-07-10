'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var useFormControl = require('../form-control/use-form-control.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const omitted = ["h", "minH", "height", "minHeight"];
const Textarea = forwardRef.forwardRef((props, ref) => {
  const styles = useStyleConfig.useStyleConfig("Textarea", props);
  const { className, rows, ...rest } = styledSystem.omitThemingProps(props);
  const textareaProps = useFormControl.useFormControl(rest);
  const textareaStyles = rows ? utils.omit(styles, omitted) : styles;
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.textarea,
    {
      ref,
      rows,
      ...textareaProps,
      className: utils.cx("chakra-textarea", className),
      __css: textareaStyles
    }
  );
});
Textarea.displayName = "Textarea";

exports.Textarea = Textarea;
