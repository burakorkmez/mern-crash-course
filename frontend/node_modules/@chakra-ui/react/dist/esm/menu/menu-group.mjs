'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useMenuStyles } from './menu.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const MenuGroup = forwardRef((props, ref) => {
  const { title, children, className, ...rest } = props;
  const _className = cx("chakra-menu__group__title", className);
  const styles = useMenuStyles();
  return /* @__PURE__ */ jsxs("div", { ref, className: "chakra-menu__group", role: "group", children: [
    title && /* @__PURE__ */ jsx(chakra.p, { className: _className, ...rest, __css: styles.groupTitle, children: title }),
    children
  ] });
});
MenuGroup.displayName = "MenuGroup";

export { MenuGroup };
