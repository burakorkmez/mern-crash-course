'use client';
'use strict';

var utils = require('@chakra-ui/utils');

const [PopoverProvider, usePopoverContext] = utils.createContext({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
});
const [PopoverStylesProvider, usePopoverStyles] = utils.createContext({
  name: `PopoverStylesContext`,
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
});

exports.PopoverProvider = PopoverProvider;
exports.PopoverStylesProvider = PopoverStylesProvider;
exports.usePopoverContext = usePopoverContext;
exports.usePopoverStyles = usePopoverStyles;
