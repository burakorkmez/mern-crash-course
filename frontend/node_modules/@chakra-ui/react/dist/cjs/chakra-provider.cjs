'use client';
'use strict';

var theme = require('@chakra-ui/theme');
var createProvider = require('./provider/create-provider.cjs');

const ChakraProvider = createProvider.createProvider(theme.theme);

exports.ChakraProvider = ChakraProvider;
