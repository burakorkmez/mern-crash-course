'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var formControl = require('./form-control.cjs');

function useFormControl(props) {
  const { isDisabled, isInvalid, isReadOnly, isRequired, ...rest } = useFormControlProps(props);
  return {
    ...rest,
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    "aria-invalid": utils.ariaAttr(isInvalid),
    "aria-required": utils.ariaAttr(isRequired),
    "aria-readonly": utils.ariaAttr(isReadOnly)
  };
}
function useFormControlProps(props) {
  const field = formControl.useFormControlContext();
  const {
    id,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    onFocus,
    onBlur,
    ...rest
  } = props;
  const labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
  if (field?.hasFeedbackText && field?.isInvalid) {
    labelIds.push(field.feedbackId);
  }
  if (field?.hasHelpText) {
    labelIds.push(field.helpTextId);
  }
  return {
    ...rest,
    "aria-describedby": labelIds.join(" ") || void 0,
    id: id ?? field?.id,
    isDisabled: disabled ?? isDisabled ?? field?.isDisabled,
    isReadOnly: readOnly ?? isReadOnly ?? field?.isReadOnly,
    isRequired: required ?? isRequired ?? field?.isRequired,
    isInvalid: isInvalid ?? field?.isInvalid,
    onFocus: utils.callAllHandlers(field?.onFocus, onFocus),
    onBlur: utils.callAllHandlers(field?.onBlur, onBlur)
  };
}

exports.useFormControl = useFormControl;
exports.useFormControlProps = useFormControlProps;
