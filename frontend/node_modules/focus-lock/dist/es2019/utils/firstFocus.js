import { correctNode } from './correctFocus';
export const pickFirstFocus = (nodes) => {
    if (nodes[0] && nodes.length > 1) {
        return correctNode(nodes[0], nodes);
    }
    return nodes[0];
};
export const pickFocusable = (nodes, node) => {
    return nodes.indexOf(correctNode(node, nodes));
};
