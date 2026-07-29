import { createPortal } from "react-dom";

import { renderableRender } from "../helpers/renderable_render";

import type { Renderable } from "../helpers/renderable_render";

type PortalProps = {
  element?: Element | null;
  children?: Renderable;
};

export const Portal = ({ element = null, children }: PortalProps) => {
  if (!element) return null;

  return createPortal(renderableRender(children), element);
};
