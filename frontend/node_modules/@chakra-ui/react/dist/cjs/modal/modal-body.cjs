'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var React = require('react');
var modal = require('./modal.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const ModalBody = forwardRef.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  const { bodyId, setBodyMounted } = modal.useModalContext();
  React.useEffect(() => {
    setBodyMounted(true);
    return () => setBodyMounted(false);
  }, [setBodyMounted]);
  const _className = utils.cx("chakra-modal__body", className);
  const styles = modal.useModalStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ref,
      className: _className,
      id: bodyId,
      ...rest,
      __css: styles.body
    }
  );
});
ModalBody.displayName = "ModalBody";

exports.ModalBody = ModalBody;
