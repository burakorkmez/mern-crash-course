'use client';
import { createContext as createContext$1, useContext } from 'react';

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
  const Context = createContext$1(defaultValue);
  Context.displayName = name;
  function useContext$1() {
    const context = useContext(Context);
    if (!context && strict) {
      const error = new Error(
        errorMessage ?? getErrorMessage(hookName, providerName)
      );
      error.name = "ContextError";
      Error.captureStackTrace?.(error, useContext$1);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext$1, Context];
}

export { createContext };
