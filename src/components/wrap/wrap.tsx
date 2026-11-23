import { elementWithChildren } from "../../utils/element/element.js";

import type { ReactNode } from "react";
import type { WrapProps } from "./type.js";

export const Wrap = ({ with: wrappers, when = true, children = null }: WrapProps) => {
  if (!when) return children;

  return wrappers.reduceRight<ReactNode>((inner, wrapper) => elementWithChildren(wrapper, inner), children);
};
