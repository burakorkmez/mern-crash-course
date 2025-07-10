'use strict';

var react = require('react');

function getValidChildren(children) {
  return react.Children.toArray(children).filter(
    (child) => react.isValidElement(child)
  );
}

exports.getValidChildren = getValidChildren;
