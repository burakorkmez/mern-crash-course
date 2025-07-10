'use client';
'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

function getElementRef(el) {
  const version = React__namespace.version;
  if (typeof version !== "string")
    return el?.ref;
  if (version.startsWith("18."))
    return el?.ref;
  return el?.props?.ref;
}

exports.getElementRef = getElementRef;
