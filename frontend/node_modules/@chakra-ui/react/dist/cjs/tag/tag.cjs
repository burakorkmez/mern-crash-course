'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var icon = require('../icon/icon.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const [TagStylesProvider, useTagStyles] = utils.createContext({
  name: `TagStylesContext`,
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
});
const Tag = forwardRef.forwardRef((props, ref) => {
  const styles = useStyleConfig.useMultiStyleConfig("Tag", props);
  const ownProps = styledSystem.omitThemingProps(props);
  const containerStyles = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...styles.container
  };
  return /* @__PURE__ */ jsxRuntime.jsx(TagStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.span, { ref, ...ownProps, __css: containerStyles }) });
});
Tag.displayName = "Tag";
const TagLabel = forwardRef.forwardRef((props, ref) => {
  const styles = useTagStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.span, { ref, noOfLines: 1, ...props, __css: styles.label });
});
TagLabel.displayName = "TagLabel";
const TagLeftIcon = forwardRef.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(icon.Icon, { ref, verticalAlign: "top", marginEnd: "0.5rem", ...props }));
TagLeftIcon.displayName = "TagLeftIcon";
const TagRightIcon = forwardRef.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(icon.Icon, { ref, verticalAlign: "top", marginStart: "0.5rem", ...props }));
TagRightIcon.displayName = "TagRightIcon";
const TagCloseIcon = (props) => /* @__PURE__ */ jsxRuntime.jsx(icon.Icon, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ jsxRuntime.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
TagCloseIcon.displayName = "TagCloseIcon";
const TagCloseButton = forwardRef.forwardRef(
  (props, ref) => {
    const { isDisabled, children, ...rest } = props;
    const styles = useTagStyles();
    const btnStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...styles.closeButton
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.button,
      {
        ref,
        "aria-label": "close",
        ...rest,
        type: "button",
        disabled: isDisabled,
        __css: btnStyles,
        children: children || /* @__PURE__ */ jsxRuntime.jsx(TagCloseIcon, {})
      }
    );
  }
);
TagCloseButton.displayName = "TagCloseButton";

exports.Tag = Tag;
exports.TagCloseButton = TagCloseButton;
exports.TagLabel = TagLabel;
exports.TagLeftIcon = TagLeftIcon;
exports.TagRightIcon = TagRightIcon;
exports.useTagStyles = useTagStyles;
