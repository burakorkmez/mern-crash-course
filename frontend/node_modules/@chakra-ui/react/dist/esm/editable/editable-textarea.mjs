'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useEditableContext, useEditableStyles } from './editable-context.mjs';
import { commonStyles } from './shared.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const EditableTextarea = forwardRef(
  function EditableTextarea2(props, ref) {
    const { getTextareaProps } = useEditableContext();
    const styles = useEditableStyles();
    const textareaProps = getTextareaProps(props, ref);
    const _className = cx("chakra-editable__textarea", props.className);
    return /* @__PURE__ */ jsx(
      chakra.textarea,
      {
        ...textareaProps,
        __css: {
          outline: 0,
          ...commonStyles,
          ...styles.textarea
        },
        className: _className
      }
    );
  }
);
EditableTextarea.displayName = "EditableTextarea";

export { EditableTextarea };
