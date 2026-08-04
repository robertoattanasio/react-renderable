import { createElement, ElementType } from "react";
import { TagProps } from "./type";

export const Tag = <T extends ElementType = "div">({ as, children, ...rest }: TagProps<T>) => {
  const Component = as ?? "div";

  return createElement(Component, rest, children);
};
