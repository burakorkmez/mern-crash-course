'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var editableContext = require('./editable-context.cjs');
var useEditable = require('./use-editable.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Editable = forwardRef.forwardRef(
  function Editable2(props, ref) {
    const styles = useStyleConfig.useMultiStyleConfig("Editable", props);
    const ownProps = styledSystem.omitThemingProps(props);
    const { htmlProps, ...context } = useEditable.useEditable(ownProps);
    const { isEditing, onSubmit, onCancel, onEdit } = context;
    const _className = utils.cx("chakra-editable", props.className);
    const children = utils.runIfFn(props.children, {
      isEditing,
      onSubmit,
      onCancel,
      onEdit
    });
    return /* @__PURE__ */ jsxRuntime.jsx(editableContext.EditableProvider, { value: context, children: /* @__PURE__ */ jsxRuntime.jsx(editableContext.EditableStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
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

exports.Editable = Editable;
