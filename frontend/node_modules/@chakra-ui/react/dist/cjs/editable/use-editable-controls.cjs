'use client';
'use strict';

var editableContext = require('./editable-context.cjs');

function useEditableControls() {
  const {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  } = editableContext.useEditableContext();
  return {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  };
}

exports.useEditableControls = useEditableControls;
