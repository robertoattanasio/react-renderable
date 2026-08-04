import type { ComponentProps, ElementType } from "react";

type TagNativeProps<T extends ElementType> = {
  as?: T;
} & Omit<ComponentProps<T>, "as">;

/**
 * Props of the rendered tag. `OwnProps` are the props added by a component built
 * on Tag: native props of the same name are replaced by them, not merged with them.
 */
export type TagProps<T extends ElementType = "div", OwnProps = object> = OwnProps &
  Omit<TagNativeProps<T>, keyof OwnProps>;
