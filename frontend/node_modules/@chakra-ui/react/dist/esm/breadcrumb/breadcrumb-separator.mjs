'use client';
import { jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { useBreadcrumbStyles } from './breadcrumb-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const BreadcrumbSeparator = forwardRef(
  function BreadcrumbSeparator2(props, ref) {
    const { spacing, ...rest } = props;
    const styles = useBreadcrumbStyles();
    const separatorStyles = defineStyle({
      mx: spacing,
      ...styles.separator
    });
    return /* @__PURE__ */ jsx(
      chakra.span,
      {
        ref,
        role: "presentation",
        ...rest,
        __css: separatorStyles
      }
    );
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export { BreadcrumbSeparator };
