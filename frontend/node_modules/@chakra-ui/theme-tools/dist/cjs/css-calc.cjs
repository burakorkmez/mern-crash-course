'use strict';

var utils = require('@chakra-ui/utils');

function toRef(operand) {
  if (utils.isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
const toExpr = (operator, ...operands) => operands.map(toRef).join(` ${operator} `).replace(/calc/g, "");
const add = (...operands) => `calc(${toExpr("+", ...operands)})`;
const subtract = (...operands) => `calc(${toExpr("-", ...operands)})`;
const multiply = (...operands) => `calc(${toExpr("*", ...operands)})`;
const divide = (...operands) => `calc(${toExpr("/", ...operands)})`;
const negate = (x) => {
  const value = toRef(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply(value, -1);
};
const calc = Object.assign(
  (x) => ({
    add: (...operands) => calc(add(x, ...operands)),
    subtract: (...operands) => calc(subtract(x, ...operands)),
    multiply: (...operands) => calc(multiply(x, ...operands)),
    divide: (...operands) => calc(divide(x, ...operands)),
    negate: () => calc(negate(x)),
    toString: () => x.toString()
  }),
  {
    add,
    subtract,
    multiply,
    divide,
    negate
  }
);

exports.calc = calc;
