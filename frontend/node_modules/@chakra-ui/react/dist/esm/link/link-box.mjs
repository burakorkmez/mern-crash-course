'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const LinkOverlay = forwardRef(
  function LinkOverlay2(props, ref) {
    const { isExternal, target, rel, className, ...rest } = props;
    return /* @__PURE__ */ jsx(
      chakra.a,
      {
        ...rest,
        ref,
        className: cx("chakra-linkbox__overlay", className),
        rel: isExternal ? "noopener noreferrer" : rel,
        target: isExternal ? "_blank" : target,
        __css: {
          position: "static",
          "&::before": {
            content: "''",
            cursor: "inherit",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%"
          }
        }
      }
    );
  }
);
const LinkBox = forwardRef(
  function LinkBox2(props, ref) {
    const { className, ...rest } = props;
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        position: "relative",
        ...rest,
        className: cx("chakra-linkbox", className),
        __css: {
          /* Elevate the links and abbreviations up */
          "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
            position: "relative",
            zIndex: 1
          }
        }
      }
    );
  }
);

export { LinkBox, LinkOverlay };
