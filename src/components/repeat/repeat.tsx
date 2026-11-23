import { elementWithChildren, elementWithKey } from "../../utils/element/element.js";

import type { RepeatProps } from "./type.js";

export const Repeat = ({ times, map, within }: RepeatProps) => {
  const length = Number.isFinite(times) && times > 0 ? Math.floor(times) : 0;
  const content = length ? Array.from({ length }, (_, index) => elementWithKey(map(index), index)) : null;

  return within ? elementWithChildren(within, content) : content;
};
