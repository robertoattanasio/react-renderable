import type { Renderable } from "../../utils/renderable/type.js";

export type GuardProps = {
  guardIf?: boolean;
  thenRender?: Renderable;
  shouldHide?: boolean;
  children?: Renderable;
};
