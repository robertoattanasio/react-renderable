import type { ReactElement, ReactNode } from "react";

export type SwitchProps = {
  value: unknown;
  within?: ReactElement;
  children?: ReactNode;
};

export type SwitchCaseProps = {
  is: unknown;
  children?: ReactNode;
};

export type SwitchDefaultProps = {
  children?: ReactNode;
};
