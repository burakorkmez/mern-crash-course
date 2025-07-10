'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const [TableStylesProvider, useTableStyles] = utils.createContext({
  name: `TableStylesContext`,
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
});
const Table = forwardRef.forwardRef((props, ref) => {
  const styles = useStyleConfig.useMultiStyleConfig("Table", props);
  const { className, layout, ...tableProps } = styledSystem.omitThemingProps(props);
  return /* @__PURE__ */ jsxRuntime.jsx(TableStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.table,
    {
      ref,
      __css: { tableLayout: layout, ...styles.table },
      className: utils.cx("chakra-table", className),
      ...tableProps
    }
  ) });
});
Table.displayName = "Table";

exports.Table = Table;
exports.useTableStyles = useTableStyles;
