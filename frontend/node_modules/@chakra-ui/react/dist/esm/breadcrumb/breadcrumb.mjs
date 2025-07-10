'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { getValidChildren, cx } from '@chakra-ui/utils';
import { cloneElement } from 'react';
import { BreadcrumbStylesProvider } from './breadcrumb-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Breadcrumb = forwardRef(
  function Breadcrumb2(props, ref) {
    const styles = useMultiStyleConfig("Breadcrumb", props);
    const ownProps = omitThemingProps(props);
    const {
      children,
      spacing = "0.5rem",
      separator = "/",
      className,
      listProps,
      ...rest
    } = ownProps;
    const validChildren = getValidChildren(children);
    const count = validChildren.length;
    const clones = validChildren.map(
      (child, index) => cloneElement(child, {
        separator,
        spacing,
        isLastChild: count === index + 1
      })
    );
    const _className = cx("chakra-breadcrumb", className);
    return /* @__PURE__ */ jsx(
      chakra.nav,
      {
        ref,
        "aria-label": "breadcrumb",
        className: _className,
        __css: styles.container,
        ...rest,
        children: /* @__PURE__ */ jsx(BreadcrumbStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
          chakra.ol,
          {
            className: "chakra-breadcrumb__list",
            ...listProps,
            __css: {
              display: "flex",
              alignItems: "center",
              ...styles.list
            },
            children: clones
          }
        ) })
      }
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb };
