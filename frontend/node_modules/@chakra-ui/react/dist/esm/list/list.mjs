'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { createContext, getValidChildren } from '@chakra-ui/utils';
import { Icon } from '../icon/icon.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const [ListStylesProvider, useListStyles] = createContext({
  name: `ListStylesContext`,
  errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `
});
const List = forwardRef(function List2(props, ref) {
  const styles = useMultiStyleConfig("List", props);
  const {
    children,
    styleType = "none",
    stylePosition,
    spacing,
    ...rest
  } = omitThemingProps(props);
  const validChildren = getValidChildren(children);
  const selector = "& > *:not(style) ~ *:not(style)";
  const spacingStyle = spacing ? { [selector]: { mt: spacing } } : {};
  return /* @__PURE__ */ jsx(ListStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
    chakra.ul,
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
const OrderedList = forwardRef((props, ref) => {
  const { as, ...rest } = props;
  return /* @__PURE__ */ jsx(List, { ref, as: "ol", styleType: "decimal", marginStart: "1em", ...rest });
});
OrderedList.displayName = "OrderedList";
const UnorderedList = forwardRef(
  function UnorderedList2(props, ref) {
    const { as, ...rest } = props;
    return /* @__PURE__ */ jsx(List, { ref, as: "ul", styleType: "initial", marginStart: "1em", ...rest });
  }
);
UnorderedList.displayName = "UnorderedList";
const ListItem = forwardRef(
  function ListItem2(props, ref) {
    const styles = useListStyles();
    return /* @__PURE__ */ jsx(chakra.li, { ref, ...props, __css: styles.item });
  }
);
ListItem.displayName = "ListItem";
const ListIcon = forwardRef(
  function ListIcon2(props, ref) {
    const styles = useListStyles();
    return /* @__PURE__ */ jsx(Icon, { ref, role: "presentation", ...props, __css: styles.icon });
  }
);
ListIcon.displayName = "ListIcon";

export { List, ListIcon, ListItem, OrderedList, UnorderedList, useListStyles };
