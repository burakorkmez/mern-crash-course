'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var tabs = require('./tabs.cjs');
var useTabs = require('./use-tabs.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const TabPanel = forwardRef.forwardRef(
  function TabPanel2(props, ref) {
    const panelProps = useTabs.useTabPanel({ ...props, ref });
    const styles = tabs.useTabsStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        outline: "0",
        ...panelProps,
        className: utils.cx("chakra-tabs__tab-panel", props.className),
        __css: styles.tabpanel
      }
    );
  }
);
TabPanel.displayName = "TabPanel";

exports.TabPanel = TabPanel;
