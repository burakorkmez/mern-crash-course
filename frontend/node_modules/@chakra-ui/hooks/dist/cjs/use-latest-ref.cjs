'use client';
'use strict';

var react = require('react');

function useLatestRef(value) {
  const ref = react.useRef(null);
  ref.current = value;
  return ref;
}

exports.useLatestRef = useLatestRef;
