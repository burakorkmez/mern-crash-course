'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useFormControl } from '../form-control/use-form-control.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Input = forwardRef(
  function Input2(props, ref) {
    const { htmlSize, ...rest } = props;
    const styles = useMultiStyleConfig("Input", rest);
    const ownProps = omitThemingProps(rest);
    const input = useFormControl(ownProps);
    const _className = cx("chakra-input", props.className);
    return /* @__PURE__ */ jsx(
      chakra.input,
      {
        size: htmlSize,
        ...input,
        __css: styles.field,
        ref,
        className: _className
      }
    );
  }
);
Input.displayName = "Input";
Input.id = "Input";

export { Input };
