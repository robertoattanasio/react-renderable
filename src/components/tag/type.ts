import type { ComponentProps, ElementType } from "react";

/**
 * Props of the rendered tag. `OwnProps` are the props added by a component built
 * on r.tag: native props of the same name are replaced by them, not merged with them.
 */
export type TagProps<T extends ElementType = "div", OwnProps = object> = OwnProps & {
  as?: T;
} & Omit<ComponentProps<NoInfer<T>>, "as" | keyof OwnProps>;
