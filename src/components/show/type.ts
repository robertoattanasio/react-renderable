import type { ReactElement, ReactNode } from "react";

export type ShowProps = {
  when: unknown;
  fallback?: ReactNode;
  within?: ReactElement;
  children?: ReactNode;
};
