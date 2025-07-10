'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var cardContext = require('./card-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const CardHeader = forwardRef.forwardRef(
  function CardHeader2(props, ref) {
    const { className, ...rest } = props;
    const styles = cardContext.useCardStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        className: utils.cx("chakra-card__header", className),
        __css: styles.header,
        ...rest
      }
    );
  }
);

exports.CardHeader = CardHeader;
