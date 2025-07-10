'use client';
'use strict';

var visuallyHidden_style = require('./visually-hidden.style.cjs');
var factory = require('../system/factory.cjs');

const VisuallyHidden = factory.chakra("span", {
  baseStyle: visuallyHidden_style.visuallyHiddenStyle
});
VisuallyHidden.displayName = "VisuallyHidden";
const VisuallyHiddenInput = factory.chakra("input", {
  baseStyle: visuallyHidden_style.visuallyHiddenStyle
});
VisuallyHiddenInput.displayName = "VisuallyHiddenInput";

exports.VisuallyHidden = VisuallyHidden;
exports.VisuallyHiddenInput = VisuallyHiddenInput;
