'use client';
import { jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useTabsStyles } from './tabs.mjs';
import { useTabList } from './use-tabs.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const TabList = forwardRef(
  function TabList2(props, ref) {
    const tablistProps = useTabList({ ...props, ref });
    const styles = useTabsStyles();
    const tablistStyles = defineStyle({
      display: "flex",
      ...styles.tablist
    });
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...tablistProps,
        className: cx("chakra-tabs__tablist", props.className),
        __css: tablistStyles
      }
    );
  }
);
TabList.displayName = "TabList";

export { TabList };
