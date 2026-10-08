---
"react-renderable": patch
---

Mark `Portal` as a client component with `"use client"`. Server Components can now import from `react-renderable` without loading `createPortal`, which the server build of `react-dom` doesn't export.
