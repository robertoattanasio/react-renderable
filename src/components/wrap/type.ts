import type { ReactElement, ReactNode } from "react";

export type WrapProps = {
  with: readonly ReactElement[];
  when?: unknown;
  children?: ReactNode;
};
