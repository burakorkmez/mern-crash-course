'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var editableContext = require('./editable-context.cjs');
var shared = require('./shared.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const EditableInput = forwardRef.forwardRef(
  function EditableInput2(props, ref) {
    const { getInputProps } = editableContext.useEditableContext();
    const styles = editableContext.useEditableStyles();
    const inputProps = getInputProps(props, ref);
    const _className = utils.cx("chakra-editable__input", props.className);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.input,
      {
        ...inputProps,
        __css: {
          outline: 0,
          ...shared.commonStyles,
          ...styles.input
        },
        className: _className
      }
    );
  }
);
EditableInput.displayName = "EditableInput";

exports.EditableInput = EditableInput;
