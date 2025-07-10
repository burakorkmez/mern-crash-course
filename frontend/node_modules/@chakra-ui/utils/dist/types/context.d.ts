export interface CreateContextOptions<T> {
    strict?: boolean;
    hookName?: string;
    providerName?: string;
    errorMessage?: string;
    name?: string;
    defaultValue?: T;
}
export type CreateContextReturn<T> = [
    React.Provider<T>,
    () => T,
    React.Context<T>
];
export declare function createContext<T>(options?: CreateContextOptions<T>): CreateContextReturn<T>;
