'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var avatarContext = require('./avatar-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const placementMap = {
  "top-start": {
    top: "0",
    insetStart: "0",
    transform: "translate(-25%, -25%)"
  },
  "top-end": {
    top: "0",
    insetEnd: "0",
    transform: "translate(25%, -25%)"
  },
  "bottom-start": {
    bottom: "0",
    insetStart: "0",
    transform: "translate(-25%, 25%)"
  },
  "bottom-end": {
    bottom: "0",
    insetEnd: "0",
    transform: "translate(25%, 25%)"
  }
};
const AvatarBadge = forwardRef.forwardRef(
  function AvatarBadge2(props, ref) {
    const { placement = "bottom-end", className, ...rest } = props;
    const styles = avatarContext.useAvatarStyles();
    const placementStyles = placementMap[placement];
    const badgeStyles = {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...placementStyles,
      ...styles.badge
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        ...rest,
        className: utils.cx("chakra-avatar__badge", className),
        __css: badgeStyles
      }
    );
  }
);
AvatarBadge.displayName = "AvatarBadge";

exports.AvatarBadge = AvatarBadge;
