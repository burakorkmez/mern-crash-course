'use client';
'use strict';

var editableContext = require('./editable-context.cjs');

function useEditableState() {
  const { isEditing, onSubmit, onCancel, onEdit, isDisabled } = editableContext.useEditableContext();
  return {
    isEditing,
    onSubmit,
    onCancel,
    onEdit,
    isDisabled
  };
}

exports.useEditableState = useEditableState;
