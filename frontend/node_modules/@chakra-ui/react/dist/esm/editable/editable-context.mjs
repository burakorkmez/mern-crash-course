'use client';
import { createContext } from '@chakra-ui/utils';

const [EditableStylesProvider, useEditableStyles] = createContext({
  name: `EditableStylesContext`,
  errorMessage: `useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Editable />" `
});
const [EditableProvider, useEditableContext] = createContext({
  name: "EditableContext",
  errorMessage: "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"
});

export { EditableProvider, EditableStylesProvider, useEditableContext, useEditableStyles };
