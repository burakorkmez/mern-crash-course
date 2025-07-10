'use client';
import { mergeRefs } from '@chakra-ui/hooks';
import { createContext } from '@chakra-ui/utils';
import { useState, useRef } from 'react';
import { DescendantsManager } from './descendant.mjs';
import { useSafeLayoutEffect, cast } from './utils.mjs';

function createDescendantContext() {
  const [DescendantsContextProvider, useDescendantsContext] = createContext({
    name: "DescendantsProvider",
    errorMessage: "useDescendantsContext must be used within DescendantsProvider"
  });
  const useDescendant = (options) => {
    const descendants = useDescendantsContext();
    const [index, setIndex] = useState(-1);
    const ref = useRef(null);
    useSafeLayoutEffect(() => {
      return () => {
        if (!ref.current)
          return;
        descendants.unregister(ref.current);
      };
    }, []);
    useSafeLayoutEffect(() => {
      if (!ref.current)
        return;
      const dataIndex = Number(ref.current.dataset["index"]);
      if (index != dataIndex && !Number.isNaN(dataIndex)) {
        setIndex(dataIndex);
      }
    });
    const refCallback = options ? cast(descendants.register(options)) : cast(descendants.register);
    return {
      descendants,
      index,
      enabledIndex: descendants.enabledIndexOf(ref.current),
      register: mergeRefs(refCallback, ref)
    };
  };
  const useDescendants = () => {
    const descendants = useRef(new DescendantsManager());
    useSafeLayoutEffect(() => {
      return () => descendants.current.destroy();
    });
    return descendants.current;
  };
  return [
    // context provider
    DescendantsContextProvider,
    // call this when you need to read from context
    useDescendantsContext,
    // descendants state information, to be called and passed to `ContextProvider`
    useDescendants,
    // descendant index information
    useDescendant
  ];
}

export { createDescendantContext };
