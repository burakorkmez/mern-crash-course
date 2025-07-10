'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var cardContext = require('./card-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Card = forwardRef.forwardRef(function Card2(props, ref) {
  const {
    className,
    children,
    direction = "column",
    justify,
    align,
    ...rest
  } = styledSystem.omitThemingProps(props);
  const styles = useStyleConfig.useMultiStyleConfig("Card", props);
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ref,
      className: utils.cx("chakra-card", className),
      __css: {
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...styles.container
      },
      ...rest,
      children: /* @__PURE__ */ jsxRuntime.jsx(cardContext.CardStylesProvider, { value: styles, children })
    }
  );
});

exports.Card = Card;
