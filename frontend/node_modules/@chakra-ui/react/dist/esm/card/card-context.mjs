'use client';
import { createStylesContext } from '../system/providers.mjs';

const [CardStylesProvider, useCardStyles] = createStylesContext("Card");

export { CardStylesProvider, useCardStyles };
