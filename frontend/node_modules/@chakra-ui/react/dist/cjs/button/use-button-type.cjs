'use client';
'use strict';

var React = require('react');

function useButtonType(value) {
  const [isButton, setIsButton] = React.useState(!value);
  const refCallback = React.useCallback((node) => {
    if (!node)
      return;
    setIsButton(node.tagName === "BUTTON");
  }, []);
  const type = isButton ? "button" : void 0;
  return { ref: refCallback, type };
}

exports.useButtonType = useButtonType;
