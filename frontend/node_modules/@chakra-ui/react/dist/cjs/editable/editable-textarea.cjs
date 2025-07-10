'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var editableContext = require('./editable-context.cjs');
var shared = require('./shared.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const EditableTextarea = forwardRef.forwardRef(
  function EditableTextarea2(props, ref) {
    const { getTextareaProps } = editableContext.useEditableContext();
    const styles = editableContext.useEditableStyles();
    const textareaProps = getTextareaProps(props, ref);
    const _className = utils.cx("chakra-editable__textarea", props.className);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.textarea,
      {
        ...textareaProps,
        __css: {
          outline: 0,
          ...shared.commonStyles,
          ...styles.textarea
        },
        className: _className
      }
    );
  }
);
EditableTextarea.displayName = "EditableTextarea";

exports.EditableTextarea = EditableTextarea;
