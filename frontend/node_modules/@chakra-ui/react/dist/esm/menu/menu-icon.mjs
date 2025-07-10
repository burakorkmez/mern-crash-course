'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { Children, isValidElement, cloneElement } from 'react';
import { useMenuStyles } from './menu.mjs';
import { chakra } from '../system/factory.mjs';

const MenuIcon = (props) => {
  const { className, children, ...rest } = props;
  const styles = useMenuStyles();
  const child = Children.only(children);
  const clone = isValidElement(child) ? cloneElement(child, {
    focusable: "false",
    "aria-hidden": true,
    className: cx("chakra-menu__icon", child.props.className)
  }) : null;
  const _className = cx("chakra-menu__icon-wrapper", className);
  return /* @__PURE__ */ jsx(chakra.span, { className: _className, ...rest, __css: styles.icon, children: clone });
};
MenuIcon.displayName = "MenuIcon";

export { MenuIcon };
