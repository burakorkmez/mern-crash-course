'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');
var accordionContext = require('./accordion-context.cjs');

function useAccordion(props) {
  const {
    onChange,
    defaultIndex,
    index: indexProp,
    allowMultiple,
    allowToggle,
    ...htmlProps
  } = props;
  allowMultipleWarning(props);
  allowMultipleAndAllowToggleWarning(props);
  const descendants = accordionContext.useAccordionDescendants();
  const [focusedIndex, setFocusedIndex] = React.useState(-1);
  React.useEffect(() => {
    return () => {
      setFocusedIndex(-1);
    };
  }, []);
  const [index, setIndex] = hooks.useControllableState({
    value: indexProp,
    defaultValue() {
      if (allowMultiple)
        return defaultIndex ?? [];
      return defaultIndex ?? -1;
    },
    onChange
  });
  const getAccordionItemProps = (idx) => {
    let isOpen = false;
    if (idx !== null) {
      isOpen = Array.isArray(index) ? index.includes(idx) : index === idx;
    }
    const onChange2 = (isOpen2) => {
      if (idx === null)
        return;
      if (allowMultiple && Array.isArray(index)) {
        const nextState = isOpen2 ? index.concat(idx) : index.filter((i) => i !== idx);
        setIndex(nextState);
      } else if (isOpen2) {
        setIndex(idx);
      } else if (allowToggle) {
        setIndex(-1);
      }
    };
    return { isOpen, onChange: onChange2 };
  };
  return {
    index,
    setIndex,
    htmlProps,
    getAccordionItemProps,
    focusedIndex,
    setFocusedIndex,
    descendants
  };
}
const [AccordionProvider, useAccordionContext] = utils.createContext({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function useAccordionItem(props) {
  const { isDisabled, isFocusable, id, ...htmlProps } = props;
  const { getAccordionItemProps, setFocusedIndex } = useAccordionContext();
  const buttonRef = React.useRef(null);
  const reactId = React.useId();
  const uid = id ?? reactId;
  const buttonId = `accordion-button-${uid}`;
  const panelId = `accordion-panel-${uid}`;
  focusableNotDisabledWarning(props);
  const { register, index, descendants } = accordionContext.useAccordionDescendant({
    disabled: isDisabled && !isFocusable
  });
  const { isOpen, onChange } = getAccordionItemProps(
    index === -1 ? null : index
  );
  warnIfOpenAndDisabled({ isOpen, isDisabled });
  const onOpen = () => {
    onChange?.(true);
  };
  const onClose = () => {
    onChange?.(false);
  };
  const onClick = React.useCallback(() => {
    onChange?.(!isOpen);
    setFocusedIndex(index);
  }, [index, setFocusedIndex, isOpen, onChange]);
  const onKeyDown = React.useCallback(
    (event) => {
      const keyMap = {
        ArrowDown: () => {
          const next = descendants.nextEnabled(index);
          next?.node.focus();
        },
        ArrowUp: () => {
          const prev = descendants.prevEnabled(index);
          prev?.node.focus();
        },
        Home: () => {
          const first = descendants.firstEnabled();
          first?.node.focus();
        },
        End: () => {
          const last = descendants.lastEnabled();
          last?.node.focus();
        }
      };
      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [descendants, index]
  );
  const onFocus = React.useCallback(() => {
    setFocusedIndex(index);
  }, [setFocusedIndex, index]);
  const getButtonProps = React.useCallback(
    function getButtonProps2(props2 = {}, ref = null) {
      return {
        ...props2,
        type: "button",
        ref: hooks.mergeRefs(register, buttonRef, ref),
        id: buttonId,
        disabled: !!isDisabled,
        "aria-expanded": !!isOpen,
        "aria-controls": panelId,
        onClick: utils.callAllHandlers(props2.onClick, onClick),
        onFocus: utils.callAllHandlers(props2.onFocus, onFocus),
        onKeyDown: utils.callAllHandlers(props2.onKeyDown, onKeyDown)
      };
    },
    [
      buttonId,
      isDisabled,
      isOpen,
      onClick,
      onFocus,
      onKeyDown,
      panelId,
      register
    ]
  );
  const getPanelProps = React.useCallback(
    function getPanelProps2(props2 = {}, ref = null) {
      return {
        ...props2,
        ref,
        role: "region",
        id: panelId,
        "aria-labelledby": buttonId,
        hidden: !isOpen
      };
    },
    [buttonId, isOpen, panelId]
  );
  return {
    isOpen,
    isDisabled,
    isFocusable,
    onOpen,
    onClose,
    getButtonProps,
    getPanelProps,
    htmlProps
  };
}
function allowMultipleWarning(props) {
  const index = props.index || props.defaultIndex;
  const condition = index != null && !Array.isArray(index) && props.allowMultiple;
  utils.warn({
    condition: !!condition,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof index},`
  });
}
function allowMultipleAndAllowToggleWarning(props) {
  utils.warn({
    condition: !!(props.allowMultiple && props.allowToggle),
    message: `If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not`
  });
}
function focusableNotDisabledWarning(props) {
  utils.warn({
    condition: !!(props.isFocusable && !props.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function warnIfOpenAndDisabled(props) {
  utils.warn({
    condition: props.isOpen && !!props.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}

exports.AccordionProvider = AccordionProvider;
exports.useAccordion = useAccordion;
exports.useAccordionContext = useAccordionContext;
exports.useAccordionItem = useAccordionItem;
