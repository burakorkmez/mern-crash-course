'use client';
'use strict';

var utils = require('@chakra-ui/utils');

const [EditableStylesProvider, useEditableStyles] = utils.createContext({
  name: `EditableStylesContext`,
  errorMessage: `useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Editable />" `
});
const [EditableProvider, useEditableContext] = utils.createContext({
  name: "EditableContext",
  errorMessage: "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"
});

exports.EditableProvider = EditableProvider;
exports.EditableStylesProvider = EditableStylesProvider;
exports.useEditableContext = useEditableContext;
exports.useEditableStyles = useEditableStyles;
