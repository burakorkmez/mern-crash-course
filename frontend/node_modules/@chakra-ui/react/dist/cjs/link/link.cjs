'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Link = forwardRef.forwardRef(function Link2(props, ref) {
  const styles = useStyleConfig.useStyleConfig("Link", props);
  const { className, isExternal, ...rest } = styledSystem.omitThemingProps(props);
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.a,
    {
      target: isExternal ? "_blank" : void 0,
      rel: isExternal ? "noopener" : void 0,
      ref,
      className: utils.cx("chakra-link", className),
      ...rest,
      __css: styles
    }
  );
});
Link.displayName = "Link";

exports.Link = Link;
