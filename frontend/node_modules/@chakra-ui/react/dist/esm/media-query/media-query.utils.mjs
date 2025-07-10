'use client';
import { breakpoints } from '@chakra-ui/utils';

function getClosestValue(values, breakpoint, breakpoints$1 = breakpoints) {
  let index = Object.keys(values).indexOf(breakpoint);
  if (index !== -1) {
    return values[breakpoint];
  }
  let stopIndex = breakpoints$1.indexOf(breakpoint);
  while (stopIndex >= 0) {
    const key = breakpoints$1[stopIndex];
    if (values.hasOwnProperty(key)) {
      index = stopIndex;
      break;
    }
    stopIndex -= 1;
  }
  if (index !== -1) {
    const key = breakpoints$1[index];
    return values[key];
  }
  return void 0;
}

export { getClosestValue };
