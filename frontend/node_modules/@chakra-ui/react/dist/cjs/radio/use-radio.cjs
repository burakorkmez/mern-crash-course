'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var focusVisible = require('@zag-js/focus-visible');
var React = require('react');
var radioGroup = require('./radio-group.cjs');
var formControl = require('../form-control/form-control.cjs');
var visuallyHidden_style = require('../visually-hidden/visually-hidden.style.cjs');

function useRadio(props = {}) {
  const {
    defaultChecked,
    isChecked: isCheckedProp,
    isFocusable,
    isDisabled: isDisabledProp,
    isReadOnly: isReadOnlyProp,
    isRequired: isRequiredProp,
    onChange,
    isInvalid: isInvalidProp,
    name,
    value,
    id: idProp,
    "data-radiogroup": dataRadioGroup,
    "aria-describedby": ariaDescribedBy,
    ...htmlProps
  } = props;
  const uuid = `radio-${React.useId()}`;
  const formControl$1 = formControl.useFormControlContext();
  const group = radioGroup.useRadioGroupContext();
  const isWithinRadioGroup = !!group || !!dataRadioGroup;
  const isWithinFormControl = !!formControl$1;
  let id = isWithinFormControl && !isWithinRadioGroup ? formControl$1.id : uuid;
  id = idProp ?? id;
  const isDisabled = isDisabledProp ?? formControl$1?.isDisabled;
  const isReadOnly = isReadOnlyProp ?? formControl$1?.isReadOnly;
  const isRequired = isRequiredProp ?? formControl$1?.isRequired;
  const isInvalid = isInvalidProp ?? formControl$1?.isInvalid;
  const [isFocused, setFocused] = React.useState(false);
  const [isHovered, setHovering] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const [isCheckedState, setChecked] = React.useState(Boolean(defaultChecked));
  const isControlled = typeof isCheckedProp !== "undefined";
  const isChecked = isControlled ? isCheckedProp : isCheckedState;
  const isFocusVisibleRef = React.useRef(false);
  React.useEffect(() => {
    return focusVisible.trackFocusVisible((state2) => {
      isFocusVisibleRef.current = state2;
    });
  }, []);
  const handleChange = React.useCallback(
    (event) => {
      if (isReadOnly || isDisabled) {
        event.preventDefault();
        return;
      }
      if (!isControlled) {
        setChecked(event.currentTarget.checked);
      }
      onChange?.(event);
    },
    [isControlled, isDisabled, isReadOnly, onChange]
  );
  const onKeyDown = React.useCallback(
    (event) => {
      if (event.key === " ") {
        setActive(true);
      }
    },
    [setActive]
  );
  const onKeyUp = React.useCallback(
    (event) => {
      if (event.key === " ") {
        setActive(false);
      }
    },
    [setActive]
  );
  const getRadioProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref,
      "data-active": utils.dataAttr(isActive),
      "data-hover": utils.dataAttr(isHovered),
      "data-disabled": utils.dataAttr(isDisabled),
      "data-invalid": utils.dataAttr(isInvalid),
      "data-checked": utils.dataAttr(isChecked),
      "data-focus": utils.dataAttr(isFocused),
      "data-focus-visible": utils.dataAttr(isFocused && isFocusVisibleRef.current),
      "data-readonly": utils.dataAttr(isReadOnly),
      "aria-hidden": true,
      onMouseDown: utils.callAllHandlers(props2.onMouseDown, () => setActive(true)),
      onMouseUp: utils.callAllHandlers(props2.onMouseUp, () => setActive(false)),
      onMouseEnter: utils.callAllHandlers(
        props2.onMouseEnter,
        () => setHovering(true)
      ),
      onMouseLeave: utils.callAllHandlers(
        props2.onMouseLeave,
        () => setHovering(false)
      )
    }),
    [
      isActive,
      isHovered,
      isDisabled,
      isInvalid,
      isChecked,
      isFocused,
      isReadOnly
    ]
  );
  const { onFocus, onBlur } = formControl$1 ?? {};
  const getInputProps = React.useCallback(
    (props2 = {}, ref = null) => {
      const trulyDisabled = isDisabled && !isFocusable;
      return {
        ...props2,
        id,
        ref,
        type: "radio",
        name,
        value,
        onChange: utils.callAllHandlers(props2.onChange, handleChange),
        onBlur: utils.callAllHandlers(
          onBlur,
          props2.onBlur,
          () => setFocused(false)
        ),
        onFocus: utils.callAllHandlers(
          onFocus,
          props2.onFocus,
          () => setFocused(true)
        ),
        onKeyDown: utils.callAllHandlers(props2.onKeyDown, onKeyDown),
        onKeyUp: utils.callAllHandlers(props2.onKeyUp, onKeyUp),
        checked: isChecked,
        disabled: trulyDisabled,
        readOnly: isReadOnly,
        required: isRequired,
        "aria-invalid": utils.ariaAttr(isInvalid),
        "aria-disabled": utils.ariaAttr(trulyDisabled),
        "aria-required": utils.ariaAttr(isRequired),
        "data-readonly": utils.dataAttr(isReadOnly),
        "aria-describedby": ariaDescribedBy,
        style: visuallyHidden_style.visuallyHiddenStyle
      };
    },
    [
      isDisabled,
      isFocusable,
      id,
      name,
      value,
      handleChange,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
      isChecked,
      isReadOnly,
      isRequired,
      isInvalid,
      ariaDescribedBy
    ]
  );
  const getLabelProps = (props2 = {}, ref = null) => ({
    ...props2,
    ref,
    onMouseDown: utils.callAllHandlers(props2.onMouseDown, stopEvent),
    "data-disabled": utils.dataAttr(isDisabled),
    "data-checked": utils.dataAttr(isChecked),
    "data-invalid": utils.dataAttr(isInvalid)
  });
  const getRootProps = (props2, ref = null) => ({
    htmlFor: id,
    ...props2,
    ref,
    "data-disabled": utils.dataAttr(isDisabled),
    "data-checked": utils.dataAttr(isChecked),
    "data-invalid": utils.dataAttr(isInvalid)
  });
  const state = {
    isInvalid,
    isFocused,
    isChecked,
    isActive,
    isHovered,
    isDisabled,
    isReadOnly,
    isRequired
  };
  return {
    state,
    getRadioProps,
    getInputProps,
    getLabelProps,
    getRootProps,
    htmlProps
  };
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

exports.useRadio = useRadio;
