'use strict';

var tab = require('./tab.cjs');
var tabIndicator = require('./tab-indicator.cjs');
var tabList = require('./tab-list.cjs');
var tabPanel = require('./tab-panel.cjs');
var tabPanels = require('./tab-panels.cjs');
var tabs = require('./tabs.cjs');
var useTabs = require('./use-tabs.cjs');



exports.Tab = tab.Tab;
exports.TabIndicator = tabIndicator.TabIndicator;
exports.TabList = tabList.TabList;
exports.TabPanel = tabPanel.TabPanel;
exports.TabPanels = tabPanels.TabPanels;
exports.Tabs = tabs.Tabs;
exports.useTabsStyles = tabs.useTabsStyles;
exports.TabsDescendantsProvider = useTabs.TabsDescendantsProvider;
exports.TabsProvider = useTabs.TabsProvider;
exports.useTab = useTabs.useTab;
exports.useTabIndicator = useTabs.useTabIndicator;
exports.useTabList = useTabs.useTabList;
exports.useTabPanel = useTabs.useTabPanel;
exports.useTabPanels = useTabs.useTabPanels;
exports.useTabs = useTabs.useTabs;
exports.useTabsContext = useTabs.useTabsContext;
exports.useTabsDescendant = useTabs.useTabsDescendant;
exports.useTabsDescendants = useTabs.useTabsDescendants;
exports.useTabsDescendantsContext = useTabs.useTabsDescendantsContext;
