import { ChakraTheme, Theme } from "@chakra-ui/theme";
type CloneKey<Target, Key> = Key extends keyof Target ? Target[Key] : unknown;
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
/**
 * Represents a loose but specific type for the theme override.
 * It provides autocomplete hints for extending the theme, but leaves room
 * for adding properties.
 */
type DeepThemeExtension<BaseTheme, ThemeType> = {
    [Key in keyof BaseTheme]?: BaseTheme[Key] extends (...args: any[]) => any ? DeepThemeExtension<DeepPartial<ReturnType<BaseTheme[Key]>>, CloneKey<ThemeType, Key>> : BaseTheme[Key] extends Array<any> ? CloneKey<ThemeType, Key> : BaseTheme[Key] extends object ? DeepThemeExtension<DeepPartial<BaseTheme[Key]>, CloneKey<ThemeType, Key>> : CloneKey<ThemeType, Key>;
};
export declare type ThemeOverride<BaseTheme = Theme> = DeepPartial<ChakraTheme> & DeepThemeExtension<BaseTheme, ChakraTheme> & Record<string, any>;
export type ThemeExtension<Override extends ThemeOverride = ThemeOverride> = (themeOverride: Override) => Override;
type AnyFunction<T = any> = (...args: T[]) => any;
export type BaseThemeWithExtensions<BaseTheme extends ChakraTheme, Extensions extends readonly [...any]> = BaseTheme & (Extensions extends [infer L, ...infer R] ? L extends AnyFunction ? ReturnType<L> & BaseThemeWithExtensions<BaseTheme, R> : L & BaseThemeWithExtensions<BaseTheme, R> : Extensions);
export declare const createExtendTheme: (theme: Record<string, any>) => (...extensions: (Record<string, any> | ((theme: Record<string, any>) => Record<string, any>))[]) => Record<string, any>;
export declare const extendTheme: (...extensions: (Record<string, any> | ((theme: Record<string, any>) => Record<string, any>))[]) => Record<string, any>;
export declare const extendBaseTheme: (...extensions: (Record<string, any> | ((theme: Record<string, any>) => Record<string, any>))[]) => Record<string, any>;
export declare function mergeThemeOverride(...overrides: any[]): any;
export {};
