import type { ReactNode } from "react";
import { renderableRender } from "../../utils/renderable/renderable.js";
import { WrapProps } from "./type.js";

export const Wrap = ({ components = [], children }: WrapProps) =>
  components.reduceRight<ReactNode>(
    (wrappedChildren, component) => renderableRender(component, wrappedChildren),
    children,
  );
