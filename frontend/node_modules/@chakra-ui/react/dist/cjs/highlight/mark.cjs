'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var box = require('../box/box.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');

const Mark = forwardRef.forwardRef(function Mark2(props, ref) {
  const styles = useStyleConfig.useStyleConfig("Mark", props);
  const ownProps = styledSystem.omitThemingProps(props);
  return /* @__PURE__ */ jsxRuntime.jsx(
    box.Box,
    {
      ref,
      ...ownProps,
      as: "mark",
      __css: { bg: "transparent", whiteSpace: "nowrap", ...styles }
    }
  );
});

exports.Mark = Mark;
