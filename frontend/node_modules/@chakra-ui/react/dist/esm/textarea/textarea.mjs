'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { omit, cx } from '@chakra-ui/utils';
import { useFormControl } from '../form-control/use-form-control.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const omitted = ["h", "minH", "height", "minHeight"];
const Textarea = forwardRef((props, ref) => {
  const styles = useStyleConfig("Textarea", props);
  const { className, rows, ...rest } = omitThemingProps(props);
  const textareaProps = useFormControl(rest);
  const textareaStyles = rows ? omit(styles, omitted) : styles;
  return /* @__PURE__ */ jsx(
    chakra.textarea,
    {
      ref,
      rows,
      ...textareaProps,
      className: cx("chakra-textarea", className),
      __css: textareaStyles
    }
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
