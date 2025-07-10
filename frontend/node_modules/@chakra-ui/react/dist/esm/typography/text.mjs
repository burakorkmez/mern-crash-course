'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { compact, cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Text = forwardRef(function Text2(props, ref) {
  const styles = useStyleConfig("Text", props);
  const { className, align, decoration, casing, ...rest } = omitThemingProps(props);
  const aliasedProps = compact({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return /* @__PURE__ */ jsx(
    chakra.p,
    {
      ref,
      className: cx("chakra-text", props.className),
      ...aliasedProps,
      ...rest,
      __css: styles
    }
  );
});
Text.displayName = "Text";

export { Text };
