'use client';
'use strict';

var react = require('@emotion/react');
var React = require('react');

function useTheme() {
  const theme = React.useContext(
    react.ThemeContext
  );
  if (!theme) {
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  }
  return theme;
}

exports.useTheme = useTheme;
