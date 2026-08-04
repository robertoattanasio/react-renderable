import { Renderable } from "../../utils/renderable/type";

export type GuardProps = {
  guardIf?: boolean;
  thenRender?: Renderable;
  shouldHide?: boolean;
  children?: Renderable;
};
