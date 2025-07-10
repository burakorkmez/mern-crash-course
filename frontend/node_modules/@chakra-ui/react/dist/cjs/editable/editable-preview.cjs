'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var editableContext = require('./editable-context.cjs');
var shared = require('./shared.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const EditablePreview = forwardRef.forwardRef(
  function EditablePreview2(props, ref) {
    const { getPreviewProps } = editableContext.useEditableContext();
    const styles = editableContext.useEditableStyles();
    const previewProps = getPreviewProps(props, ref);
    const _className = utils.cx("chakra-editable__preview", props.className);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.span,
      {
        ...previewProps,
        __css: {
          cursor: "text",
          display: "inline-block",
          ...shared.commonStyles,
          ...styles.preview
        },
        className: _className
      }
    );
  }
);
EditablePreview.displayName = "EditablePreview";

exports.EditablePreview = EditablePreview;
