'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useCardStyles } from './card-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const CardFooter = forwardRef(
  function CardFooter2(props, ref) {
    const { className, justify, ...rest } = props;
    const styles = useCardStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__footer", className),
        __css: {
          display: "flex",
          justifyContent: justify,
          ...styles.footer
        },
        ...rest
      }
    );
  }
);

export { CardFooter };
