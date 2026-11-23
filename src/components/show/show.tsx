import { elementWithChildren, elementWithKey } from "../../utils/element/element.js";

import type { ShowProps } from "./type.js";

export const Show = ({ when, fallback = null, within, children = null }: ShowProps) => {
  const content = when ? elementWithKey(children, "children") : elementWithKey(fallback, "fallback");

  return within ? elementWithChildren(within, content) : content;
};
