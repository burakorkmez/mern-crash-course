'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var tabs = require('./tabs.cjs');
var useTabs = require('./use-tabs.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const TabPanels = forwardRef.forwardRef(
  function TabPanels2(props, ref) {
    const panelsProps = useTabs.useTabPanels(props);
    const styles = tabs.useTabsStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...panelsProps,
        width: "100%",
        ref,
        className: utils.cx("chakra-tabs__tab-panels", props.className),
        __css: styles.tabpanels
      }
    );
  }
);
TabPanels.displayName = "TabPanels";

exports.TabPanels = TabPanels;
