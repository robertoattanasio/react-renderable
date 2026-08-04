import { Fragment } from "react";

import { renderableRender } from "../../utils/renderable/renderable.js";
import { InjectProps } from "./type.js";

export const Inject = ({ components = [], onTop = false, children }: InjectProps) => {
  const injected = components.map((component, index) => <Fragment key={index}>{renderableRender(component)}</Fragment>);

  return (
    <>
      {onTop && injected}
      {children}
      {!onTop && injected}
    </>
  );
};
