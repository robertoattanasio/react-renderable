import { elementWithChildren, elementWithKey } from "../../utils/element/element.js";

import type { EachProps } from "./type.js";

export const Each = <T,>({ items, map, empty = null, within }: EachProps<T>) => {
  const list = Array.from(items);
  const content = list.length
    ? list.map((item, index) => elementWithKey(map(item, index), index))
    : elementWithKey(empty, "empty");

  return within ? elementWithChildren(within, content) : content;
};
