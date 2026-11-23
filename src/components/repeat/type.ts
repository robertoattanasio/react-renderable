import type { ReactElement, ReactNode } from "react";

export type RepeatProps = {
  times: number;
  map: (index: number) => ReactNode;
  within?: ReactElement;
};
