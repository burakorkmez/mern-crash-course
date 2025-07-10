'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var icon = require('../icon/icon.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const [ListStylesProvider, useListStyles] = utils.createContext({
  name: `ListStylesContext`,
  errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `
});
const List = forwardRef.forwardRef(function List2(props, ref) {
  const styles = useStyleConfig.useMultiStyleConfig("List", props);
  const {
    children,
    styleType = "none",
    stylePosition,
    spacing,
    ...rest
  } = styledSystem.omitThemingProps(props);
  const validChildren = utils.getValidChildren(children);
  const selector = "& > *:not(style) ~ *:not(style)";
  const spacingStyle = spacing ? { [selector]: { mt: spacing } } : {};
  return /* @__PURE__ */ jsxRuntime.jsx(ListStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.ul,
    {
      ref,
      listStyleType: styleType,
      listStylePosition: stylePosition,
      role: "list",
      __css: { ...styles.container, ...spacingStyle },
      ...rest,
      children: validChildren
    }
  ) });
});
List.displayName = "List";
const OrderedList = forwardRef.forwardRef((props, ref) => {
  const { as, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(List, { ref, as: "ol", styleType: "decimal", marginStart: "1em", ...rest });
});
OrderedList.displayName = "OrderedList";
const UnorderedList = forwardRef.forwardRef(
  function UnorderedList2(props, ref) {
    const { as, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(List, { ref, as: "ul", styleType: "initial", marginStart: "1em", ...rest });
  }
);
UnorderedList.displayName = "UnorderedList";
const ListItem = forwardRef.forwardRef(
  function ListItem2(props, ref) {
    const styles = useListStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.li, { ref, ...props, __css: styles.item });
  }
);
ListItem.displayName = "ListItem";
const ListIcon = forwardRef.forwardRef(
  function ListIcon2(props, ref) {
    const styles = useListStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(icon.Icon, { ref, role: "presentation", ...props, __css: styles.icon });
  }
);
ListIcon.displayName = "ListIcon";

exports.List = List;
exports.ListIcon = ListIcon;
exports.ListItem = ListItem;
exports.OrderedList = OrderedList;
exports.UnorderedList = UnorderedList;
exports.useListStyles = useListStyles;
