'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useTabsStyles } from './tabs.mjs';
import { useTabPanels } from './use-tabs.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const TabPanels = forwardRef(
  function TabPanels2(props, ref) {
    const panelsProps = useTabPanels(props);
    const styles = useTabsStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...panelsProps,
        width: "100%",
        ref,
        className: cx("chakra-tabs__tab-panels", props.className),
        __css: styles.tabpanels
      }
    );
  }
);
TabPanels.displayName = "TabPanels";

export { TabPanels };
