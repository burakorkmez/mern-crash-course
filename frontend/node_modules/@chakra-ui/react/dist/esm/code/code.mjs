'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Code = forwardRef(function Code2(props, ref) {
  const styles = useStyleConfig("Code", props);
  const { className, ...rest } = omitThemingProps(props);
  return /* @__PURE__ */ jsx(
    chakra.code,
    {
      ref,
      className: cx("chakra-code", props.className),
      ...rest,
      __css: {
        display: "inline-block",
        ...styles
      }
    }
  );
});
Code.displayName = "Code";

export { Code };
