'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');

function contains(parent, child) {
  if (!parent)
    return false;
  return parent === child || parent.contains(child);
}
function useEditable(props = {}) {
  const {
    onChange: onChangeProp,
    onCancel: onCancelProp,
    onSubmit: onSubmitProp,
    onBlur: onBlurProp,
    value: valueProp,
    isDisabled,
    defaultValue,
    startWithEditView,
    isPreviewFocusable = true,
    submitOnBlur = true,
    selectAllOnFocus = true,
    placeholder,
    onEdit: onEditCallback,
    finalFocusRef,
    ...htmlProps
  } = props;
  const onEditProp = hooks.useCallbackRef(onEditCallback);
  const defaultIsEditing = Boolean(startWithEditView && !isDisabled);
  const [isEditing, setIsEditing] = React.useState(defaultIsEditing);
  const [value, setValue] = hooks.useControllableState({
    defaultValue: defaultValue || "",
    value: valueProp,
    onChange: onChangeProp
  });
  const [prevValue, setPrevValue] = React.useState(value);
  const inputRef = React.useRef(null);
  const previewRef = React.useRef(null);
  const editButtonRef = React.useRef(null);
  const cancelButtonRef = React.useRef(null);
  const submitButtonRef = React.useRef(null);
  hooks.useFocusOnPointerDown({
    ref: inputRef,
    enabled: isEditing,
    elements: [cancelButtonRef, submitButtonRef]
  });
  const isInteractive = !isEditing && !isDisabled;
  hooks.useSafeLayoutEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      if (selectAllOnFocus)
        inputRef.current?.select();
    }
  }, []);
  hooks.useUpdateEffect(() => {
    if (!isEditing) {
      if (finalFocusRef) {
        finalFocusRef.current?.focus();
      } else {
        editButtonRef.current?.focus();
      }
      return;
    }
    inputRef.current?.focus();
    if (selectAllOnFocus) {
      inputRef.current?.select();
    }
    onEditProp?.();
  }, [isEditing, onEditProp, selectAllOnFocus]);
  const onEdit = React.useCallback(() => {
    if (isInteractive) {
      setIsEditing(true);
    }
  }, [isInteractive]);
  const onUpdatePrevValue = React.useCallback(() => {
    setPrevValue(value);
  }, [value]);
  const onCancel = React.useCallback(() => {
    setIsEditing(false);
    setValue(prevValue);
    onCancelProp?.(prevValue);
    onBlurProp?.(prevValue);
  }, [onCancelProp, onBlurProp, setValue, prevValue]);
  const onSubmit = React.useCallback(() => {
    setIsEditing(false);
    setPrevValue(value);
    onSubmitProp?.(value);
    onBlurProp?.(prevValue);
  }, [value, onSubmitProp, onBlurProp, prevValue]);
  React.useEffect(() => {
    if (isEditing)
      return;
    const inputEl = inputRef.current;
    if (inputEl?.ownerDocument.activeElement === inputEl) {
      inputEl?.blur();
    }
  }, [isEditing]);
  const onChange = React.useCallback(
    (event) => {
      setValue(event.currentTarget.value);
    },
    [setValue]
  );
  const onKeyDown = React.useCallback(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Escape: onCancel,
        Enter: (event2) => {
          if (!event2.shiftKey && !event2.metaKey) {
            onSubmit();
          }
        }
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [onCancel, onSubmit]
  );
  const onKeyDownWithoutSubmit = React.useCallback(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Escape: onCancel
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [onCancel]
  );
  const isValueEmpty = value.length === 0;
  const onBlur = React.useCallback(
    (event) => {
      if (!isEditing)
        return;
      const doc = event.currentTarget.ownerDocument;
      const relatedTarget = event.relatedTarget ?? doc.activeElement;
      const targetIsCancel = contains(cancelButtonRef.current, relatedTarget);
      const targetIsSubmit = contains(submitButtonRef.current, relatedTarget);
      const isValidBlur = !targetIsCancel && !targetIsSubmit;
      if (isValidBlur) {
        if (submitOnBlur) {
          onSubmit();
        } else {
          onCancel();
        }
      }
    },
    [submitOnBlur, onSubmit, onCancel, isEditing]
  );
  const getPreviewProps = React.useCallback(
    (props2 = {}, ref = null) => {
      const tabIndex = isInteractive && isPreviewFocusable ? 0 : void 0;
      return {
        ...props2,
        ref: hooks.mergeRefs(ref, previewRef),
        children: isValueEmpty ? placeholder : value,
        hidden: isEditing,
        "aria-disabled": utils.ariaAttr(isDisabled),
        tabIndex,
        onFocus: utils.callAllHandlers(props2.onFocus, onEdit, onUpdatePrevValue)
      };
    },
    [
      isDisabled,
      isEditing,
      isInteractive,
      isPreviewFocusable,
      isValueEmpty,
      onEdit,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getInputProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      hidden: !isEditing,
      placeholder,
      ref: hooks.mergeRefs(ref, inputRef),
      disabled: isDisabled,
      "aria-disabled": utils.ariaAttr(isDisabled),
      value,
      onBlur: utils.callAllHandlers(props2.onBlur, onBlur),
      onChange: utils.callAllHandlers(props2.onChange, onChange),
      onKeyDown: utils.callAllHandlers(props2.onKeyDown, onKeyDown),
      onFocus: utils.callAllHandlers(props2.onFocus, onUpdatePrevValue)
    }),
    [
      isDisabled,
      isEditing,
      onBlur,
      onChange,
      onKeyDown,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getTextareaProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      hidden: !isEditing,
      placeholder,
      ref: hooks.mergeRefs(ref, inputRef),
      disabled: isDisabled,
      "aria-disabled": utils.ariaAttr(isDisabled),
      value,
      onBlur: utils.callAllHandlers(props2.onBlur, onBlur),
      onChange: utils.callAllHandlers(props2.onChange, onChange),
      onKeyDown: utils.callAllHandlers(props2.onKeyDown, onKeyDownWithoutSubmit),
      onFocus: utils.callAllHandlers(props2.onFocus, onUpdatePrevValue)
    }),
    [
      isDisabled,
      isEditing,
      onBlur,
      onChange,
      onKeyDownWithoutSubmit,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getEditButtonProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      "aria-label": "Edit",
      ...props2,
      type: "button",
      onClick: utils.callAllHandlers(props2.onClick, onEdit),
      ref: hooks.mergeRefs(ref, editButtonRef),
      disabled: isDisabled
    }),
    [onEdit, isDisabled]
  );
  const getSubmitButtonProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      "aria-label": "Submit",
      ref: hooks.mergeRefs(submitButtonRef, ref),
      type: "button",
      onClick: utils.callAllHandlers(props2.onClick, onSubmit),
      disabled: isDisabled
    }),
    [onSubmit, isDisabled]
  );
  const getCancelButtonProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      "aria-label": "Cancel",
      id: "cancel",
      ...props2,
      ref: hooks.mergeRefs(cancelButtonRef, ref),
      type: "button",
      onClick: utils.callAllHandlers(props2.onClick, onCancel),
      disabled: isDisabled
    }),
    [onCancel, isDisabled]
  );
  return {
    isEditing,
    isDisabled,
    isValueEmpty,
    value,
    onEdit,
    onCancel,
    onSubmit,
    getPreviewProps,
    getInputProps,
    getTextareaProps,
    getEditButtonProps,
    getSubmitButtonProps,
    getCancelButtonProps,
    htmlProps
  };
}

exports.useEditable = useEditable;
