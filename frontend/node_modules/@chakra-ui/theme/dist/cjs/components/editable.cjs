'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');

const { definePartsStyle, defineMultiStyleConfig } = styledSystem.createMultiStyleConfigHelpers(anatomy.editableAnatomy.keys);
const baseStylePreview = styledSystem.defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
});
const baseStyleInput = styledSystem.defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
const baseStyleTextarea = styledSystem.defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
const baseStyle = definePartsStyle({
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
});
const editableTheme = defineMultiStyleConfig({
  baseStyle
});

exports.editableTheme = editableTheme;
