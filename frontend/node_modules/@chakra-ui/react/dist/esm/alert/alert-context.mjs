'use client';
import { createContext } from '@chakra-ui/utils';
import { InfoIcon, WarningIcon, CheckIcon } from './alert-icons.mjs';
import { Spinner } from '../spinner/spinner.mjs';

const [AlertProvider, useAlertContext] = createContext({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
});
const [AlertStylesProvider, useAlertStyles] = createContext({
  name: `AlertStylesContext`,
  hookName: `useAlertStyles`,
  providerName: "<Alert />"
});
const STATUSES = {
  info: { icon: InfoIcon, colorScheme: "blue" },
  warning: { icon: WarningIcon, colorScheme: "orange" },
  success: { icon: CheckIcon, colorScheme: "green" },
  error: { icon: WarningIcon, colorScheme: "red" },
  loading: { icon: Spinner, colorScheme: "blue" }
};
function getStatusColorScheme(status) {
  return STATUSES[status].colorScheme;
}
function getStatusIcon(status) {
  return STATUSES[status].icon;
}

export { AlertProvider, AlertStylesProvider, getStatusColorScheme, getStatusIcon, useAlertContext, useAlertStyles };
