'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useCardStyles } from './card-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const CardBody = forwardRef(
  function CardBody2(props, ref) {
    const { className, ...rest } = props;
    const styles = useCardStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__body", className),
        __css: styles.body,
        ...rest
      }
    );
  }
);

export { CardBody };
