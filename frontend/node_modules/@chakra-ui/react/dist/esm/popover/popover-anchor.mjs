'use client';
import { jsx, Fragment } from 'react/jsx-runtime';
import { Children, cloneElement } from 'react';
import { usePopoverContext } from './popover-context.mjs';
import { getElementRef } from '../element-ref.mjs';

function PopoverAnchor(props) {
  const child = Children.only(props.children);
  const { getAnchorProps } = usePopoverContext();
  return /* @__PURE__ */ jsx(Fragment, { children: cloneElement(child, getAnchorProps(child.props, getElementRef(child))) });
}
PopoverAnchor.displayName = "PopoverAnchor";

export { PopoverAnchor };
