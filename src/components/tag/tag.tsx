import { createElement, ElementType } from "react";
import { TagProps } from "./type";

export const Tag = <T extends ElementType = "div">({ as, children, ...rest }: TagProps<T>) => {
  const Component = as ?? "div";

  return createElement(Component, rest, children);
};

/**
 * Forwards to Tag the remaining props of a component built on Tag, leaving `as`
 * untouched: it stays whatever the consumer chose, or falls back to `fallback`
 * when the component renders a tag other than `div`.
 *
 * TypeScript cannot prove that the remaining props of a generic component match
 * `ComponentProps<T>`, which stays unresolved until `T` is instantiated: the
 * assertion lives here instead of in every component built on Tag.
 */
Tag.forward = <T extends ElementType>(props: object, fallback?: ElementType) => {
  const { as, ...rest } = props as { as?: ElementType };

  return { as: as ?? fallback, ...rest } as TagProps<T>;
};
