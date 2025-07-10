'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var breadcrumbContext = require('./breadcrumb-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Breadcrumb = forwardRef.forwardRef(
  function Breadcrumb2(props, ref) {
    const styles = useStyleConfig.useMultiStyleConfig("Breadcrumb", props);
    const ownProps = styledSystem.omitThemingProps(props);
    const {
      children,
      spacing = "0.5rem",
      separator = "/",
      className,
      listProps,
      ...rest
    } = ownProps;
    const validChildren = utils.getValidChildren(children);
    const count = validChildren.length;
    const clones = validChildren.map(
      (child, index) => React.cloneElement(child, {
        separator,
        spacing,
        isLastChild: count === index + 1
      })
    );
    const _className = utils.cx("chakra-breadcrumb", className);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.nav,
      {
        ref,
        "aria-label": "breadcrumb",
        className: _className,
        __css: styles.container,
        ...rest,
        children: /* @__PURE__ */ jsxRuntime.jsx(breadcrumbContext.BreadcrumbStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
          factory.chakra.ol,
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

exports.Breadcrumb = Breadcrumb;
