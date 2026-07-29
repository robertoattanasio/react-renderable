import { renderableRender } from "../helpers/renderable_render.js";

import type { ReactNode } from "react";
import type { Renderable } from "../helpers/renderable_render.js";

export type WrapProps = {
  components?: Renderable[];
  children?: ReactNode;
};

export const Wrap = ({ components = [], children }: WrapProps) =>
  components.reduceRight<ReactNode>(
    (wrappedChildren, component) => renderableRender(component, wrappedChildren),
    children,
  );
