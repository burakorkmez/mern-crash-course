'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { getValidChildren, cx } from '@chakra-ui/utils';
import { cloneElement } from 'react';
import { useBreadcrumbStyles } from './breadcrumb-context.mjs';
import { BreadcrumbLink } from './breadcrumb-link.mjs';
import { BreadcrumbSeparator } from './breadcrumb-separator.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const BreadcrumbItem = forwardRef(
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
    const validChildren = getValidChildren(children);
    const clones = validChildren.map((child) => {
      if (child.type === BreadcrumbLink) {
        return cloneElement(child, {
          isCurrentPage
        });
      }
      if (child.type === BreadcrumbSeparator) {
        return cloneElement(child, {
          spacing,
          children: child.props.children || separator
        });
      }
      return child;
    });
    const styles = useBreadcrumbStyles();
    const itemStyles = defineStyle({
      display: "inline-flex",
      alignItems: "center",
      ...styles.item
    });
    const _className = cx("chakra-breadcrumb__list-item", className);
    return /* @__PURE__ */ jsxs(chakra.li, { ref, className: _className, ...rest, __css: itemStyles, children: [
      clones,
      !isLastChild && /* @__PURE__ */ jsx(BreadcrumbSeparator, { spacing, children: separator })
    ] });
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export { BreadcrumbItem };
