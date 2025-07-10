/// <reference types="react" />
import { SystemStyleObject } from "@chakra-ui/styled-system";
import { UseEditableReturn } from "./use-editable";
export declare const EditableStylesProvider: import("react").Provider<Record<string, SystemStyleObject>>, useEditableStyles: () => Record<string, SystemStyleObject>;
export type EditableContext = Omit<UseEditableReturn, "htmlProps">;
export declare const EditableProvider: import("react").Provider<EditableContext>, useEditableContext: () => EditableContext;
