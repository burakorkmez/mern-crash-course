'use client';
import { dataAttr, callAllHandlers, ariaAttr } from '@chakra-ui/utils';
import { trackFocusVisible } from '@zag-js/focus-visible';
import { useId, useState, useRef, useEffect, useCallback } from 'react';
import { useRadioGroupContext } from './radio-group.mjs';
import { useFormControlContext } from '../form-control/form-control.mjs';
import { visuallyHiddenStyle } from '../visually-hidden/visually-hidden.style.mjs';

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
  const uuid = `radio-${useId()}`;
  const formControl = useFormControlContext();
  const group = useRadioGroupContext();
  const isWithinRadioGroup = !!group || !!dataRadioGroup;
  const isWithinFormControl = !!formControl;
  let id = isWithinFormControl && !isWithinRadioGroup ? formControl.id : uuid;
  id = idProp ?? id;
  const isDisabled = isDisabledProp ?? formControl?.isDisabled;
  const isReadOnly = isReadOnlyProp ?? formControl?.isReadOnly;
  const isRequired = isRequiredProp ?? formControl?.isRequired;
  const isInvalid = isInvalidProp ?? formControl?.isInvalid;
  const [isFocused, setFocused] = useState(false);
  const [isHovered, setHovering] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isCheckedState, setChecked] = useState(Boolean(defaultChecked));
  const isControlled = typeof isCheckedProp !== "undefined";
  const isChecked = isControlled ? isCheckedProp : isCheckedState;
  const isFocusVisibleRef = useRef(false);
  useEffect(() => {
    return trackFocusVisible((state2) => {
      isFocusVisibleRef.current = state2;
    });
  }, []);
  const handleChange = useCallback(
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
  const onKeyDown = useCallback(
    (event) => {
      if (event.key === " ") {
        setActive(true);
      }
    },
    [setActive]
  );
  const onKeyUp = useCallback(
    (event) => {
      if (event.key === " ") {
        setActive(false);
      }
    },
    [setActive]
  );
  const getRadioProps = useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref,
      "data-active": dataAttr(isActive),
      "data-hover": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-checked": dataAttr(isChecked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisibleRef.current),
      "data-readonly": dataAttr(isReadOnly),
      "aria-hidden": true,
      onMouseDown: callAllHandlers(props2.onMouseDown, () => setActive(true)),
      onMouseUp: callAllHandlers(props2.onMouseUp, () => setActive(false)),
      onMouseEnter: callAllHandlers(
        props2.onMouseEnter,
        () => setHovering(true)
      ),
      onMouseLeave: callAllHandlers(
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
  const { onFocus, onBlur } = formControl ?? {};
  const getInputProps = useCallback(
    (props2 = {}, ref = null) => {
      const trulyDisabled = isDisabled && !isFocusable;
      return {
        ...props2,
        id,
        ref,
        type: "radio",
        name,
        value,
        onChange: callAllHandlers(props2.onChange, handleChange),
        onBlur: callAllHandlers(
          onBlur,
          props2.onBlur,
          () => setFocused(false)
        ),
        onFocus: callAllHandlers(
          onFocus,
          props2.onFocus,
          () => setFocused(true)
        ),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onKeyUp: callAllHandlers(props2.onKeyUp, onKeyUp),
        checked: isChecked,
        disabled: trulyDisabled,
        readOnly: isReadOnly,
        required: isRequired,
        "aria-invalid": ariaAttr(isInvalid),
        "aria-disabled": ariaAttr(trulyDisabled),
        "aria-required": ariaAttr(isRequired),
        "data-readonly": dataAttr(isReadOnly),
        "aria-describedby": ariaDescribedBy,
        style: visuallyHiddenStyle
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
    onMouseDown: callAllHandlers(props2.onMouseDown, stopEvent),
    "data-disabled": dataAttr(isDisabled),
    "data-checked": dataAttr(isChecked),
    "data-invalid": dataAttr(isInvalid)
  });
  const getRootProps = (props2, ref = null) => ({
    htmlFor: id,
    ...props2,
    ref,
    "data-disabled": dataAttr(isDisabled),
    "data-checked": dataAttr(isChecked),
    "data-invalid": dataAttr(isInvalid)
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

export { useRadio };
