'use client';
'use strict';

var utils = require('@chakra-ui/utils');

const [ButtonGroupProvider, useButtonGroup] = utils.createContext({
  strict: false,
  name: "ButtonGroupContext"
});

exports.ButtonGroupProvider = ButtonGroupProvider;
exports.useButtonGroup = useButtonGroup;
