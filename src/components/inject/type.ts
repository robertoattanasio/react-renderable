import type { ReactNode } from "react";
import type { Renderable } from "../../utils/renderable/type.js";

export type InjectProps = {
  components?: Renderable[];
  onTop?: boolean;
  children?: ReactNode;
};
