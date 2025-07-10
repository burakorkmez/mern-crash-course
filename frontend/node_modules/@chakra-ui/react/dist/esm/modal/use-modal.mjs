'use client';
import { mergeRefs } from '@chakra-ui/hooks';
import { callAllHandlers } from '@chakra-ui/utils';
import { hideOthers } from 'aria-hidden';
import { useRef, useCallback, useState, useEffect, useId, useMemo } from 'react';
import { useModalManager, modalManager } from './modal-manager.mjs';

function useModal(props) {
  const {
    isOpen,
    onClose,
    id,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    useInert = true,
    onOverlayClick: onOverlayClickProp,
    onEsc
  } = props;
  const dialogRef = useRef(null);
  const overlayRef = useRef(null);
  const [dialogId, headerId, bodyId] = useIds(
    id,
    `chakra-modal`,
    `chakra-modal--header`,
    `chakra-modal--body`
  );
  useAriaHidden(dialogRef, isOpen && useInert);
  const index = useModalManager(dialogRef, isOpen);
  const mouseDownTarget = useRef(null);
  const onMouseDown = useCallback((event) => {
    mouseDownTarget.current = event.target;
  }, []);
  const onKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        if (closeOnEsc) {
          onClose?.();
        }
        onEsc?.();
      }
    },
    [closeOnEsc, onClose, onEsc]
  );
  const [headerMounted, setHeaderMounted] = useState(false);
  const [bodyMounted, setBodyMounted] = useState(false);
  const getDialogProps = useCallback(
    (props2 = {}, ref = null) => ({
      role: "dialog",
      ...props2,
      ref: mergeRefs(ref, dialogRef),
      id: dialogId,
      tabIndex: -1,
      "aria-modal": true,
      "aria-labelledby": headerMounted ? headerId : void 0,
      "aria-describedby": bodyMounted ? bodyId : void 0,
      onClick: callAllHandlers(
        props2.onClick,
        (event) => event.stopPropagation()
      )
    }),
    [bodyId, bodyMounted, dialogId, headerId, headerMounted]
  );
  const onOverlayClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (mouseDownTarget.current !== event.target)
        return;
      if (!modalManager.isTopModal(dialogRef.current))
        return;
      if (closeOnOverlayClick) {
        onClose?.();
      }
      onOverlayClickProp?.();
    },
    [onClose, closeOnOverlayClick, onOverlayClickProp]
  );
  const getDialogContainerProps = useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs(ref, overlayRef),
      onClick: callAllHandlers(props2.onClick, onOverlayClick),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
      onMouseDown: callAllHandlers(props2.onMouseDown, onMouseDown)
    }),
    [onKeyDown, onMouseDown, onOverlayClick]
  );
  return {
    isOpen,
    onClose,
    headerId,
    bodyId,
    setBodyMounted,
    setHeaderMounted,
    dialogRef,
    overlayRef,
    getDialogProps,
    getDialogContainerProps,
    index
  };
}
function useAriaHidden(ref, shouldHide) {
  const currentElement = ref.current;
  useEffect(() => {
    if (!ref.current || !shouldHide)
      return void 0;
    return hideOthers(ref.current);
  }, [shouldHide, ref, currentElement]);
}
function useIds(idProp, ...prefixes) {
  const reactId = useId();
  const id = idProp || reactId;
  return useMemo(() => {
    return prefixes.map((prefix) => `${prefix}-${id}`);
  }, [id, prefixes]);
}

export { useAriaHidden, useModal };
