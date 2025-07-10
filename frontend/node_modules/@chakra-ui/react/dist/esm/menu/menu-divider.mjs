'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useMenuStyles } from './menu.mjs';
import { chakra } from '../system/factory.mjs';

const MenuDivider = (props) => {
  const { className, ...rest } = props;
  const styles = useMenuStyles();
  return /* @__PURE__ */ jsx(
    chakra.hr,
    {
      "aria-orientation": "horizontal",
      className: cx("chakra-menu__divider", className),
      ...rest,
      __css: styles.divider
    }
  );
};
MenuDivider.displayName = "MenuDivider";

export { MenuDivider };
