import type { ReactNode } from "react";
import { Renderable } from "../../utils/renderable/type";

export type SwitchCaseProps = {
  when?: boolean;
  children?: Renderable;
};

export type SwitchDefaultProps = {
  children?: Renderable;
};

export type SwitchProps = {
  children?: ReactNode;
};
