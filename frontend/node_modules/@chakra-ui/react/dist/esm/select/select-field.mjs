'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const SelectField = forwardRef(
  function SelectField2(props, ref) {
    const { children, placeholder, className, ...rest } = props;
    return /* @__PURE__ */ jsxs(
      chakra.select,
      {
        ...rest,
        ref,
        className: cx("chakra-select", className),
        children: [
          placeholder && /* @__PURE__ */ jsx("option", { value: "", children: placeholder }),
          children
        ]
      }
    );
  }
);
SelectField.displayName = "SelectField";

export { SelectField };
