/// <reference types="react" />
import { Theme } from "@chakra-ui/theme";
import { Dict } from "@chakra-ui/utils";
import { ToastProviderProps } from "../toast";
import { ProviderProps } from "./provider";
export interface ChakraProviderProps extends ProviderProps {
    /**
     * Provide defaults for `useToast()` usages for `ChakraProvider`s children
     */
    toastOptions?: ToastProviderProps;
}
export type ChakraProviderComponent = React.FC<ChakraProviderProps>;
export declare const createProvider: (providerTheme: Theme | (Omit<Theme, "components"> & {
    components: Dict;
})) => ChakraProviderComponent;
