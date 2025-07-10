const warn = (options) => {
  const { condition, message } = options;
  if (condition && process.env.NODE_ENV !== "production") {
    console.warn(message);
  }
};

export { warn };
