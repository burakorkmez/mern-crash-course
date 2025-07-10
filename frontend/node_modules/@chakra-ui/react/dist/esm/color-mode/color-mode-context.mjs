'use client';
import { createContext, useContext } from 'react';

const ColorModeContext = createContext({});
ColorModeContext.displayName = "ColorModeContext";
function useColorMode() {
  const context = useContext(ColorModeContext);
  if (context === void 0) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
}
function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

export { ColorModeContext, useColorMode, useColorModeValue };
