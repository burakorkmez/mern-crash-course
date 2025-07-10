'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useInputGroupStyles } from './input-group.mjs';
import { chakra } from '../system/factory.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

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
const StyledAddon = chakra("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  }
});
const InputAddon = forwardRef(
  function InputAddon2(props, ref) {
    const { placement = "left", ...rest } = props;
    const placementStyles = placements[placement] ?? {};
    const styles = useInputGroupStyles();
    return /* @__PURE__ */ jsx(
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
const InputLeftAddon = forwardRef(
  function InputLeftAddon2(props, ref) {
    return /* @__PURE__ */ jsx(
      InputAddon,
      {
        ref,
        placement: "left",
        ...props,
        className: cx("chakra-input__left-addon", props.className)
      }
    );
  }
);
InputLeftAddon.displayName = "InputLeftAddon";
InputLeftAddon.id = "InputLeftAddon";
const InputRightAddon = forwardRef(
  function InputRightAddon2(props, ref) {
    return /* @__PURE__ */ jsx(
      InputAddon,
      {
        ref,
        placement: "right",
        ...props,
        className: cx("chakra-input__right-addon", props.className)
      }
    );
  }
);
InputRightAddon.displayName = "InputRightAddon";
InputRightAddon.id = "InputRightAddon";

export { InputAddon, InputLeftAddon, InputRightAddon };
