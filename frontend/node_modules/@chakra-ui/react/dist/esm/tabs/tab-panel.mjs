'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useTabsStyles } from './tabs.mjs';
import { useTabPanel } from './use-tabs.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const TabPanel = forwardRef(
  function TabPanel2(props, ref) {
    const panelProps = useTabPanel({ ...props, ref });
    const styles = useTabsStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        outline: "0",
        ...panelProps,
        className: cx("chakra-tabs__tab-panel", props.className),
        __css: styles.tabpanel
      }
    );
  }
);
TabPanel.displayName = "TabPanel";

export { TabPanel };
