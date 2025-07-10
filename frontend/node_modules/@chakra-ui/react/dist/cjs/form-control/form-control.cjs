'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var hooks = require('@chakra-ui/hooks');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const [FormControlStylesProvider, useFormControlStyles] = utils.createContext({
  name: `FormControlStylesContext`,
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
});
const [FormControlProvider, useFormControlContext] = utils.createContext({
  strict: false,
  name: "FormControlContext"
});
function useFormControlProvider(props) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  const uuid = React.useId();
  const id = idProp || `field-${uuid}`;
  const labelId = `${id}-label`;
  const feedbackId = `${id}-feedback`;
  const helpTextId = `${id}-helptext`;
  const [hasFeedbackText, setHasFeedbackText] = React.useState(false);
  const [hasHelpText, setHasHelpText] = React.useState(false);
  const [isFocused, setFocus] = React.useState(false);
  const getHelpTextProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      id: helpTextId,
      ...props2,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: hooks.mergeRefs(forwardedRef, (node) => {
        if (!node)
          return;
        setHasHelpText(true);
      })
    }),
    [helpTextId]
  );
  const getLabelProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      "data-focus": utils.dataAttr(isFocused),
      "data-disabled": utils.dataAttr(isDisabled),
      "data-invalid": utils.dataAttr(isInvalid),
      "data-readonly": utils.dataAttr(isReadOnly),
      id: props2.id !== void 0 ? props2.id : labelId,
      htmlFor: props2.htmlFor !== void 0 ? props2.htmlFor : id
    }),
    [id, isDisabled, isFocused, isInvalid, isReadOnly, labelId]
  );
  const getErrorMessageProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      id: feedbackId,
      ...props2,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: hooks.mergeRefs(forwardedRef, (node) => {
        if (!node)
          return;
        setHasFeedbackText(true);
      }),
      "aria-live": "polite"
    }),
    [feedbackId]
  );
  const getRootProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ...htmlProps,
      ref: forwardedRef,
      role: "group",
      "data-focus": utils.dataAttr(isFocused),
      "data-disabled": utils.dataAttr(isDisabled),
      "data-invalid": utils.dataAttr(isInvalid),
      "data-readonly": utils.dataAttr(isReadOnly)
    }),
    [htmlProps, isDisabled, isFocused, isInvalid, isReadOnly]
  );
  const getRequiredIndicatorProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      role: "presentation",
      "aria-hidden": true,
      children: props2.children || "*"
    }),
    []
  );
  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    isFocused: !!isFocused,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps
  };
}
const FormControl = forwardRef.forwardRef(
  function FormControl2(props, ref) {
    const styles = useStyleConfig.useMultiStyleConfig("Form", props);
    const ownProps = styledSystem.omitThemingProps(props);
    const {
      getRootProps,
      htmlProps: _,
      ...context
    } = useFormControlProvider(ownProps);
    const className = utils.cx("chakra-form-control", props.className);
    return /* @__PURE__ */ jsxRuntime.jsx(FormControlProvider, { value: context, children: /* @__PURE__ */ jsxRuntime.jsx(FormControlStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...getRootProps({}, ref),
        className,
        __css: styles["container"]
      }
    ) }) });
  }
);
FormControl.displayName = "FormControl";
const FormHelperText = forwardRef.forwardRef(
  function FormHelperText2(props, ref) {
    const field = useFormControlContext();
    const styles = useFormControlStyles();
    const className = utils.cx("chakra-form__helper-text", props.className);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...field?.getHelpTextProps(props, ref),
        __css: styles.helperText,
        className
      }
    );
  }
);
FormHelperText.displayName = "FormHelperText";

exports.FormControl = FormControl;
exports.FormHelperText = FormHelperText;
exports.useFormControlContext = useFormControlContext;
exports.useFormControlStyles = useFormControlStyles;
