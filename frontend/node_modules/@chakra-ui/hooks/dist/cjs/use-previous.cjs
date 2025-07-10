'use client';
'use strict';

var react = require('react');

function usePrevious(value) {
  const ref = react.useRef(void 0);
  react.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

exports.usePrevious = usePrevious;
