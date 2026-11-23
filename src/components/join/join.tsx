import { Fragment, cloneElement, isValidElement } from "react";

import { elementFlatten, elementWithChildren, elementWithKey } from "../../utils/element/element.js";

import type { ReactNode } from "react";
import type { JoinProps } from "./type.js";

const joinKeyed = (node: ReactNode, key: string) =>
  isValidElement(node) ? cloneElement(node, { key }) : <Fragment key={key}>{node}</Fragment>;

const joinIsRendered = (node: ReactNode) =>
  node !== null && node !== undefined && node !== "" && typeof node !== "boolean";

export const Join = <T,>({ separator = null, items, map, within, children }: JoinProps<T>) => {
  const nodes = (
    items && map
      ? Array.from(items).map((item, index) => elementWithKey(map(item, index), index))
      : elementFlatten(children)
  ).filter(joinIsRendered);
  const content = nodes.length
    ? nodes.flatMap((node, index) => {
        const key = isValidElement(node) ? String(node.key) : `text-${index}`;

        const keyed = isValidElement(node) ? node : joinKeyed(node, key);

        return index && joinIsRendered(separator) ? [joinKeyed(separator, `separator-${key}`), keyed] : [keyed];
      })
    : null;

  return within ? elementWithChildren(within, content) : content;
};
