'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var formControl = require('./form-control.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const FormLabel = forwardRef.forwardRef(
  function FormLabel2(passedProps, ref) {
    const styles = useStyleConfig.useStyleConfig("FormLabel", passedProps);
    const props = styledSystem.omitThemingProps(passedProps);
    const {
      className,
      children,
      requiredIndicator = /* @__PURE__ */ jsxRuntime.jsx(RequiredIndicator, {}),
      optionalIndicator = null,
      ...rest
    } = props;
    const field = formControl.useFormControlContext();
    const ownProps = field?.getLabelProps(rest, ref) ?? { ref, ...rest };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      factory.chakra.label,
      {
        ...ownProps,
        className: utils.cx("chakra-form__label", props.className),
        __css: {
          display: "block",
          textAlign: "start",
          ...styles
        },
        children: [
          children,
          field?.isRequired ? requiredIndicator : optionalIndicator
        ]
      }
    );
  }
);
FormLabel.displayName = "FormLabel";
const RequiredIndicator = forwardRef.forwardRef(
  function RequiredIndicator2(props, ref) {
    const field = formControl.useFormControlContext();
    const styles = formControl.useFormControlStyles();
    if (!field?.isRequired)
      return null;
    const className = utils.cx("chakra-form__required-indicator", props.className);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.span,
      {
        ...field?.getRequiredIndicatorProps(props, ref),
        __css: styles.requiredIndicator,
        className
      }
    );
  }
);
RequiredIndicator.displayName = "RequiredIndicator";

exports.FormLabel = FormLabel;
exports.RequiredIndicator = RequiredIndicator;
