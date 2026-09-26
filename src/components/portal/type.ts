import type { Renderable } from "../../utils/renderable/type.js";

export type PortalProps = {
  element?: Element | null;
  children?: Renderable;
};
