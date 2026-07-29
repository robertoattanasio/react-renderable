import { renderableRender } from "../helpers/renderable_render";

import type { Renderable } from "../helpers/renderable_render";

type SwapBooleanProps = {
  components?: Renderable[];
  swapOn?: boolean;
};

const Boolean = ({ components = [], swapOn = false }: SwapBooleanProps) =>
  renderableRender(components[swapOn ? 1 : 0]);

export const Swap = {
  Boolean,
};
