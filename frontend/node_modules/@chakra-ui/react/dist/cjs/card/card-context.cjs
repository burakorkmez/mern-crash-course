'use client';
'use strict';

var providers = require('../system/providers.cjs');

const [CardStylesProvider, useCardStyles] = providers.createStylesContext("Card");

exports.CardStylesProvider = CardStylesProvider;
exports.useCardStyles = useCardStyles;
