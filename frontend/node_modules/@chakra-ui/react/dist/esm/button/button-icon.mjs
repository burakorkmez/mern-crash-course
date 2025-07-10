'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { isValidElement, cloneElement } from 'react';
import { chakra } from '../system/factory.mjs';

function ButtonIcon(props) {
  const { children, className, ...rest } = props;
  const _children = isValidElement(children) ? cloneElement(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  const _className = cx("chakra-button__icon", className);
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...rest,
      className: _className,
      children: _children
    }
  );
}
ButtonIcon.displayName = "ButtonIcon";

export { ButtonIcon };
