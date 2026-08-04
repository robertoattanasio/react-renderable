import { ReactNode } from "react";
import { Renderable } from "../../utils/renderable/type";

export type WrapProps = {
  components?: Renderable[];
  children?: ReactNode;
};
