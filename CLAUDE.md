# react-renderable

Declarative render primitives for React, all under one `r` namespace. Public package on npm.

## Docs

- [README.md](./README.md): install, usage, links to the docs.
- [docs/](./docs/): one file per primitive and [slots.md](./docs/slots.md) for the rules they share, plus [scripts.md](./docs/scripts.md) and [release.md](./docs/release.md).

Read the primitive's doc before changing it. When a primitive changes, update its doc in the same change.

## Structure

```
src/
  index.ts
  r.ts
  components/<name_snake_case>/<name_snake_case>.tsx
  components/<name_snake_case>/type.ts
  utils/element/element.ts
docs/
  <name-kebab-case>.md
```

- `src/r.ts` builds `r` from the primitives. It is not `"use client"`.
- `src/index.ts` is the only index: it exports `r` and every props type.
- `src/utils/element/element.ts` holds the internal helpers: clone an element with children, apply a key to an element, flatten children and fragments. They are not exported.

## Naming

| What               | Convention               | Example           |
| ------------------ | ------------------------ | ----------------- |
| folder, file       | snake_case               | `guard/guard.tsx` |
| primitive          | `r.<name>`               | `r.guard`         |
| part               | `r.<name>.<part>`        | `r.switch.case`   |
| function in source | PascalCase               | `Guard`           |
| props type         | `<Primitive>Props`       | `GuardProps`      |
| part props         | `<Primitive><Part>Props` | `SwitchCaseProps` |
| helper             | camelCase, domain first  | `elementWithKey`  |

The function keeps its PascalCase name in the source (`const Guard = …`, then `guard: Guard` in `r`), so React DevTools and error messages show a readable name.

## Conventions

- Core props are required: `when`, `value`, `items` and `map` of `r.each`, `times` and `map` of `r.repeat`, `with` of `r.wrap`, `to`. The others are optional and have a default. A missing optional input renders nothing, never throws.
- Slots take JSX only. A slot rendered in place is a `ReactNode`, a slot that wraps (`within`, `with`) is a `ReactElement`. See [slots.md](./docs/slots.md).
- A function is accepted only in `map`, where the primitive passes a value. Never as a child.
- Primitives add nothing to the tree: no wrapper element, no context, no state. `within` is the only opt-in exception.
- Primitives work as Server Components. `r.portal` is the only `"use client"` file.
- Generics are inferred from the props: `r.each` takes `T` from `items`.
- The type assertion needed to build on `r.tag` lives in `r.tag.forward` only.
- Relative imports end in `.js`, types are imported with `import type`.
- React and React DOM are peer dependencies. No other dependencies.
- No comments in the code unless asked.

## Adding a primitive

1. `src/components/<name>/<name>.tsx` and `type.ts`.
2. Register it in `r` in `src/r.ts`, and export its props types from `src/index.ts`.
3. `docs/<name>.md`, same layout as the others.
4. Link it under API in `README.md`.
5. `npm run ts:check`.
