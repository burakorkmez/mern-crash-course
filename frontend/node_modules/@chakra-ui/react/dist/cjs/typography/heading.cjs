'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Heading = forwardRef.forwardRef(
  function Heading2(props, ref) {
    const styles = useStyleConfig.useStyleConfig("Heading", props);
    const { className, ...rest } = styledSystem.omitThemingProps(props);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.h2,
      {
        ref,
        className: utils.cx("chakra-heading", props.className),
        ...rest,
        __css: styles
      }
    );
  }
);
Heading.displayName = "Heading";

exports.Heading = Heading;
