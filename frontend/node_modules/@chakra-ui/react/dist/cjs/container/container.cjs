'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Container = forwardRef.forwardRef(
  function Container2(props, ref) {
    const { className, centerContent, ...rest } = styledSystem.omitThemingProps(props);
    const styles = useStyleConfig.useStyleConfig("Container", props);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        className: utils.cx("chakra-container", className),
        ...rest,
        __css: {
          ...styles,
          ...centerContent && {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }
        }
      }
    );
  }
);
Container.displayName = "Container";

exports.Container = Container;
