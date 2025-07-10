'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var alertIcons = require('./alert-icons.cjs');
var spinner = require('../spinner/spinner.cjs');

const [AlertProvider, useAlertContext] = utils.createContext({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
});
const [AlertStylesProvider, useAlertStyles] = utils.createContext({
  name: `AlertStylesContext`,
  hookName: `useAlertStyles`,
  providerName: "<Alert />"
});
const STATUSES = {
  info: { icon: alertIcons.InfoIcon, colorScheme: "blue" },
  warning: { icon: alertIcons.WarningIcon, colorScheme: "orange" },
  success: { icon: alertIcons.CheckIcon, colorScheme: "green" },
  error: { icon: alertIcons.WarningIcon, colorScheme: "red" },
  loading: { icon: spinner.Spinner, colorScheme: "blue" }
};
function getStatusColorScheme(status) {
  return STATUSES[status].colorScheme;
}
function getStatusIcon(status) {
  return STATUSES[status].icon;
}

exports.AlertProvider = AlertProvider;
exports.AlertStylesProvider = AlertStylesProvider;
exports.getStatusColorScheme = getStatusColorScheme;
exports.getStatusIcon = getStatusIcon;
exports.useAlertContext = useAlertContext;
exports.useAlertStyles = useAlertStyles;
