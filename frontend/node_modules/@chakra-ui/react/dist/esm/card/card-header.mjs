'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useCardStyles } from './card-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const CardHeader = forwardRef(
  function CardHeader2(props, ref) {
    const { className, ...rest } = props;
    const styles = useCardStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__header", className),
        __css: styles.header,
        ...rest
      }
    );
  }
);

export { CardHeader };
