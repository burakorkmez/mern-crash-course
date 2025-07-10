'use strict';

var utils = require('@chakra-ui/utils');

const createBreakpoints = (config) => {
  utils.warn({
    condition: true,
    message: [
      `[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon`,
      `simply pass the breakpoints as an object. Remove the createBreakpoints(..) call`
    ].join("")
  });
  return { base: "0em", ...config };
};

exports.createBreakpoints = createBreakpoints;
