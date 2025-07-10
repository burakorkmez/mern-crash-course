'use strict';

const cx = (...classNames) => classNames.filter(Boolean).join(" ");

exports.cx = cx;
