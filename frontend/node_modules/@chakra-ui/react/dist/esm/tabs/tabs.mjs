'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { createContext, cx } from '@chakra-ui/utils';
import { useMemo } from 'react';
import { useTabs, TabsDescendantsProvider, TabsProvider } from './use-tabs.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const [TabsStylesProvider, useTabsStyles] = createContext({
  name: `TabsStylesContext`,
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
});
const Tabs = forwardRef(function Tabs2(props, ref) {
  const styles = useMultiStyleConfig("Tabs", props);
  const { children, className, ...rest } = omitThemingProps(props);
  const { htmlProps, descendants, ...ctx } = useTabs(rest);
  const context = useMemo(() => ctx, [ctx]);
  const { isFitted: _, ...rootProps } = htmlProps;
  const tabsStyles = {
    position: "relative",
    ...styles.root
  };
  return /* @__PURE__ */ jsx(TabsDescendantsProvider, { value: descendants, children: /* @__PURE__ */ jsx(TabsProvider, { value: context, children: /* @__PURE__ */ jsx(TabsStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
    chakra.div,
    {
      className: cx("chakra-tabs", className),
      ref,
      ...rootProps,
      __css: tabsStyles,
      children
    }
  ) }) }) });
});
Tabs.displayName = "Tabs";

export { Tabs, useTabsStyles };
