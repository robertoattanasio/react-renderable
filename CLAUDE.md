# react-renderable

Declarative render primitives for React, all sharing one `Renderable` convention. Public package on npm.

## Docs

- [README.md](./README.md): install, links to the docs.
- [docs/](./docs/): one file per primitive and one for `Renderable`, plus [scripts.md](./docs/scripts.md) and [release.md](./docs/release.md).

Read the primitive's doc before changing it. When a primitive changes, update its doc in the same change.

## Structure

```
src/
  index.ts
  components/<name_snake_case>/<name_snake_case>.tsx
  components/<name_snake_case>/type.ts
  utils/renderable/renderable.ts
  utils/renderable/type.ts
docs/
  <name-kebab-case>.md
```

`src/index.ts` is the only index: it exports every primitive, `renderableRender` and every props type.

## Naming

| What         | Convention               | Example            |
| ------------ | ------------------------ | ------------------ |
| folder, file | snake_case               | `swap/swap.tsx`    |
| primitive    | PascalCase               | `Guard`            |
| part         | `Primitive.Part`         | `Switch.Case`      |
| props type   | `<Primitive>Props`       | `GuardProps`       |
| part props   | `<Primitive><Part>Props` | `SwitchCaseProps`  |
| helper       | camelCase                | `renderableRender` |

Props read as a sentence at the call site: `guardIf`, `thenRender`, `shouldHide`, `swapOn`, `itemExtractor`.

## Conventions

- Every prop is optional and has a default. Missing input renders nothing, never throws.
- A slot rendered conditionally takes a `Renderable`. A slot that always passes through takes a `ReactNode`.
- Slots are rendered through `renderableRender`. Its `children` argument is passed only by wrappers.
- Primitives add nothing to the tree: no wrapper element, no context, no state.
- Primitives work as Server Components. `Portal` is the only `"use client"` file.
- Generics are inferred from the props: `List<T>` takes `T` from `array`.
- The type assertion needed to build on `Tag` lives in `Tag.forward` only.
- Relative imports end in `.js`, types are imported with `import type`.
- React and React DOM are peer dependencies. No other dependencies.
- No comments in the code unless asked.

## Adding a primitive

1. `src/components/<name>/<name>.tsx` and `type.ts`.
2. Export it, and its props types, from `src/index.ts`.
3. `docs/<name>.md`, same layout as the others.
4. Link it under API in `README.md`.
5. `npm run ts:check`.
