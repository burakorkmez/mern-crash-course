'use strict';

function getCSSVar(theme, scale, value) {
  return theme.__cssMap?.[`${scale}.${value}`]?.varRef ?? value;
}

exports.getCSSVar = getCSSVar;
