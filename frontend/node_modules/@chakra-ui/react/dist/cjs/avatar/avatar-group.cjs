'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var avatar = require('./avatar.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const AvatarGroup = forwardRef.forwardRef(
  function AvatarGroup2(props, ref) {
    const styles = useStyleConfig.useMultiStyleConfig("Avatar", props);
    const {
      children,
      borderColor,
      max,
      spacing = "-0.75rem",
      borderRadius = "full",
      ...rest
    } = styledSystem.omitThemingProps(props);
    const validChildren = utils.getValidChildren(children);
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
      return React.cloneElement(child, utils.compact(childProps));
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
      ...avatar.baseStyle,
      ...styles.excessLabel
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      factory.chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        ...rest,
        className: utils.cx("chakra-avatar__group", props.className),
        children: [
          excess > 0 && /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.span, { className: "chakra-avatar__excess", __css: excessStyles, children: `+${excess}` }),
          clones
        ]
      }
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

exports.AvatarGroup = AvatarGroup;
