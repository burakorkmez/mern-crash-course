function getCSSVar(theme, scale, value) {
  return theme.__cssMap?.[`${scale}.${value}`]?.varRef ?? value;
}

export { getCSSVar };
