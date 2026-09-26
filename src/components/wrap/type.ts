import type { ReactNode } from "react";
import type { Renderable } from "../../utils/renderable/type.js";

export type WrapProps = {
  components?: Renderable[];
  children?: ReactNode;
};
