'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { MenuGroup } from './menu-group.mjs';
import { useMenuOptionGroup } from './use-menu.mjs';

const MenuOptionGroup = (props) => {
  const { className, title, ...rest } = props;
  const ownProps = useMenuOptionGroup(rest);
  return /* @__PURE__ */ jsx(
    MenuGroup,
    {
      title,
      className: cx("chakra-menu__option-group", className),
      ...ownProps
    }
  );
};
MenuOptionGroup.displayName = "MenuOptionGroup";

export { MenuOptionGroup };
