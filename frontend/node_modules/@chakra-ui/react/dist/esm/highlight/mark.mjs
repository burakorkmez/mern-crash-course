'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { Box } from '../box/box.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';

const Mark = forwardRef(function Mark2(props, ref) {
  const styles = useStyleConfig("Mark", props);
  const ownProps = omitThemingProps(props);
  return /* @__PURE__ */ jsx(
    Box,
    {
      ref,
      ...ownProps,
      as: "mark",
      __css: { bg: "transparent", whiteSpace: "nowrap", ...styles }
    }
  );
});

export { Mark };
