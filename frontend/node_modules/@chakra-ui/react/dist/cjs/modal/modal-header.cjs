'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var modal = require('./modal.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const ModalHeader = forwardRef.forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    const { headerId, setHeaderMounted } = modal.useModalContext();
    React.useEffect(() => {
      setHeaderMounted(true);
      return () => setHeaderMounted(false);
    }, [setHeaderMounted]);
    const _className = utils.cx("chakra-modal__header", className);
    const styles = modal.useModalStyles();
    const headerStyles = styledSystem.defineStyle({
      flex: 0,
      ...styles.header
    });
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.header,
      {
        ref,
        className: _className,
        id: headerId,
        ...rest,
        __css: headerStyles
      }
    );
  }
);
ModalHeader.displayName = "ModalHeader";

exports.ModalHeader = ModalHeader;
