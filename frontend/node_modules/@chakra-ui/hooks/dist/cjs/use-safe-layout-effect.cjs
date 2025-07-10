'use client';
'use strict';

var react = require('react');

const useSafeLayoutEffect = Boolean(globalThis?.document) ? react.useLayoutEffect : react.useEffect;

exports.useSafeLayoutEffect = useSafeLayoutEffect;
