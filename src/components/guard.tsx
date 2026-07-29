import { renderableRender } from "../helpers/renderable_render.js";

import type { Renderable } from "../helpers/renderable_render.js";

export type GuardProps = {
  guardIf?: boolean;
  thenRender?: Renderable;
  shouldHide?: boolean;
  children?: Renderable;
};

export const Guard = ({ guardIf = false, thenRender = null, shouldHide = false, children }: GuardProps) => {
  if (guardIf && shouldHide) return null;
  if (guardIf && thenRender) return renderableRender(thenRender);
  if (!guardIf) return renderableRender(children);
};
