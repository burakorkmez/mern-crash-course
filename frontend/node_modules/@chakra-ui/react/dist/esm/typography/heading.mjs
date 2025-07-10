'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Heading = forwardRef(
  function Heading2(props, ref) {
    const styles = useStyleConfig("Heading", props);
    const { className, ...rest } = omitThemingProps(props);
    return /* @__PURE__ */ jsx(
      chakra.h2,
      {
        ref,
        className: cx("chakra-heading", props.className),
        ...rest,
        __css: styles
      }
    );
  }
);
Heading.displayName = "Heading";

export { Heading };
