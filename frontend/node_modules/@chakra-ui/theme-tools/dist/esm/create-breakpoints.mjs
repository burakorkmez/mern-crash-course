import { warn } from '@chakra-ui/utils';

const createBreakpoints = (config) => {
  warn({
    condition: true,
    message: [
      `[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon`,
      `simply pass the breakpoints as an object. Remove the createBreakpoints(..) call`
    ].join("")
  });
  return { base: "0em", ...config };
};

export { createBreakpoints };
