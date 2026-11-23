"use client";

import { createPortal } from "react-dom";

import type { PortalProps } from "./type.js";

export const Portal = ({ to, children }: PortalProps) => {
  if (!to) return null;

  return createPortal(children, to);
};
