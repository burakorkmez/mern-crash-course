'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var mediaQuery = require('./media-query.cjs');
var visibility = require('./visibility.cjs');

function Hide(props) {
  const { children, ssr } = props;
  const query = mediaQuery.useQuery(props);
  return /* @__PURE__ */ jsxRuntime.jsx(visibility.Visibility, { breakpoint: query, hide: true, ssr, children });
}
Hide.displayName = "Hide";

exports.Hide = Hide;
