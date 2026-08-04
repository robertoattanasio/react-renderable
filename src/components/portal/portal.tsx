import { createPortal } from "react-dom";

import { renderableRender } from "../../utils/renderable/renderable.js";
import { PortalProps } from "./type.js";

export const Portal = ({ element = null, children }: PortalProps) => {
  if (!element) return null;

  return createPortal(renderableRender(children), element);
};
