'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useTabsStyles } from './tabs.mjs';
import { useTabIndicator } from './use-tabs.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const TabIndicator = forwardRef(
  function TabIndicator2(props, ref) {
    const indicatorStyle = useTabIndicator();
    const style = {
      ...props.style,
      ...indicatorStyle
    };
    const styles = useTabsStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        ...props,
        className: cx("chakra-tabs__tab-indicator", props.className),
        style,
        __css: styles.indicator
      }
    );
  }
);
TabIndicator.displayName = "TabIndicator";

export { TabIndicator };
