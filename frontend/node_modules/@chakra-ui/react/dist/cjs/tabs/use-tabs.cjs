'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');
var useDescendant = require('../descendant/use-descendant.cjs');
var useClickable = require('../clickable/use-clickable.cjs');

const [
  TabsDescendantsProvider,
  useTabsDescendantsContext,
  useTabsDescendants,
  useTabsDescendant
] = useDescendant.createDescendantContext();
function useTabs(props) {
  const {
    defaultIndex,
    onChange,
    index,
    isManual,
    isLazy,
    lazyBehavior = "unmount",
    orientation = "horizontal",
    direction = "ltr",
    ...htmlProps
  } = props;
  const [focusedIndex, setFocusedIndex] = React.useState(defaultIndex ?? 0);
  const [selectedIndex, setSelectedIndex] = hooks.useControllableState({
    defaultValue: defaultIndex ?? 0,
    value: index,
    onChange
  });
  React.useEffect(() => {
    if (index != null) {
      setFocusedIndex(index);
    }
  }, [index]);
  const descendants = useTabsDescendants();
  const uuid = React.useId();
  const uid = props.id ?? uuid;
  const id = `tabs-${uid}`;
  return {
    id,
    selectedIndex,
    focusedIndex,
    setSelectedIndex,
    setFocusedIndex,
    isManual,
    isLazy,
    lazyBehavior,
    orientation,
    descendants,
    direction,
    htmlProps
  };
}
const [TabsProvider, useTabsContext] = utils.createContext({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function useTabList(props) {
  const { focusedIndex, orientation, direction } = useTabsContext();
  const descendants = useTabsDescendantsContext();
  const onKeyDown = React.useCallback(
    (event) => {
      const nextTab = () => {
        const next = descendants.nextEnabled(focusedIndex);
        if (next)
          next.node?.focus();
      };
      const prevTab = () => {
        const prev = descendants.prevEnabled(focusedIndex);
        if (prev)
          prev.node?.focus();
      };
      const firstTab = () => {
        const first = descendants.firstEnabled();
        if (first)
          first.node?.focus();
      };
      const lastTab = () => {
        const last = descendants.lastEnabled();
        if (last)
          last.node?.focus();
      };
      const isHorizontal = orientation === "horizontal";
      const isVertical = orientation === "vertical";
      const eventKey = event.key;
      const ArrowStart = direction === "ltr" ? "ArrowLeft" : "ArrowRight";
      const ArrowEnd = direction === "ltr" ? "ArrowRight" : "ArrowLeft";
      const keyMap = {
        [ArrowStart]: () => isHorizontal && prevTab(),
        [ArrowEnd]: () => isHorizontal && nextTab(),
        ArrowDown: () => isVertical && nextTab(),
        ArrowUp: () => isVertical && prevTab(),
        Home: firstTab,
        End: lastTab
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [descendants, focusedIndex, orientation, direction]
  );
  return {
    ...props,
    role: "tablist",
    "aria-orientation": orientation,
    onKeyDown: utils.callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function useTab(props) {
  const { isDisabled = false, isFocusable = false, ...htmlProps } = props;
  const { setSelectedIndex, isManual, id, setFocusedIndex, selectedIndex } = useTabsContext();
  const { index, register } = useTabsDescendant({
    disabled: isDisabled && !isFocusable
  });
  const isSelected = index === selectedIndex;
  const onClick = () => {
    setSelectedIndex(index);
  };
  const onFocus = () => {
    setFocusedIndex(index);
    const isDisabledButFocusable = isDisabled && isFocusable;
    const shouldSelect = !isManual && !isDisabledButFocusable;
    if (shouldSelect) {
      setSelectedIndex(index);
    }
  };
  const clickableProps = useClickable.useClickable({
    ...htmlProps,
    ref: hooks.mergeRefs(register, props.ref),
    isDisabled,
    isFocusable,
    onClick: utils.callAllHandlers(props.onClick, onClick)
  });
  const type = "button";
  return {
    ...clickableProps,
    id: makeTabId(id, index),
    role: "tab",
    tabIndex: isSelected ? 0 : -1,
    type,
    "aria-selected": isSelected,
    "aria-controls": makeTabPanelId(id, index),
    onFocus: isDisabled ? void 0 : utils.callAllHandlers(props.onFocus, onFocus)
  };
}
const [TabPanelProvider, useTabPanelContext] = utils.createContext({});
function useTabPanels(props) {
  const context = useTabsContext();
  const { id, selectedIndex } = context;
  const validChildren = utils.getValidChildren(props.children);
  const children = validChildren.map(
    (child, index) => React.createElement(
      TabPanelProvider,
      {
        key: child.key ?? index,
        value: {
          isSelected: index === selectedIndex,
          id: makeTabPanelId(id, index),
          tabId: makeTabId(id, index),
          selectedIndex
        }
      },
      child
    )
  );
  return { ...props, children };
}
function useTabPanel(props) {
  const { children, ...htmlProps } = props;
  const { isLazy, lazyBehavior } = useTabsContext();
  const { isSelected, id, tabId } = useTabPanelContext();
  const hasBeenSelected = React.useRef(false);
  if (isSelected) {
    hasBeenSelected.current = true;
  }
  const shouldRenderChildren = utils.lazyDisclosure({
    wasSelected: hasBeenSelected.current,
    isSelected,
    enabled: isLazy,
    mode: lazyBehavior
  });
  return {
    // Puts the tabpanel in the page `Tab` sequence.
    tabIndex: 0,
    ...htmlProps,
    children: shouldRenderChildren ? children : null,
    role: "tabpanel",
    "aria-labelledby": tabId,
    hidden: !isSelected,
    id
  };
}
function useTabIndicator() {
  const context = useTabsContext();
  const descendants = useTabsDescendantsContext();
  const { selectedIndex, orientation } = context;
  const isHorizontal = orientation === "horizontal";
  const isVertical = orientation === "vertical";
  const [rect, setRect] = React.useState(() => {
    if (isHorizontal)
      return { left: 0, width: 0 };
    if (isVertical)
      return { top: 0, height: 0 };
    return void 0;
  });
  const [hasMeasured, setHasMeasured] = React.useState(false);
  hooks.useSafeLayoutEffect(() => {
    if (selectedIndex == null)
      return;
    const tab = descendants.item(selectedIndex);
    if (tab == null)
      return;
    if (isHorizontal) {
      setRect({ left: tab.node.offsetLeft, width: tab.node.offsetWidth });
    }
    if (isVertical) {
      setRect({ top: tab.node.offsetTop, height: tab.node.offsetHeight });
    }
    const id = requestAnimationFrame(() => {
      setHasMeasured(true);
    });
    return () => {
      if (id) {
        cancelAnimationFrame(id);
      }
    };
  }, [selectedIndex, isHorizontal, isVertical, descendants]);
  return {
    position: "absolute",
    transitionProperty: "left, right, top, bottom, height, width",
    transitionDuration: hasMeasured ? "200ms" : "0ms",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    ...rect
  };
}
function makeTabId(id, index) {
  return `${id}--tab-${index}`;
}
function makeTabPanelId(id, index) {
  return `${id}--tabpanel-${index}`;
}

exports.TabsDescendantsProvider = TabsDescendantsProvider;
exports.TabsProvider = TabsProvider;
exports.useTab = useTab;
exports.useTabIndicator = useTabIndicator;
exports.useTabList = useTabList;
exports.useTabPanel = useTabPanel;
exports.useTabPanels = useTabPanels;
exports.useTabs = useTabs;
exports.useTabsContext = useTabsContext;
exports.useTabsDescendant = useTabsDescendant;
exports.useTabsDescendants = useTabsDescendants;
exports.useTabsDescendantsContext = useTabsDescendantsContext;
