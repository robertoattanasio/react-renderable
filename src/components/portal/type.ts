import type { ReactNode } from "react";

export type PortalProps = {
  to: Element | null;
  children?: ReactNode;
};
