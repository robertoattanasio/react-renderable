import { renderableRender } from "../../utils/renderable/renderable.js";
import { GuardProps } from "./type.js";

export const Guard = ({ guardIf = false, thenRender = null, shouldHide = false, children }: GuardProps) => {
  if (guardIf && shouldHide) return null;
  if (guardIf && thenRender) return renderableRender(thenRender);
  if (!guardIf) return renderableRender(children);
};
