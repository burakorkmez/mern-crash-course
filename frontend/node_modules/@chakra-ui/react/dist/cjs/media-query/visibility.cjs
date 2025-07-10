'use client';
'use strict';

var useMediaQuery = require('./use-media-query.cjs');

function Visibility(props) {
  const { breakpoint, hide, children, ssr } = props;
  const [show] = useMediaQuery.useMediaQuery(breakpoint, { ssr });
  const isVisible = hide ? !show : show;
  const rendered = isVisible ? children : null;
  return rendered;
}

exports.Visibility = Visibility;
