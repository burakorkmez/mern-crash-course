'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Container = forwardRef(
  function Container2(props, ref) {
    const { className, centerContent, ...rest } = omitThemingProps(props);
    const styles = useStyleConfig("Container", props);
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        className: cx("chakra-container", className),
        ...rest,
        __css: {
          ...styles,
          ...centerContent && {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }
        }
      }
    );
  }
);
Container.displayName = "Container";

export { Container };
