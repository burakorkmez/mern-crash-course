'use client';
'use strict';

var theme = require('@chakra-ui/theme');
var styledSystem = require('@chakra-ui/styled-system');

function createTheme(theme$1) {
  return styledSystem.toCSSVar({
    ...theme$1,
    breakpoints: theme.theme.breakpoints
  });
}

exports.createTheme = createTheme;
