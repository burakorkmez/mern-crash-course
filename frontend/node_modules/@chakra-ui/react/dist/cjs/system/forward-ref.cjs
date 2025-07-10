'use client';
'use strict';

var React = require('react');

function forwardRef(component) {
  return React.forwardRef(component);
}

exports.forwardRef = forwardRef;
