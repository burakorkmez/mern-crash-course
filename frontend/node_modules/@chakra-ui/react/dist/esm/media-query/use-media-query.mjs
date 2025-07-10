'use client';
import { useState, useEffect } from 'react';
import { useEnvironment } from '../env/env.mjs';

function useMediaQuery(query, options = {}) {
  const { ssr = true, fallback } = options;
  const { getWindow } = useEnvironment();
  const queries = Array.isArray(query) ? query : [query];
  let fallbackValues = Array.isArray(fallback) ? fallback : [fallback];
  fallbackValues = fallbackValues.filter((v) => v != null);
  const [value, setValue] = useState(() => {
    return queries.map((query2, index) => ({
      media: query2,
      matches: ssr ? !!fallbackValues[index] : getWindow().matchMedia(query2).matches
    }));
  });
  useEffect(() => {
    const win = getWindow();
    setValue(
      queries.map((query2) => ({
        media: query2,
        matches: win.matchMedia(query2).matches
      }))
    );
    const mql = queries.map((query2) => win.matchMedia(query2));
    const handler = (evt) => {
      setValue((prev) => {
        return prev.slice().map((item) => {
          if (item.media === evt.media)
            return { ...item, matches: evt.matches };
          return item;
        });
      });
    };
    mql.forEach((mql2) => {
      if (typeof mql2.addListener === "function") {
        mql2.addListener(handler);
      } else {
        mql2.addEventListener("change", handler);
      }
    });
    return () => {
      mql.forEach((mql2) => {
        if (typeof mql2.removeListener === "function") {
          mql2.removeListener(handler);
        } else {
          mql2.removeEventListener("change", handler);
        }
      });
    };
  }, [getWindow]);
  return value.map((item) => item.matches);
}

export { useMediaQuery };
