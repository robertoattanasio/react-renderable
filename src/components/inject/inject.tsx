import type { InjectProps } from "./type.js";

export const Inject = ({ before = null, after = null, children }: InjectProps) => (
  <>
    {before}
    {children}
    {after}
  </>
);
