'use client';
const classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function getColorModeUtils(options = {}) {
  const { preventTransition = true, nonce } = options;
  const utils = {
    setDataset: (value) => {
      const cleanup = preventTransition ? utils.preventTransition() : void 0;
      document.documentElement.dataset.theme = value;
      document.documentElement.style.colorScheme = value;
      cleanup?.();
    },
    setClassName(dark) {
      document.body.classList.add(dark ? classNames.dark : classNames.light);
      document.body.classList.remove(dark ? classNames.light : classNames.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(fallback) {
      const dark = utils.query().matches ?? fallback === "dark";
      return dark ? "dark" : "light";
    },
    addListener(fn) {
      const mql = utils.query();
      const listener = (e) => {
        fn(e.matches ? "dark" : "light");
      };
      if (typeof mql.addListener === "function")
        mql.addListener(listener);
      else
        mql.addEventListener("change", listener);
      return () => {
        if (typeof mql.removeListener === "function")
          mql.removeListener(listener);
        else
          mql.removeEventListener("change", listener);
      };
    },
    preventTransition() {
      const css = document.createElement("style");
      css.appendChild(
        document.createTextNode(
          `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
      );
      if (nonce !== void 0) {
        css.nonce = nonce;
      }
      document.head.appendChild(css);
      return () => {
        (() => window.getComputedStyle(document.body))();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(css);
          });
        });
      };
    }
  };
  return utils;
}

export { getColorModeUtils };
