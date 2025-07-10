'use strict';

const dataAttr = (condition) => condition ? "" : void 0;
const ariaAttr = (condition) => condition ? true : void 0;

exports.ariaAttr = ariaAttr;
exports.dataAttr = dataAttr;
