'use client';
'use strict';

var factory = require('../system/factory.cjs');

const CircularProgressLabel = factory.chakra("div", {
  baseStyle: {
    fontSize: "0.24em",
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  }
});
CircularProgressLabel.displayName = "CircularProgressLabel";

exports.CircularProgressLabel = CircularProgressLabel;
