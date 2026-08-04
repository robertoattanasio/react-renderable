import type { ComponentProps, ElementType } from "react";

export type TagProps<T extends ElementType = "div"> = {
  as?: T;
} & Omit<ComponentProps<T>, "as">;
