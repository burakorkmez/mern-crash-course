'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { createContext, runIfFn } from '@chakra-ui/utils';
import { useMemo } from 'react';
import { useMenu, MenuDescendantsProvider, MenuProvider } from './use-menu.mjs';
import { useTheme } from '../system/use-theme.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';

const [MenuStylesProvider, useMenuStyles] = createContext({
  name: `MenuStylesContext`,
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
});
const Menu = (props) => {
  const { children } = props;
  const styles = useMultiStyleConfig("Menu", props);
  const ownProps = omitThemingProps(props);
  const { direction } = useTheme();
  const { descendants, ...ctx } = useMenu({ ...ownProps, direction });
  const context = useMemo(() => ctx, [ctx]);
  const { isOpen, onClose, forceUpdate } = context;
  return /* @__PURE__ */ jsx(MenuDescendantsProvider, { value: descendants, children: /* @__PURE__ */ jsx(MenuProvider, { value: context, children: /* @__PURE__ */ jsx(MenuStylesProvider, { value: styles, children: runIfFn(children, { isOpen, onClose, forceUpdate }) }) }) });
};
Menu.displayName = "Menu";

export { Menu, useMenuStyles };
