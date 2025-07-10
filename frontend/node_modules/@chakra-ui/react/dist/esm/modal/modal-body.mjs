'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useEffect } from 'react';
import { useModalContext, useModalStyles } from './modal.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const ModalBody = forwardRef((props, ref) => {
  const { className, ...rest } = props;
  const { bodyId, setBodyMounted } = useModalContext();
  useEffect(() => {
    setBodyMounted(true);
    return () => setBodyMounted(false);
  }, [setBodyMounted]);
  const _className = cx("chakra-modal__body", className);
  const styles = useModalStyles();
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      className: _className,
      id: bodyId,
      ...rest,
      __css: styles.body
    }
  );
});
ModalBody.displayName = "ModalBody";

export { ModalBody };
