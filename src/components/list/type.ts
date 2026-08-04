import type { ReactNode } from "react";

export type ListProps<T> = {
  array?: readonly T[];
  itemExtractor?: ((args: { row: T; index: number }) => ReactNode) | null;
};
