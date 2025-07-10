'use client';
'use strict';

var utils = require('@chakra-ui/utils');

const [BreadcrumbStylesProvider, useBreadcrumbStyles] = utils.createContext({
  name: `BreadcrumbStylesContext`,
  errorMessage: `useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `
});

exports.BreadcrumbStylesProvider = BreadcrumbStylesProvider;
exports.useBreadcrumbStyles = useBreadcrumbStyles;
