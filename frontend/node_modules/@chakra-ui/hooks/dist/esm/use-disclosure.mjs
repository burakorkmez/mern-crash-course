'use client';
import { useCallbackRef } from './use-callback-ref.mjs';
import { useState, useId, useCallback } from 'react';

function useDisclosure(props = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
    id: idProp
  } = props;
  const handleOpen = useCallbackRef(onOpenProp);
  const handleClose = useCallbackRef(onCloseProp);
  const [isOpenState, setIsOpen] = useState(props.defaultIsOpen || false);
  const isOpen = isOpenProp !== void 0 ? isOpenProp : isOpenState;
  const isControlled = isOpenProp !== void 0;
  const uid = useId();
  const id = idProp ?? `disclosure-${uid}`;
  const onClose = useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    handleClose?.();
  }, [isControlled, handleClose]);
  const onOpen = useCallback(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    handleOpen?.();
  }, [isControlled, handleOpen]);
  const onToggle = useCallback(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen, onOpen, onClose]);
  function getButtonProps(props2 = {}) {
    return {
      ...props2,
      "aria-expanded": isOpen,
      "aria-controls": id,
      onClick(event) {
        props2.onClick?.(event);
        onToggle();
      }
    };
  }
  function getDisclosureProps(props2 = {}) {
    return {
      ...props2,
      hidden: !isOpen,
      id
    };
  }
  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
    getButtonProps,
    getDisclosureProps
  };
}

export { useDisclosure };
