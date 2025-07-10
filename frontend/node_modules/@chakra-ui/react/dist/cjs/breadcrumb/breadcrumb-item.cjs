'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var breadcrumbContext = require('./breadcrumb-context.cjs');
var breadcrumbLink = require('./breadcrumb-link.cjs');
var breadcrumbSeparator = require('./breadcrumb-separator.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const BreadcrumbItem = forwardRef.forwardRef(
  function BreadcrumbItem2(props, ref) {
    const {
      isCurrentPage,
      separator,
      isLastChild,
      spacing,
      children,
      className,
      ...rest
    } = props;
    const validChildren = utils.getValidChildren(children);
    const clones = validChildren.map((child) => {
      if (child.type === breadcrumbLink.BreadcrumbLink) {
        return React.cloneElement(child, {
          isCurrentPage
        });
      }
      if (child.type === breadcrumbSeparator.BreadcrumbSeparator) {
        return React.cloneElement(child, {
          spacing,
          children: child.props.children || separator
        });
      }
      return child;
    });
    const styles = breadcrumbContext.useBreadcrumbStyles();
    const itemStyles = styledSystem.defineStyle({
      display: "inline-flex",
      alignItems: "center",
      ...styles.item
    });
    const _className = utils.cx("chakra-breadcrumb__list-item", className);
    return /* @__PURE__ */ jsxRuntime.jsxs(factory.chakra.li, { ref, className: _className, ...rest, __css: itemStyles, children: [
      clones,
      !isLastChild && /* @__PURE__ */ jsxRuntime.jsx(breadcrumbSeparator.BreadcrumbSeparator, { spacing, children: separator })
    ] });
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

exports.BreadcrumbItem = BreadcrumbItem;
