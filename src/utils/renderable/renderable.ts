import { cloneElement, createElement, isValidElement } from "react";

import type { ReactNode } from "react";
import { Renderable } from "./type";

export const renderableRender = (renderable: Renderable, children?: ReactNode): ReactNode => {
  if (typeof renderable === "function") return createElement(renderable, null, children);
  if (children !== undefined && isValidElement(renderable)) return cloneElement(renderable, undefined, children);

  return renderable;
};
