import { renderableRender } from "../helpers/renderable_render.js";

import type { Renderable } from "../helpers/renderable_render.js";

export type SwapBooleanProps = {
  components?: Renderable[];
  swapOn?: boolean;
};

const Boolean = ({ components = [], swapOn = false }: SwapBooleanProps) =>
  renderableRender(components[swapOn ? 1 : 0]);

export const Swap = {
  Boolean,
};
