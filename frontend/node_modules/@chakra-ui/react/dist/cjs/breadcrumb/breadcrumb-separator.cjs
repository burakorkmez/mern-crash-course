'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var breadcrumbContext = require('./breadcrumb-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const BreadcrumbSeparator = forwardRef.forwardRef(
  function BreadcrumbSeparator2(props, ref) {
    const { spacing, ...rest } = props;
    const styles = breadcrumbContext.useBreadcrumbStyles();
    const separatorStyles = styledSystem.defineStyle({
      mx: spacing,
      ...styles.separator
    });
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.span,
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

exports.BreadcrumbSeparator = BreadcrumbSeparator;
