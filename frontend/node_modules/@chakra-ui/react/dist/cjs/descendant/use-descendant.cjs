'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');
var descendant = require('./descendant.cjs');
var utils$1 = require('./utils.cjs');

function createDescendantContext() {
  const [DescendantsContextProvider, useDescendantsContext] = utils.createContext({
    name: "DescendantsProvider",
    errorMessage: "useDescendantsContext must be used within DescendantsProvider"
  });
  const useDescendant = (options) => {
    const descendants = useDescendantsContext();
    const [index, setIndex] = React.useState(-1);
    const ref = React.useRef(null);
    utils$1.useSafeLayoutEffect(() => {
      return () => {
        if (!ref.current)
          return;
        descendants.unregister(ref.current);
      };
    }, []);
    utils$1.useSafeLayoutEffect(() => {
      if (!ref.current)
        return;
      const dataIndex = Number(ref.current.dataset["index"]);
      if (index != dataIndex && !Number.isNaN(dataIndex)) {
        setIndex(dataIndex);
      }
    });
    const refCallback = options ? utils$1.cast(descendants.register(options)) : utils$1.cast(descendants.register);
    return {
      descendants,
      index,
      enabledIndex: descendants.enabledIndexOf(ref.current),
      register: hooks.mergeRefs(refCallback, ref)
    };
  };
  const useDescendants = () => {
    const descendants = React.useRef(new descendant.DescendantsManager());
    utils$1.useSafeLayoutEffect(() => {
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

exports.createDescendantContext = createDescendantContext;
