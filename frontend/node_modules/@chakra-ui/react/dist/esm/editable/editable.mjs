'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx, runIfFn } from '@chakra-ui/utils';
import { EditableProvider, EditableStylesProvider } from './editable-context.mjs';
import { useEditable } from './use-editable.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Editable = forwardRef(
  function Editable2(props, ref) {
    const styles = useMultiStyleConfig("Editable", props);
    const ownProps = omitThemingProps(props);
    const { htmlProps, ...context } = useEditable(ownProps);
    const { isEditing, onSubmit, onCancel, onEdit } = context;
    const _className = cx("chakra-editable", props.className);
    const children = runIfFn(props.children, {
      isEditing,
      onSubmit,
      onCancel,
      onEdit
    });
    return /* @__PURE__ */ jsx(EditableProvider, { value: context, children: /* @__PURE__ */ jsx(EditableStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        ...htmlProps,
        className: _className,
        children
      }
    ) }) });
  }
);
Editable.displayName = "Editable";

export { Editable };
