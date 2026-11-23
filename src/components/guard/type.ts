import type { ReactElement, ReactNode } from "react";

export type GuardProps = {
  when: unknown;
  then?: ReactNode;
  within?: ReactElement;
  children?: ReactNode;
};
