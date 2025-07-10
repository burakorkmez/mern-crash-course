'use client';
import { jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useTabsStyles } from './tabs.mjs';
import { useTab } from './use-tabs.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const Tab = forwardRef(function Tab2(props, ref) {
  const styles = useTabsStyles();
  const tabProps = useTab({ ...props, ref });
  const tabStyles = defineStyle({
    outline: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...styles.tab
  });
  return /* @__PURE__ */ jsx(
    chakra.button,
    {
      ...tabProps,
      className: cx("chakra-tabs__tab", props.className),
      __css: tabStyles
    }
  );
});
Tab.displayName = "Tab";

export { Tab };
