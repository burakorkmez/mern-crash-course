'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useEditableContext, useEditableStyles } from './editable-context.mjs';
import { commonStyles } from './shared.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const EditableInput = forwardRef(
  function EditableInput2(props, ref) {
    const { getInputProps } = useEditableContext();
    const styles = useEditableStyles();
    const inputProps = getInputProps(props, ref);
    const _className = cx("chakra-editable__input", props.className);
    return /* @__PURE__ */ jsx(
      chakra.input,
      {
        ...inputProps,
        __css: {
          outline: 0,
          ...commonStyles,
          ...styles.input
        },
        className: _className
      }
    );
  }
);
EditableInput.displayName = "EditableInput";

export { EditableInput };
