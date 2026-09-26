import { renderableRender } from "../../utils/renderable/renderable.js";
import type { SwapBooleanProps } from "./type.js";

const Boolean = ({ components = [], swapOn = false }: SwapBooleanProps) => renderableRender(components[swapOn ? 1 : 0]);

export const Swap = {
  Boolean,
};
