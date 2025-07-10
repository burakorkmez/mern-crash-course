'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { getValidChildren, compact, cx } from '@chakra-ui/utils';
import { cloneElement } from 'react';
import { baseStyle } from './avatar.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const AvatarGroup = forwardRef(
  function AvatarGroup2(props, ref) {
    const styles = useMultiStyleConfig("Avatar", props);
    const {
      children,
      borderColor,
      max,
      spacing = "-0.75rem",
      borderRadius = "full",
      ...rest
    } = omitThemingProps(props);
    const validChildren = getValidChildren(children);
    const childrenWithinMax = max != null ? validChildren.slice(0, max) : validChildren;
    const excess = max != null ? validChildren.length - max : 0;
    const reversedChildren = childrenWithinMax.reverse();
    const clones = reversedChildren.map((child, index) => {
      const isFirstAvatar = index === 0;
      const childProps = {
        marginEnd: isFirstAvatar ? 0 : spacing,
        size: props.size,
        borderColor: child.props.borderColor ?? borderColor,
        showBorder: true
      };
      return cloneElement(child, compact(childProps));
    });
    const groupStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row-reverse",
      ...styles.group
    };
    const excessStyles = {
      borderRadius,
      marginStart: spacing,
      ...baseStyle,
      ...styles.excessLabel
    };
    return /* @__PURE__ */ jsxs(
      chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        ...rest,
        className: cx("chakra-avatar__group", props.className),
        children: [
          excess > 0 && /* @__PURE__ */ jsx(chakra.span, { className: "chakra-avatar__excess", __css: excessStyles, children: `+${excess}` }),
          clones
        ]
      }
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup };
