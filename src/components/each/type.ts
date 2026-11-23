import type { ReactElement, ReactNode } from "react";

export type EachProps<T> = {
  items: Iterable<T>;
  map: (item: T, index: number) => ReactNode;
  empty?: ReactNode;
  within?: ReactElement;
};
