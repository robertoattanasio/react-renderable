import type { ReactNode } from "react";
import type { Renderable } from "../../utils/renderable/type.js";

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
