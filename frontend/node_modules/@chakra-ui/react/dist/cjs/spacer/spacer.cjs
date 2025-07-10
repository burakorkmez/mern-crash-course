'use client';
'use strict';

var factory = require('../system/factory.cjs');

const Spacer = factory.chakra("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
Spacer.displayName = "Spacer";

exports.Spacer = Spacer;
