'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const SelectField = forwardRef.forwardRef(
  function SelectField2(props, ref) {
    const { children, placeholder, className, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      factory.chakra.select,
      {
        ...rest,
        ref,
        className: utils.cx("chakra-select", className),
        children: [
          placeholder && /* @__PURE__ */ jsxRuntime.jsx("option", { value: "", children: placeholder }),
          children
        ]
      }
    );
  }
);
SelectField.displayName = "SelectField";

exports.SelectField = SelectField;
