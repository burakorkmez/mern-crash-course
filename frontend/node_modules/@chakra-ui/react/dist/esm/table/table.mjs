'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { createContext, cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const [TableStylesProvider, useTableStyles] = createContext({
  name: `TableStylesContext`,
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
});
const Table = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Table", props);
  const { className, layout, ...tableProps } = omitThemingProps(props);
  return /* @__PURE__ */ jsx(TableStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
    chakra.table,
    {
      ref,
      __css: { tableLayout: layout, ...styles.table },
      className: cx("chakra-table", className),
      ...tableProps
    }
  ) });
});
Table.displayName = "Table";

export { Table, useTableStyles };
