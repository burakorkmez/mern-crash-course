'use client';
'use strict';

var react = require('react');

function useConst(init) {
  const ref = react.useRef(null);
  if (ref.current === null) {
    ref.current = typeof init === "function" ? init() : init;
  }
  return ref.current;
}

exports.useConst = useConst;
