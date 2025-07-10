'use client';
'use strict';

var React = require('react');

function useInitialAnimationState(isChecked) {
  const [previousIsChecked, setPreviousIsChecked] = React.useState(isChecked);
  const [shouldAnimate, setShouldAnimate] = React.useState(false);
  if (isChecked !== previousIsChecked) {
    setShouldAnimate(true);
    setPreviousIsChecked(isChecked);
  }
  return shouldAnimate;
}

exports.useInitialAnimationState = useInitialAnimationState;
