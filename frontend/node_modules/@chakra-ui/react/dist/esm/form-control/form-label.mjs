'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useFormControlContext, useFormControlStyles } from './form-control.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const FormLabel = forwardRef(
  function FormLabel2(passedProps, ref) {
    const styles = useStyleConfig("FormLabel", passedProps);
    const props = omitThemingProps(passedProps);
    const {
      className,
      children,
      requiredIndicator = /* @__PURE__ */ jsx(RequiredIndicator, {}),
      optionalIndicator = null,
      ...rest
    } = props;
    const field = useFormControlContext();
    const ownProps = field?.getLabelProps(rest, ref) ?? { ref, ...rest };
    return /* @__PURE__ */ jsxs(
      chakra.label,
      {
        ...ownProps,
        className: cx("chakra-form__label", props.className),
        __css: {
          display: "block",
          textAlign: "start",
          ...styles
        },
        children: [
          children,
          field?.isRequired ? requiredIndicator : optionalIndicator
        ]
      }
    );
  }
);
FormLabel.displayName = "FormLabel";
const RequiredIndicator = forwardRef(
  function RequiredIndicator2(props, ref) {
    const field = useFormControlContext();
    const styles = useFormControlStyles();
    if (!field?.isRequired)
      return null;
    const className = cx("chakra-form__required-indicator", props.className);
    return /* @__PURE__ */ jsx(
      chakra.span,
      {
        ...field?.getRequiredIndicatorProps(props, ref),
        __css: styles.requiredIndicator,
        className
      }
    );
  }
);
RequiredIndicator.displayName = "RequiredIndicator";

export { FormLabel, RequiredIndicator };
