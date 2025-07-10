'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var tabs = require('./tabs.cjs');
var useTabs = require('./use-tabs.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const TabList = forwardRef.forwardRef(
  function TabList2(props, ref) {
    const tablistProps = useTabs.useTabList({ ...props, ref });
    const styles = tabs.useTabsStyles();
    const tablistStyles = styledSystem.defineStyle({
      display: "flex",
      ...styles.tablist
    });
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...tablistProps,
        className: utils.cx("chakra-tabs__tablist", props.className),
        __css: tablistStyles
      }
    );
  }
);
TabList.displayName = "TabList";

exports.TabList = TabList;
