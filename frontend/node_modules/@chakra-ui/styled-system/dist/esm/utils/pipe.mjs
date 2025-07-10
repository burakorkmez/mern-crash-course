const pipe = (...fns) => (v) => fns.reduce((a, b) => b(a), v);

export { pipe };
