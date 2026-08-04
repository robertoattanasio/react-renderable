import type { ComponentType, ReactNode } from "react";

export type Renderable = ComponentType<{ children: ReactNode }> | ReactNode;
