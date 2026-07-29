import { createElement } from "react";

import type { ComponentPropsWithRef, ElementType } from "react";

export type TagProps<T extends ElementType = "div"> = {
  as?: T;
} & Omit<ComponentPropsWithRef<T>, "as">;

export const Tag = <T extends ElementType = "div">({ as, children, ...rest }: TagProps<T>) => {
  const Component = as ?? "div";

  return createElement(Component, rest, children);
};
