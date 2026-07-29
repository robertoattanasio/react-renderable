import type { ReactNode } from "react";

type ListProps<T> = {
  array?: T[];
  itemExtractor?: ((args: { row: T; index: number }) => ReactNode) | null;
};

export const List = <T,>({ array = [], itemExtractor = null }: ListProps<T>) => {
  if (!array.length || !itemExtractor) return null;

  return <>{array.map((row, index) => itemExtractor({ row, index }))}</>;
};
