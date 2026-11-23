import type { ReactElement, ReactNode } from "react";

export type JoinProps<T> = {
  separator?: ReactNode;
  items?: Iterable<T>;
  map?: (item: T, index: number) => ReactNode;
  within?: ReactElement;
  children?: ReactNode;
};
