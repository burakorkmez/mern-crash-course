'use client';
import { useEditableContext } from './editable-context.mjs';

function useEditableState() {
  const { isEditing, onSubmit, onCancel, onEdit, isDisabled } = useEditableContext();
  return {
    isEditing,
    onSubmit,
    onCancel,
    onEdit,
    isDisabled
  };
}

export { useEditableState };
