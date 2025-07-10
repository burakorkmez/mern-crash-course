'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { createContext, cx } from '@chakra-ui/utils';
import { useFormControlContext } from './form-control.mjs';
import { Icon } from '../icon/icon.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const [FormErrorStylesProvider, useFormErrorStyles] = createContext({
  name: `FormErrorStylesContext`,
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
});
const FormErrorMessage = forwardRef(
  (props, ref) => {
    const styles = useMultiStyleConfig("FormError", props);
    const ownProps = omitThemingProps(props);
    const field = useFormControlContext();
    if (!field?.isInvalid)
      return null;
    return /* @__PURE__ */ jsx(FormErrorStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...field?.getErrorMessageProps(ownProps, ref),
        className: cx("chakra-form__error-message", props.className),
        __css: {
          display: "flex",
          alignItems: "center",
          ...styles.text
        }
      }
    ) });
  }
);
FormErrorMessage.displayName = "FormErrorMessage";
const FormErrorIcon = forwardRef((props, ref) => {
  const styles = useFormErrorStyles();
  const field = useFormControlContext();
  if (!field?.isInvalid)
    return null;
  const _className = cx("chakra-form__error-icon", props.className);
  return /* @__PURE__ */ jsx(
    Icon,
    {
      ref,
      "aria-hidden": true,
      ...props,
      __css: styles.icon,
      className: _className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        }
      )
    }
  );
});
FormErrorIcon.displayName = "FormErrorIcon";

export { FormErrorIcon, FormErrorMessage, useFormErrorStyles };
