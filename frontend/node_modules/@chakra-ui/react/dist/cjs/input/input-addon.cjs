'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var inputGroup = require('./input-group.cjs');
var factory = require('../system/factory.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const placements = {
  left: {
    marginEnd: "-1px",
    borderEndRadius: 0,
    borderEndColor: "transparent"
  },
  right: {
    marginStart: "-1px",
    borderStartRadius: 0,
    borderStartColor: "transparent"
  }
};
const StyledAddon = factory.chakra("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  }
});
const InputAddon = forwardRef.forwardRef(
  function InputAddon2(props, ref) {
    const { placement = "left", ...rest } = props;
    const placementStyles = placements[placement] ?? {};
    const styles = inputGroup.useInputGroupStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      StyledAddon,
      {
        ref,
        ...rest,
        __css: {
          ...styles.addon,
          ...placementStyles
        }
      }
    );
  }
);
InputAddon.displayName = "InputAddon";
const InputLeftAddon = forwardRef.forwardRef(
  function InputLeftAddon2(props, ref) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      InputAddon,
      {
        ref,
        placement: "left",
        ...props,
        className: utils.cx("chakra-input__left-addon", props.className)
      }
    );
  }
);
InputLeftAddon.displayName = "InputLeftAddon";
InputLeftAddon.id = "InputLeftAddon";
const InputRightAddon = forwardRef.forwardRef(
  function InputRightAddon2(props, ref) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      InputAddon,
      {
        ref,
        placement: "right",
        ...props,
        className: utils.cx("chakra-input__right-addon", props.className)
      }
    );
  }
);
InputRightAddon.displayName = "InputRightAddon";
InputRightAddon.id = "InputRightAddon";

exports.InputAddon = InputAddon;
exports.InputLeftAddon = InputLeftAddon;
exports.InputRightAddon = InputRightAddon;
