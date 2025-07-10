'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var tabs = require('./tabs.cjs');
var useTabs = require('./use-tabs.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Tab = forwardRef.forwardRef(function Tab2(props, ref) {
  const styles = tabs.useTabsStyles();
  const tabProps = useTabs.useTab({ ...props, ref });
  const tabStyles = styledSystem.defineStyle({
    outline: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...styles.tab
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.button,
    {
      ...tabProps,
      className: utils.cx("chakra-tabs__tab", props.className),
      __css: tabStyles
    }
  );
});
Tab.displayName = "Tab";

exports.Tab = Tab;
