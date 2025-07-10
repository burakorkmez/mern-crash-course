'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');
var getNextItemFromSearch = require('./get-next-item-from-search.cjs');
var useShortcut = require('./use-shortcut.cjs');
var useDescendant = require('../descendant/use-descendant.cjs');
var usePopper = require('../popper/use-popper.cjs');
var useClickable = require('../clickable/use-clickable.cjs');

const [
  MenuDescendantsProvider,
  useMenuDescendantsContext,
  useMenuDescendants,
  useMenuDescendant
] = useDescendant.createDescendantContext();
const [MenuProvider, useMenuContext] = utils.createContext({
  strict: false,
  name: "MenuContext"
});
function getOwnerDocument(node) {
  return node?.ownerDocument ?? document;
}
function isActiveElement(element) {
  const doc = getOwnerDocument(element);
  return doc.activeElement === element;
}
function useMenu(props = {}) {
  const {
    id,
    closeOnSelect = true,
    closeOnBlur = true,
    initialFocusRef,
    autoSelect = true,
    isLazy,
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenProp,
    placement = "bottom-start",
    lazyBehavior = "unmount",
    direction,
    computePositionOnMount = false,
    ...popperProps
  } = props;
  const menuRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const scrollIntoViewRef = React.useRef(true);
  const descendants = useMenuDescendants();
  const focusMenu = React.useCallback(() => {
    requestAnimationFrame(() => {
      menuRef.current?.focus({ preventScroll: false });
    });
  }, []);
  const focusFirstItem = React.useCallback(() => {
    const id2 = setTimeout(() => {
      if (initialFocusRef) {
        initialFocusRef.current?.focus();
      } else if (!descendants.count()) {
        menuRef.current?.focus({ preventScroll: false });
      } else {
        const first = descendants.firstEnabled();
        if (first)
          setFocusedIndex(first.index);
      }
    });
    timeoutIds.current.add(id2);
  }, [descendants, initialFocusRef]);
  const focusLastItem = React.useCallback(() => {
    const id2 = setTimeout(() => {
      if (!descendants.count()) {
        menuRef.current?.focus({ preventScroll: false });
      } else {
        const last = descendants.lastEnabled();
        if (last)
          setFocusedIndex(last.index);
      }
    });
    timeoutIds.current.add(id2);
  }, [descendants]);
  const onOpenInternal = React.useCallback(() => {
    onOpenProp?.();
    if (autoSelect) {
      focusFirstItem();
    } else {
      focusMenu();
    }
  }, [autoSelect, focusFirstItem, focusMenu, onOpenProp]);
  const { isOpen, onOpen, onClose, onToggle } = hooks.useDisclosure({
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenInternal
  });
  hooks.useOutsideClick({
    enabled: isOpen && closeOnBlur,
    ref: menuRef,
    handler: (event) => {
      const target = event.composedPath?.()?.[0] ?? event.target;
      if (!buttonRef.current?.contains(target)) {
        onClose();
      }
    }
  });
  const popper = usePopper.usePopper({
    ...popperProps,
    enabled: isOpen || computePositionOnMount,
    placement,
    direction
  });
  const [focusedIndex, setFocusedIndex] = React.useState(-1);
  hooks.useFocusOnHide(menuRef, {
    focusRef: buttonRef,
    visible: isOpen,
    shouldFocus: true
  });
  const animationState = hooks.useAnimationState({ isOpen, ref: menuRef });
  const [buttonId, menuId] = hooks.useIds(id, `menu-button`, `menu-list`);
  const openAndFocusMenu = React.useCallback(() => {
    onOpen();
    focusMenu();
  }, [onOpen, focusMenu]);
  const timeoutIds = React.useRef(/* @__PURE__ */ new Set([]));
  React.useEffect(() => {
    const ids = timeoutIds.current;
    return () => {
      ids.forEach((id2) => clearTimeout(id2));
      ids.clear();
    };
  }, []);
  hooks.useUpdateEffect(() => {
    if (isOpen)
      return;
    setFocusedIndex(-1);
    menuRef.current?.scrollTo(0, 0);
  }, [isOpen]);
  hooks.useUpdateEffect(() => {
    if (!isOpen)
      return;
    if (focusedIndex === -1) {
      focusMenu();
    }
  }, [focusedIndex, isOpen]);
  React.useEffect(() => {
    if (!isOpen)
      return;
    const item = descendants.item(focusedIndex);
    item?.node?.focus({ preventScroll: !scrollIntoViewRef.current });
  }, [descendants, focusedIndex, isOpen]);
  const openAndFocusFirstItem = React.useCallback(() => {
    onOpen();
    focusFirstItem();
  }, [focusFirstItem, onOpen]);
  const openAndFocusLastItem = React.useCallback(() => {
    scrollIntoViewRef.current = true;
    onOpen();
    focusLastItem();
  }, [onOpen, focusLastItem]);
  const refocus = React.useCallback(() => {
    const doc = getOwnerDocument(menuRef.current);
    const hasFocusWithin = menuRef.current?.contains(doc.activeElement);
    const shouldRefocus = isOpen && !hasFocusWithin;
    if (!shouldRefocus)
      return;
    const node = descendants.item(focusedIndex)?.node;
    node?.focus({ preventScroll: !scrollIntoViewRef.current });
  }, [isOpen, focusedIndex, descendants]);
  return {
    openAndFocusMenu,
    openAndFocusFirstItem,
    openAndFocusLastItem,
    onTransitionEnd: refocus,
    unstable__animationState: animationState,
    descendants,
    popper,
    buttonId,
    menuId,
    forceUpdate: popper.forceUpdate,
    orientation: "vertical",
    isOpen,
    onToggle,
    onOpen,
    onClose,
    menuRef,
    buttonRef,
    focusedIndex,
    closeOnSelect,
    closeOnBlur,
    autoSelect,
    setFocusedIndex,
    isLazy,
    lazyBehavior,
    initialFocusRef,
    scrollIntoViewRef
  };
}
function useMenuButton(props = {}, externalRef = null) {
  const menu = useMenuContext();
  const {
    onToggle,
    popper,
    openAndFocusFirstItem,
    openAndFocusLastItem,
    scrollIntoViewRef
  } = menu;
  const onKeyDown = React.useCallback(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Enter: openAndFocusFirstItem,
        ArrowDown: openAndFocusFirstItem,
        ArrowUp: openAndFocusLastItem
      };
      const action = keyMap[eventKey];
      if (action) {
        scrollIntoViewRef.current = true;
        event.preventDefault();
        event.stopPropagation();
        action(event);
      }
    },
    [openAndFocusFirstItem, openAndFocusLastItem, scrollIntoViewRef]
  );
  return {
    ...props,
    ref: hooks.mergeRefs(menu.buttonRef, externalRef, popper.referenceRef),
    id: menu.buttonId,
    "data-active": utils.dataAttr(menu.isOpen),
    "aria-expanded": menu.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": menu.menuId,
    onClick: utils.callAllHandlers(props.onClick, onToggle),
    onKeyDown: utils.callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function isTargetMenuItem(target) {
  return isHTMLElement(target) && !!target?.getAttribute("role")?.startsWith("menuitem");
}
function useMenuList(props = {}, ref = null) {
  const menu = useMenuContext();
  if (!menu) {
    throw new Error(
      `useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>`
    );
  }
  const {
    focusedIndex,
    setFocusedIndex,
    menuRef,
    isOpen,
    onClose,
    menuId,
    isLazy,
    lazyBehavior,
    scrollIntoViewRef,
    unstable__animationState: animated
  } = menu;
  const descendants = useMenuDescendantsContext();
  const createTypeaheadHandler = useShortcut.useShortcut({
    preventDefault: (event) => event.key !== " " && isTargetMenuItem(event.target)
  });
  const onKeyDown = React.useCallback(
    (event) => {
      if (!event.currentTarget.contains(event.target))
        return;
      const eventKey = event.key;
      const keyMap = {
        Tab: (event2) => event2.preventDefault(),
        Escape: (event2) => {
          event2.stopPropagation();
          onClose();
        },
        ArrowDown: () => {
          scrollIntoViewRef.current = true;
          const next = descendants.nextEnabled(focusedIndex) ?? descendants.firstEnabled();
          if (next)
            setFocusedIndex(next.index);
        },
        ArrowUp: () => {
          scrollIntoViewRef.current = true;
          const prev = descendants.prevEnabled(focusedIndex) ?? descendants.firstEnabled();
          if (prev)
            setFocusedIndex(prev.index);
        }
      };
      const fn = keyMap[eventKey];
      if (fn) {
        event.preventDefault();
        fn(event);
        return;
      }
      const onTypeahead = createTypeaheadHandler((character) => {
        const nextItem = getNextItemFromSearch.getNextItemFromSearch(
          descendants.values(),
          character,
          (item) => item?.node?.textContent ?? "",
          descendants.item(focusedIndex)
        );
        if (nextItem) {
          const index = descendants.indexOf(nextItem.node);
          setFocusedIndex(index);
        }
      });
      if (isTargetMenuItem(event.target)) {
        onTypeahead(event);
      }
    },
    [
      descendants,
      focusedIndex,
      createTypeaheadHandler,
      onClose,
      setFocusedIndex,
      scrollIntoViewRef
    ]
  );
  const hasBeenOpened = React.useRef(false);
  if (isOpen) {
    hasBeenOpened.current = true;
  }
  const shouldRenderChildren = utils.lazyDisclosure({
    wasSelected: hasBeenOpened.current,
    enabled: isLazy,
    mode: lazyBehavior,
    isSelected: animated.present
  });
  return {
    ...props,
    ref: hooks.mergeRefs(menuRef, ref),
    children: shouldRenderChildren ? props.children : null,
    tabIndex: -1,
    role: "menu",
    id: menuId,
    style: {
      ...props.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: utils.callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function useMenuPositioner(props = {}) {
  const { popper, isOpen } = useMenuContext();
  return popper.getPopperProps({
    ...props,
    style: {
      visibility: isOpen ? "visible" : "hidden",
      ...props.style
    }
  });
}
function useMenuItem(props = {}, externalRef = null) {
  const {
    onMouseEnter: onMouseEnterProp,
    onMouseMove: onMouseMoveProp,
    onMouseLeave: onMouseLeaveProp,
    onClick: onClickProp,
    onFocus: onFocusProp,
    isDisabled,
    isFocusable,
    closeOnSelect,
    type: typeProp,
    ...htmlProps
  } = props;
  const menu = useMenuContext();
  const {
    setFocusedIndex,
    focusedIndex,
    closeOnSelect: menuCloseOnSelect,
    onClose,
    menuId,
    scrollIntoViewRef
  } = menu;
  const ref = React.useRef(null);
  const id = `${menuId}-menuitem-${React.useId()}`;
  const { index, register } = useMenuDescendant({
    disabled: isDisabled && !isFocusable
  });
  const onMouseEnter = React.useCallback(
    (event) => {
      onMouseEnterProp?.(event);
      if (isDisabled)
        return;
      scrollIntoViewRef.current = false;
      setFocusedIndex(index);
    },
    [setFocusedIndex, index, isDisabled, onMouseEnterProp, scrollIntoViewRef]
  );
  const onMouseMove = React.useCallback(
    (event) => {
      onMouseMoveProp?.(event);
      if (ref.current && !isActiveElement(ref.current)) {
        onMouseEnter(event);
      }
    },
    [onMouseEnter, onMouseMoveProp]
  );
  const onMouseLeave = React.useCallback(
    (event) => {
      onMouseLeaveProp?.(event);
      if (isDisabled)
        return;
      setFocusedIndex(-1);
    },
    [setFocusedIndex, isDisabled, onMouseLeaveProp]
  );
  const onClick = React.useCallback(
    (event) => {
      onClickProp?.(event);
      if (!isTargetMenuItem(event.currentTarget))
        return;
      if (closeOnSelect ?? menuCloseOnSelect) {
        onClose();
      }
    },
    [onClose, onClickProp, menuCloseOnSelect, closeOnSelect]
  );
  const onFocus = React.useCallback(
    (event) => {
      onFocusProp?.(event);
      setFocusedIndex(index);
    },
    [setFocusedIndex, onFocusProp, index]
  );
  const isFocused = index === focusedIndex;
  const clickableProps = useClickable.useClickable({
    onClick,
    onFocus,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    ref: hooks.mergeRefs(register, ref, externalRef),
    isDisabled,
    isFocusable
  });
  return {
    ...htmlProps,
    ...clickableProps,
    type: typeProp ?? clickableProps.type,
    id,
    role: "menuitem",
    tabIndex: isFocused ? 0 : -1
  };
}
function useMenuOption(props = {}, ref = null) {
  const { type = "radio", isChecked, ...rest } = props;
  const ownProps = useMenuItem(rest, ref);
  return {
    ...ownProps,
    role: `menuitem${type}`,
    "aria-checked": isChecked
  };
}
function useMenuOptionGroup(props = {}) {
  const {
    children,
    type = "radio",
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
    ...htmlProps
  } = props;
  const isRadio = type === "radio";
  const fallback = isRadio ? "" : [];
  const [value, setValue] = hooks.useControllableState({
    defaultValue: defaultValue ?? fallback,
    value: valueProp,
    onChange: onChangeProp
  });
  const onChange = React.useCallback(
    (selectedValue) => {
      if (type === "radio" && typeof value === "string") {
        setValue(selectedValue);
      }
      if (type === "checkbox" && Array.isArray(value)) {
        const nextValue = value.includes(selectedValue) ? value.filter((item) => item !== selectedValue) : value.concat(selectedValue);
        setValue(nextValue);
      }
    },
    [value, setValue, type]
  );
  const validChildren = utils.getValidChildren(children);
  const clones = validChildren.map((child) => {
    if (child.type.id !== "MenuItemOption")
      return child;
    const onClick = (event) => {
      onChange(child.props.value);
      child.props.onClick?.(event);
    };
    const isChecked = type === "radio" ? child.props.value === value : value.includes(child.props.value);
    return React.cloneElement(child, {
      type,
      onClick,
      isChecked
    });
  });
  return {
    ...htmlProps,
    children: clones
  };
}
function useMenuState() {
  const { isOpen, onClose } = useMenuContext();
  return { isOpen, onClose };
}
function isHTMLElement(el) {
  if (!isElement(el))
    return false;
  const win = el.ownerDocument.defaultView ?? window;
  return el instanceof win.HTMLElement;
}
function isElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}

exports.MenuDescendantsProvider = MenuDescendantsProvider;
exports.MenuProvider = MenuProvider;
exports.useMenu = useMenu;
exports.useMenuButton = useMenuButton;
exports.useMenuContext = useMenuContext;
exports.useMenuDescendant = useMenuDescendant;
exports.useMenuDescendants = useMenuDescendants;
exports.useMenuDescendantsContext = useMenuDescendantsContext;
exports.useMenuItem = useMenuItem;
exports.useMenuList = useMenuList;
exports.useMenuOption = useMenuOption;
exports.useMenuOptionGroup = useMenuOptionGroup;
exports.useMenuPositioner = useMenuPositioner;
exports.useMenuState = useMenuState;
