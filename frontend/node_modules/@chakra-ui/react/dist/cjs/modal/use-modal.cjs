'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var ariaHidden = require('aria-hidden');
var React = require('react');
var modalManager = require('./modal-manager.cjs');

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
  const dialogRef = React.useRef(null);
  const overlayRef = React.useRef(null);
  const [dialogId, headerId, bodyId] = useIds(
    id,
    `chakra-modal`,
    `chakra-modal--header`,
    `chakra-modal--body`
  );
  useAriaHidden(dialogRef, isOpen && useInert);
  const index = modalManager.useModalManager(dialogRef, isOpen);
  const mouseDownTarget = React.useRef(null);
  const onMouseDown = React.useCallback((event) => {
    mouseDownTarget.current = event.target;
  }, []);
  const onKeyDown = React.useCallback(
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
  const [headerMounted, setHeaderMounted] = React.useState(false);
  const [bodyMounted, setBodyMounted] = React.useState(false);
  const getDialogProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      role: "dialog",
      ...props2,
      ref: hooks.mergeRefs(ref, dialogRef),
      id: dialogId,
      tabIndex: -1,
      "aria-modal": true,
      "aria-labelledby": headerMounted ? headerId : void 0,
      "aria-describedby": bodyMounted ? bodyId : void 0,
      onClick: utils.callAllHandlers(
        props2.onClick,
        (event) => event.stopPropagation()
      )
    }),
    [bodyId, bodyMounted, dialogId, headerId, headerMounted]
  );
  const onOverlayClick = React.useCallback(
    (event) => {
      event.stopPropagation();
      if (mouseDownTarget.current !== event.target)
        return;
      if (!modalManager.modalManager.isTopModal(dialogRef.current))
        return;
      if (closeOnOverlayClick) {
        onClose?.();
      }
      onOverlayClickProp?.();
    },
    [onClose, closeOnOverlayClick, onOverlayClickProp]
  );
  const getDialogContainerProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: hooks.mergeRefs(ref, overlayRef),
      onClick: utils.callAllHandlers(props2.onClick, onOverlayClick),
      onKeyDown: utils.callAllHandlers(props2.onKeyDown, onKeyDown),
      onMouseDown: utils.callAllHandlers(props2.onMouseDown, onMouseDown)
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
  React.useEffect(() => {
    if (!ref.current || !shouldHide)
      return void 0;
    return ariaHidden.hideOthers(ref.current);
  }, [shouldHide, ref, currentElement]);
}
function useIds(idProp, ...prefixes) {
  const reactId = React.useId();
  const id = idProp || reactId;
  return React.useMemo(() => {
    return prefixes.map((prefix) => `${prefix}-${id}`);
  }, [id, prefixes]);
}

exports.useAriaHidden = useAriaHidden;
exports.useModal = useModal;
