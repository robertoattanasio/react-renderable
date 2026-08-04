import { Children, isValidElement } from "react";

import { renderableRender } from "../../utils/renderable/renderable.js";

import type { ReactElement, ReactNode } from "react";

import { Renderable } from "../../utils/renderable/type.js";
import { SwitchCaseProps, SwitchDefaultProps, SwitchProps } from "./type.js";

const Case = (_props: SwitchCaseProps): ReactNode => null;
const Default = (_props: SwitchDefaultProps): ReactNode => null;

const isElementOf = <P,>(node: ReactNode, marker: (props: P) => ReactNode): node is ReactElement<P> =>
  isValidElement(node) && node.type === marker;

const SwitchRoot = ({ children }: SwitchProps): ReactNode => {
  let fallback: Renderable = undefined;

  for (const child of Children.toArray(children)) {
    if (isElementOf<SwitchCaseProps>(child, Case)) {
      if (child.props.when) return renderableRender(child.props.children);

      continue;
    }

    if (isElementOf<SwitchDefaultProps>(child, Default) && fallback === undefined) fallback = child.props.children;
  }

  return renderableRender(fallback);
};

export const Switch = Object.assign(SwitchRoot, { Case, Default });
