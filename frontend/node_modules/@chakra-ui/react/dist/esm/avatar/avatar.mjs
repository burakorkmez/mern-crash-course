'use client';
import { jsx, jsxs } from 'react/jsx-runtime';
import { defineStyle, omitThemingProps } from '@chakra-ui/styled-system';
import { cx, dataAttr, callAllHandlers } from '@chakra-ui/utils';
import { useState } from 'react';
import { AvatarStylesProvider } from './avatar-context.mjs';
import { AvatarImage } from './avatar-image.mjs';
import { initials } from './avatar-name.mjs';
import { GenericAvatarIcon } from './generic-avatar-icon.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const baseStyle = defineStyle({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "medium",
  position: "relative",
  flexShrink: 0
});
const Avatar = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Avatar", props);
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    src,
    srcSet,
    name,
    showBorder,
    borderRadius = "full",
    onError,
    onLoad: onLoadProp,
    getInitials = initials,
    icon = /* @__PURE__ */ jsx(GenericAvatarIcon, {}),
    iconLabel = " avatar",
    loading,
    children,
    borderColor,
    ignoreFallback,
    crossOrigin,
    referrerPolicy,
    ...rest
  } = omitThemingProps(props);
  const avatarStyles = {
    borderRadius,
    borderWidth: showBorder ? "2px" : void 0,
    ...baseStyle,
    ...styles.container
  };
  if (borderColor) {
    avatarStyles.borderColor = borderColor;
  }
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      ref,
      ...rest,
      className: cx("chakra-avatar", props.className),
      "data-loaded": dataAttr(isLoaded),
      __css: avatarStyles,
      children: /* @__PURE__ */ jsxs(AvatarStylesProvider, { value: styles, children: [
        /* @__PURE__ */ jsx(
          AvatarImage,
          {
            src,
            srcSet,
            loading,
            onLoad: callAllHandlers(onLoadProp, () => {
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

export { Avatar, baseStyle };
