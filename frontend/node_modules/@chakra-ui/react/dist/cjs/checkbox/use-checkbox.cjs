'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var focusVisible = require('@zag-js/focus-visible');
var React = require('react');
var useFormControl = require('../form-control/use-form-control.cjs');
var visuallyHidden_style = require('../visually-hidden/visually-hidden.style.cjs');

function useCheckbox(props = {}) {
  const formControlProps = useFormControl.useFormControlProps(props);
  const {
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    id,
    onBlur,
    onFocus,
    "aria-describedby": ariaDescribedBy
  } = formControlProps;
  const {
    defaultChecked,
    isChecked: checkedProp,
    isFocusable,
    onChange,
    isIndeterminate,
    name,
    value,
    tabIndex = void 0,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-invalid": ariaInvalid,
    ...rest
  } = props;
  const htmlProps = utils.omit(rest, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]);
  const onChangeProp = hooks.useCallbackRef(onChange);
  const onBlurProp = hooks.useCallbackRef(onBlur);
  const onFocusProp = hooks.useCallbackRef(onFocus);
  const [isFocused, setFocused] = React.useState(false);
  const [isHovered, setHovered] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const isFocusVisibleRef = React.useRef(false);
  React.useEffect(() => {
    return focusVisible.trackFocusVisible((state2) => {
      isFocusVisibleRef.current = state2;
    });
  }, []);
  const inputRef = React.useRef(null);
  const [rootIsLabelElement, setRootIsLabelElement] = React.useState(true);
  const [checkedState, setCheckedState] = React.useState(!!defaultChecked);
  const isControlled = checkedProp !== void 0;
  const isChecked = isControlled ? checkedProp : checkedState;
  const handleChange = React.useCallback(
    (event) => {
      if (isReadOnly || isDisabled) {
        event.preventDefault();
        return;
      }
      if (!isControlled) {
        if (isChecked) {
          setCheckedState(event.currentTarget.checked);
        } else {
          setCheckedState(isIndeterminate ? true : event.currentTarget.checked);
        }
      }
      onChangeProp?.(event);
    },
    [
      isReadOnly,
      isDisabled,
      isChecked,
      isControlled,
      isIndeterminate,
      onChangeProp
    ]
  );
  hooks.useSafeLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(isIndeterminate);
    }
  }, [isIndeterminate]);
  hooks.useUpdateEffect(() => {
    if (isDisabled) {
      setFocused(false);
    }
  }, [isDisabled, setFocused]);
  hooks.useSafeLayoutEffect(() => {
    const el = inputRef.current;
    if (!el?.form)
      return;
    const formResetListener = () => {
      setCheckedState(!!defaultChecked);
    };
    el.form.addEventListener("reset", formResetListener);
    return () => el.form?.removeEventListener("reset", formResetListener);
  }, []);
  const trulyDisabled = isDisabled && !isFocusable;
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
  hooks.useSafeLayoutEffect(() => {
    if (!inputRef.current)
      return;
    const notInSync = inputRef.current.checked !== isChecked;
    if (notInSync) {
      setCheckedState(inputRef.current.checked);
    }
  }, [inputRef.current]);
  const getCheckboxProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => {
      const onPressDown = (event) => {
        if (isFocused) {
          event.preventDefault();
        }
        setActive(true);
      };
      return {
        ...props2,
        ref: forwardedRef,
        "data-active": utils.dataAttr(isActive),
        "data-hover": utils.dataAttr(isHovered),
        "data-checked": utils.dataAttr(isChecked),
        "data-focus": utils.dataAttr(isFocused),
        "data-focus-visible": utils.dataAttr(isFocused && isFocusVisibleRef.current),
        "data-indeterminate": utils.dataAttr(isIndeterminate),
        "data-disabled": utils.dataAttr(isDisabled),
        "data-invalid": utils.dataAttr(isInvalid),
        "data-readonly": utils.dataAttr(isReadOnly),
        "aria-hidden": true,
        onMouseDown: utils.callAllHandlers(props2.onMouseDown, onPressDown),
        onMouseUp: utils.callAllHandlers(props2.onMouseUp, () => setActive(false)),
        onMouseEnter: utils.callAllHandlers(
          props2.onMouseEnter,
          () => setHovered(true)
        ),
        onMouseLeave: utils.callAllHandlers(
          props2.onMouseLeave,
          () => setHovered(false)
        )
      };
    },
    [
      isActive,
      isChecked,
      isDisabled,
      isFocused,
      isHovered,
      isIndeterminate,
      isInvalid,
      isReadOnly
    ]
  );
  const getIndicatorProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      "data-active": utils.dataAttr(isActive),
      "data-hover": utils.dataAttr(isHovered),
      "data-checked": utils.dataAttr(isChecked),
      "data-focus": utils.dataAttr(isFocused),
      "data-focus-visible": utils.dataAttr(isFocused && isFocusVisibleRef.current),
      "data-indeterminate": utils.dataAttr(isIndeterminate),
      "data-disabled": utils.dataAttr(isDisabled),
      "data-invalid": utils.dataAttr(isInvalid),
      "data-readonly": utils.dataAttr(isReadOnly)
    }),
    [
      isActive,
      isChecked,
      isDisabled,
      isFocused,
      isHovered,
      isIndeterminate,
      isInvalid,
      isReadOnly
    ]
  );
  const getRootProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      ...htmlProps,
      ...props2,
      ref: hooks.mergeRefs(forwardedRef, (node) => {
        if (!node)
          return;
        setRootIsLabelElement(node.tagName === "LABEL");
      }),
      onClick: utils.callAllHandlers(props2.onClick, () => {
        if (!rootIsLabelElement) {
          inputRef.current?.click();
          requestAnimationFrame(() => {
            inputRef.current?.focus({ preventScroll: true });
          });
        }
      }),
      "data-disabled": utils.dataAttr(isDisabled),
      "data-checked": utils.dataAttr(isChecked),
      "data-invalid": utils.dataAttr(isInvalid)
    }),
    [htmlProps, isDisabled, isChecked, isInvalid, rootIsLabelElement]
  );
  const getInputProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => {
      return {
        ...props2,
        ref: hooks.mergeRefs(inputRef, forwardedRef),
        type: "checkbox",
        name,
        value,
        id,
        tabIndex,
        onChange: utils.callAllHandlers(props2.onChange, handleChange),
        onBlur: utils.callAllHandlers(
          props2.onBlur,
          onBlurProp,
          () => setFocused(false)
        ),
        onFocus: utils.callAllHandlers(
          props2.onFocus,
          onFocusProp,
          () => setFocused(true)
        ),
        onKeyDown: utils.callAllHandlers(props2.onKeyDown, onKeyDown),
        onKeyUp: utils.callAllHandlers(props2.onKeyUp, onKeyUp),
        required: isRequired,
        checked: isChecked,
        disabled: trulyDisabled,
        readOnly: isReadOnly,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-invalid": ariaInvalid ? Boolean(ariaInvalid) : isInvalid,
        "aria-describedby": ariaDescribedBy,
        "aria-disabled": isDisabled,
        "aria-checked": isIndeterminate ? "mixed" : isChecked,
        style: visuallyHidden_style.visuallyHiddenStyle
      };
    },
    [
      name,
      value,
      id,
      tabIndex,
      handleChange,
      onBlurProp,
      onFocusProp,
      onKeyDown,
      onKeyUp,
      isRequired,
      isChecked,
      trulyDisabled,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      ariaInvalid,
      isInvalid,
      ariaDescribedBy,
      isDisabled,
      isIndeterminate
    ]
  );
  const getLabelProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      onMouseDown: utils.callAllHandlers(props2.onMouseDown, stopEvent),
      "data-disabled": utils.dataAttr(isDisabled),
      "data-checked": utils.dataAttr(isChecked),
      "data-invalid": utils.dataAttr(isInvalid)
    }),
    [isChecked, isDisabled, isInvalid]
  );
  const state = {
    isInvalid,
    isFocused,
    isChecked,
    isActive,
    isHovered,
    isIndeterminate,
    isDisabled,
    isReadOnly,
    isRequired
  };
  return {
    state,
    getRootProps,
    getCheckboxProps,
    getIndicatorProps,
    getInputProps,
    getLabelProps,
    htmlProps
  };
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

exports.useCheckbox = useCheckbox;
