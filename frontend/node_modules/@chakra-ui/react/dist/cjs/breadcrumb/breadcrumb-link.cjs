'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var breadcrumbContext = require('./breadcrumb-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const BreadcrumbLink = forwardRef.forwardRef(
  function BreadcrumbLink2(props, ref) {
    const { isCurrentPage, as, className, href, ...rest } = props;
    const styles = breadcrumbContext.useBreadcrumbStyles();
    const sharedProps = {
      ref,
      as,
      className: utils.cx("chakra-breadcrumb__link", className),
      ...rest
    };
    if (isCurrentPage) {
      return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.span, { "aria-current": "page", __css: styles.link, ...sharedProps });
    }
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.a, { __css: styles.link, href, ...sharedProps });
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

exports.BreadcrumbLink = BreadcrumbLink;
