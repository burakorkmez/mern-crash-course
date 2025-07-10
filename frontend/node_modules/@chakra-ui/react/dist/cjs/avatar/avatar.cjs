'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var avatarContext = require('./avatar-context.cjs');
var avatarImage = require('./avatar-image.cjs');
var avatarName = require('./avatar-name.cjs');
var genericAvatarIcon = require('./generic-avatar-icon.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const baseStyle = styledSystem.defineStyle({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "medium",
  position: "relative",
  flexShrink: 0
});
const Avatar = forwardRef.forwardRef((props, ref) => {
  const styles = useStyleConfig.useMultiStyleConfig("Avatar", props);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const {
    src,
    srcSet,
    name,
    showBorder,
    borderRadius = "full",
    onError,
    onLoad: onLoadProp,
    getInitials = avatarName.initials,
    icon = /* @__PURE__ */ jsxRuntime.jsx(genericAvatarIcon.GenericAvatarIcon, {}),
    iconLabel = " avatar",
    loading,
    children,
    borderColor,
    ignoreFallback,
    crossOrigin,
    referrerPolicy,
    ...rest
  } = styledSystem.omitThemingProps(props);
  const avatarStyles = {
    borderRadius,
    borderWidth: showBorder ? "2px" : void 0,
    ...baseStyle,
    ...styles.container
  };
  if (borderColor) {
    avatarStyles.borderColor = borderColor;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.span,
    {
      ref,
      ...rest,
      className: utils.cx("chakra-avatar", props.className),
      "data-loaded": utils.dataAttr(isLoaded),
      __css: avatarStyles,
      children: /* @__PURE__ */ jsxRuntime.jsxs(avatarContext.AvatarStylesProvider, { value: styles, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          avatarImage.AvatarImage,
          {
            src,
            srcSet,
            loading,
            onLoad: utils.callAllHandlers(onLoadProp, () => {
              setIsLoaded(true);
            }),
            onError,
            getInitials,
            name,
            borderRadius,
            icon,
            iconLabel,
            ignoreFallback,
            crossOrigin,
            referrerPolicy
          }
        ),
        children
      ] })
    }
  );
});
Avatar.displayName = "Avatar";

exports.Avatar = Avatar;
exports.baseStyle = baseStyle;
