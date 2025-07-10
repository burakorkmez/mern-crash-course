'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var tabs = require('./tabs.cjs');
var useTabs = require('./use-tabs.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const TabIndicator = forwardRef.forwardRef(
  function TabIndicator2(props, ref) {
    const indicatorStyle = useTabs.useTabIndicator();
    const style = {
      ...props.style,
      ...indicatorStyle
    };
    const styles = tabs.useTabsStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        ...props,
        className: utils.cx("chakra-tabs__tab-indicator", props.className),
        style,
        __css: styles.indicator
      }
    );
  }
);
TabIndicator.displayName = "TabIndicator";

exports.TabIndicator = TabIndicator;
