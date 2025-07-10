'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { getValidChildren, cx } from '@chakra-ui/utils';
import { cloneElement } from 'react';
import { usePinInput, PinInputDescendantsProvider, PinInputProvider, usePinInputField } from './use-pin-input.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

function PinInput(props) {
  const styles = useStyleConfig("PinInput", props);
  const { children, ...rest } = omitThemingProps(props);
  const { descendants, ...context } = usePinInput(rest);
  const clones = getValidChildren(children).map(
    (child) => cloneElement(child, { __css: styles })
  );
  return /* @__PURE__ */ jsx(PinInputDescendantsProvider, { value: descendants, children: /* @__PURE__ */ jsx(PinInputProvider, { value: context, children: clones }) });
}
PinInput.displayName = "PinInput";
const PinInputField = forwardRef(
  function PinInputField2(props, ref) {
    const inputProps = usePinInputField(props, ref);
    return /* @__PURE__ */ jsx(
      chakra.input,
      {
        ...inputProps,
        className: cx("chakra-pin-input", props.className)
      }
    );
  }
);
PinInputField.displayName = "PinInputField";

export { PinInput, PinInputField };
