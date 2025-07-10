'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useBreadcrumbStyles } from './breadcrumb-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const BreadcrumbLink = forwardRef(
  function BreadcrumbLink2(props, ref) {
    const { isCurrentPage, as, className, href, ...rest } = props;
    const styles = useBreadcrumbStyles();
    const sharedProps = {
      ref,
      as,
      className: cx("chakra-breadcrumb__link", className),
      ...rest
    };
    if (isCurrentPage) {
      return /* @__PURE__ */ jsx(chakra.span, { "aria-current": "page", __css: styles.link, ...sharedProps });
    }
    return /* @__PURE__ */ jsx(chakra.a, { __css: styles.link, href, ...sharedProps });
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export { BreadcrumbLink };
