import { elementWithChildren, elementWithKey } from "../../utils/element/element.js";

import type { GuardProps } from "./type.js";

export const Guard = ({ when, then = null, within, children = null }: GuardProps) => {
  const content = when ? elementWithKey(then, "then") : elementWithKey(children, "children");

  return within ? elementWithChildren(within, content) : content;
};
