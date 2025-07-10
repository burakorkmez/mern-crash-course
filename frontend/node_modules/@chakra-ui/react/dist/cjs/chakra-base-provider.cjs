'use client';
'use strict';

var theme = require('@chakra-ui/theme');
var createProvider = require('./provider/create-provider.cjs');

const ChakraBaseProvider = createProvider.createProvider(theme.baseTheme);

exports.ChakraBaseProvider = ChakraBaseProvider;
