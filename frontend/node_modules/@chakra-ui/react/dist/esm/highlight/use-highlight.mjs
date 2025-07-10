'use client';
import { useMemo } from 'react';
import { highlightWords } from './highlight-words.mjs';

function useHighlight(props) {
  const { text, query } = props;
  return useMemo(() => highlightWords({ text, query }), [text, query]);
}

export { useHighlight };
