'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Kbd = forwardRef(function Kbd2(props, ref) {
  const styles = useStyleConfig("Kbd", props);
  const { className, ...rest } = omitThemingProps(props);
  return /* @__PURE__ */ jsx(
    chakra.kbd,
    {
      ref,
      className: cx("chakra-kbd", className),
      ...rest,
      __css: {
        fontFamily: "mono",
        ...styles
      }
    }
  );
});
Kbd.displayName = "Kbd";

export { Kbd };
