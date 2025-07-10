'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Badge = forwardRef(function Badge2(props, ref) {
  const styles = useStyleConfig("Badge", props);
  const { className, ...rest } = omitThemingProps(props);
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      ref,
      className: cx("chakra-badge", props.className),
      ...rest,
      __css: {
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        ...styles
      }
    }
  );
});
Badge.displayName = "Badge";

export { Badge };
