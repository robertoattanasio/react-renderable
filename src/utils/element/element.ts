import { Children, Fragment, cloneElement, isValidElement } from "react";

import type { Key, ReactElement, ReactNode } from "react";

export const elementWithChildren = (element: ReactElement, children: ReactNode): ReactElement =>
  cloneElement(element, undefined, children);

export const elementWithKey = (node: ReactNode, key: Key): ReactNode =>
  isValidElement(node) && node.key === null ? cloneElement(node, { key }) : node;

export const elementFlatten = (children: ReactNode, prefix = ""): ReactNode[] =>
  Children.toArray(children).flatMap((child) => {
    if (!isValidElement<{ children?: ReactNode }>(child)) return [child];

    const key = `${prefix}${child.key}`;

    if (child.type === Fragment) return elementFlatten(child.props.children, `${key}/`);

    return [prefix ? cloneElement(child, { key }) : child];
  });
