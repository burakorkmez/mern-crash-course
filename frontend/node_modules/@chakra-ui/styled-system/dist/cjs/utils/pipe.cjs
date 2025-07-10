'use strict';

const pipe = (...fns) => (v) => fns.reduce((a, b) => b(a), v);

exports.pipe = pipe;
