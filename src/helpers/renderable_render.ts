import { cloneElement, createElement, isValidElement } from "react";

import type { ComponentType, ReactNode } from "react";

/**
 * A renderable accepts both forms: the component itself (`Component`) or its element (`<Component />`).
 * Use the element form when the renderable needs props.
 */
export type Renderable = ComponentType<{ children: ReactNode }> | ReactNode;

/**
 * Renders a renderable, handing it `children` when provided.
 * The element form has its own children replaced, so wrappers stay in control of what they wrap.
 */
export const renderableRender = (renderable: Renderable, children?: ReactNode): ReactNode => {
  if (typeof renderable === "function") return createElement(renderable, null, children);
  if (children !== undefined && isValidElement(renderable)) return cloneElement(renderable, undefined, children);

  return renderable;
};
