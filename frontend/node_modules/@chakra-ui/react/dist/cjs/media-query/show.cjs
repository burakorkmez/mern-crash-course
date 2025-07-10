'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var mediaQuery = require('./media-query.cjs');
var visibility = require('./visibility.cjs');

function Show(props) {
  const { children, ssr } = props;
  const query = mediaQuery.useQuery(props);
  return /* @__PURE__ */ jsxRuntime.jsx(visibility.Visibility, { breakpoint: query, ssr, children });
}
Show.displayName = "Show";

exports.Show = Show;
