import type { ReactNode } from "react";
import { Renderable } from "../../utils/renderable/type";

export type InjectProps = {
  components?: Renderable[];
  onTop?: boolean;
  children?: ReactNode;
};
