import { isValidElement } from "react";

import { elementFlatten, elementWithChildren, elementWithKey } from "../../utils/element/element.js";

import type { ReactElement, ReactNode } from "react";
import type { SwitchCaseProps, SwitchDefaultProps, SwitchProps } from "./type.js";

const SwitchCase = (_props: SwitchCaseProps): ReactNode => null;
const SwitchDefault = (_props: SwitchDefaultProps): ReactNode => null;

const isElementOf = <P,>(node: ReactNode, marker: (props: P) => ReactNode): node is ReactElement<P> =>
  isValidElement(node) && node.type === marker;

const switchContent = (value: unknown, children: ReactNode): ReactNode => {
  const nodes = elementFlatten(children);
  const cases = nodes.filter((node) => isElementOf(node, SwitchCase));
  const index = cases.findIndex((node) => Object.is(node.props.is, value));

  if (index !== -1) return elementWithKey(cases[index].props.children ?? null, `case-${index}`);

  const fallback = nodes.find((node) => isElementOf(node, SwitchDefault));

  return fallback ? elementWithKey(fallback.props.children ?? null, "default") : null;
};

const SwitchRoot = ({ value, within, children }: SwitchProps) => {
  const content = switchContent(value, children);

  return within ? elementWithChildren(within, content) : content;
};

export const Switch = Object.assign(SwitchRoot, { case: SwitchCase, default: SwitchDefault });
