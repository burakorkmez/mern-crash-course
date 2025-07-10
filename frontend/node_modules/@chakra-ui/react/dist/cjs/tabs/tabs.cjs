'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var useTabs = require('./use-tabs.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const [TabsStylesProvider, useTabsStyles] = utils.createContext({
  name: `TabsStylesContext`,
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
});
const Tabs = forwardRef.forwardRef(function Tabs2(props, ref) {
  const styles = useStyleConfig.useMultiStyleConfig("Tabs", props);
  const { children, className, ...rest } = styledSystem.omitThemingProps(props);
  const { htmlProps, descendants, ...ctx } = useTabs.useTabs(rest);
  const context = React.useMemo(() => ctx, [ctx]);
  const { isFitted: _, ...rootProps } = htmlProps;
  const tabsStyles = {
    position: "relative",
    ...styles.root
  };
  return /* @__PURE__ */ jsxRuntime.jsx(useTabs.TabsDescendantsProvider, { value: descendants, children: /* @__PURE__ */ jsxRuntime.jsx(useTabs.TabsProvider, { value: context, children: /* @__PURE__ */ jsxRuntime.jsx(TabsStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      className: utils.cx("chakra-tabs", className),
      ref,
      ...rootProps,
      __css: tabsStyles,
      children
    }
  ) }) }) });
});
Tabs.displayName = "Tabs";

exports.Tabs = Tabs;
exports.useTabsStyles = useTabsStyles;
