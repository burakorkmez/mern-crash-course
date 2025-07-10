'use client';
'use strict';

var React = require('react');
var liveRegion = require('./live-region.cjs');

function useLiveRegion(options) {
  const [liveRegion$1] = React.useState(() => new liveRegion.LiveRegion(options));
  React.useEffect(
    () => () => {
      liveRegion$1.destroy();
    },
    [liveRegion$1]
  );
  return liveRegion$1;
}

exports.useLiveRegion = useLiveRegion;
