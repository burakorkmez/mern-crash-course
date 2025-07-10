'use client';
'use strict';

var react = require('react');

function getErrorMessage(hook, provider) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}
function createContext(options = {}) {
  const {
    name,
    strict = true,
    hookName = "useContext",
    providerName = "Provider",
    errorMessage,
    defaultValue
  } = options;
  const Context = react.createContext(defaultValue);
  Context.displayName = name;
  function useContext() {
    const context = react.useContext(Context);
    if (!context && strict) {
      const error = new Error(
        errorMessage ?? getErrorMessage(hookName, providerName)
      );
      error.name = "ContextError";
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext, Context];
}

exports.createContext = createContext;
