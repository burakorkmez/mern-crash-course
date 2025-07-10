'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useEditableContext, useEditableStyles } from './editable-context.mjs';
import { commonStyles } from './shared.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const EditablePreview = forwardRef(
  function EditablePreview2(props, ref) {
    const { getPreviewProps } = useEditableContext();
    const styles = useEditableStyles();
    const previewProps = getPreviewProps(props, ref);
    const _className = cx("chakra-editable__preview", props.className);
    return /* @__PURE__ */ jsx(
      chakra.span,
      {
        ...previewProps,
        __css: {
          cursor: "text",
          display: "inline-block",
          ...commonStyles,
          ...styles.preview
        },
        className: _className
      }
    );
  }
);
EditablePreview.displayName = "EditablePreview";

export { EditablePreview };
