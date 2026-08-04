import { ListProps } from "./type";

export const List = <T,>({ array = [], itemExtractor = null }: ListProps<T>) => {
  if (!array.length || !itemExtractor) return null;

  return <>{array.map((row, index) => itemExtractor({ row, index }))}</>;
};
