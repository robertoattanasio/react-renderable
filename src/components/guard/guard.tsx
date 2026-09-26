import { renderableRender } from "../../utils/renderable/renderable.js";

import type { GuardProps } from "./type.js";

export const Guard = ({ guardIf = false, thenRender = null, shouldHide = false, children }: GuardProps) => {
  if (!guardIf) return renderableRender(children);
  if (shouldHide || thenRender === null || thenRender === undefined) return null;

  return renderableRender(thenRender);
};
