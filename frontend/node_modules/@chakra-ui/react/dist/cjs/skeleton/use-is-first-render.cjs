'use client';
'use strict';

var React = require('react');

function useIsFirstRender() {
  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
}

exports.useIsFirstRender = useIsFirstRender;
