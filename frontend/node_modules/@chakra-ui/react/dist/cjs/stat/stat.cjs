'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const [StatStylesProvider, useStatStyles] = utils.createContext({
  name: `StatStylesContext`,
  errorMessage: `useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `
});
const Stat = forwardRef.forwardRef(function Stat2(props, ref) {
  const styles = useStyleConfig.useMultiStyleConfig("Stat", props);
  const statStyles = {
    position: "relative",
    flex: "1 1 0%",
    ...styles.container
  };
  const { className, children, ...rest } = styledSystem.omitThemingProps(props);
  return /* @__PURE__ */ jsxRuntime.jsx(StatStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ref,
      ...rest,
      className: utils.cx("chakra-stat", className),
      __css: statStyles,
      children: /* @__PURE__ */ jsxRuntime.jsx("dl", { children })
    }
  ) });
});
Stat.displayName = "Stat";

exports.Stat = Stat;
exports.useStatStyles = useStatStyles;
