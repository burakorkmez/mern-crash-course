'use client';
import { jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useEffect } from 'react';
import { useModalContext, useModalStyles } from './modal.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const ModalHeader = forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    const { headerId, setHeaderMounted } = useModalContext();
    useEffect(() => {
      setHeaderMounted(true);
      return () => setHeaderMounted(false);
    }, [setHeaderMounted]);
    const _className = cx("chakra-modal__header", className);
    const styles = useModalStyles();
    const headerStyles = defineStyle({
      flex: 0,
      ...styles.header
    });
    return /* @__PURE__ */ jsx(
      chakra.header,
      {
        ref,
        className: _className,
        id: headerId,
        ...rest,
        __css: headerStyles
      }
    );
  }
);
ModalHeader.displayName = "ModalHeader";

export { ModalHeader };
