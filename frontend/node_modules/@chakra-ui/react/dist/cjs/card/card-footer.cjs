'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var cardContext = require('./card-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const CardFooter = forwardRef.forwardRef(
  function CardFooter2(props, ref) {
    const { className, justify, ...rest } = props;
    const styles = cardContext.useCardStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        className: utils.cx("chakra-card__footer", className),
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

exports.CardFooter = CardFooter;
