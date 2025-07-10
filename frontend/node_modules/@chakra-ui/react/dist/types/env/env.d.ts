/// <reference types="react" />
interface Environment {
    getWindow: () => Window;
    getDocument: () => Document;
}
export declare function useEnvironment({ defer }?: {
    defer?: boolean;
}): Environment;
export interface EnvironmentProviderProps {
    children: React.ReactNode;
    disabled?: boolean;
    environment?: Environment;
}
export declare function EnvironmentProvider(props: EnvironmentProviderProps): import("react/jsx-runtime").JSX.Element;
export declare namespace EnvironmentProvider {
    var displayName: string;
}
export {};
