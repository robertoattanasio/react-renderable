import { Fragment } from "react";

import { renderableRender } from "../helpers/renderable_render";

import type { ReactNode } from "react";
import type { Renderable } from "../helpers/renderable_render";

type InjectProps = {
  components?: Renderable[];
  onTop?: boolean;
  children?: ReactNode;
};

export const Inject = ({ components = [], onTop = false, children }: InjectProps) => {
  const injected = components.map((component, index) => (
    <Fragment key={index}>{renderableRender(component)}</Fragment>
  ));

  return (
    <>
      {onTop && injected}
      {children}
      {!onTop && injected}
    </>
  );
};
