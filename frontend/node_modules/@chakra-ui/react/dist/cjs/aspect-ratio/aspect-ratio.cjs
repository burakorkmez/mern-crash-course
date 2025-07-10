'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var React = require('react');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const AspectRatio = forwardRef.forwardRef(
  function(props, ref) {
    const { ratio = 4 / 3, children, className, ...rest } = props;
    const child = React.Children.only(children);
    const _className = utils.cx("chakra-aspect-ratio", className);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        position: "relative",
        className: _className,
        _before: {
          height: 0,
          content: `""`,
          display: "block",
          paddingBottom: utils.mapResponsive(ratio, (r) => `${1 / r * 100}%`)
        },
        __css: {
          "& > *:not(style)": {
            overflow: "hidden",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          "& > img, & > video": {
            objectFit: "cover"
          }
        },
        ...rest,
        children: child
      }
    );
  }
);
AspectRatio.displayName = "AspectRatio";

exports.AspectRatio = AspectRatio;
