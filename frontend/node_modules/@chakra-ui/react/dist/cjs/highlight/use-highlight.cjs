'use client';
'use strict';

var React = require('react');
var highlightWords = require('./highlight-words.cjs');

function useHighlight(props) {
  const { text, query } = props;
  return React.useMemo(() => highlightWords.highlightWords({ text, query }), [text, query]);
}

exports.useHighlight = useHighlight;
