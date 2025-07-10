'use client';
'use strict';

var context = require('@chakra-ui/utils/context');

const [CheckboxGroupProvider, useCheckboxGroupContext] = context.createContext({
  name: "CheckboxGroupContext",
  strict: false
});

exports.CheckboxGroupProvider = CheckboxGroupProvider;
exports.useCheckboxGroupContext = useCheckboxGroupContext;
