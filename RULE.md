# Rules

How react-renderable code is written.

## Files

One folder per primitive under `components/`, named in `snake_case`:

```
components/guard/
  guard.tsx     the primitive
  type.ts       its props
```

Shared logic lives in `utils/`, one folder per concern, with the same split. The only index file is `src/index.ts`, which exports every primitive, helper and props type.

Relative imports end in `.js`, and types are imported with `import type`.

## Naming

| what          | convention               | example                    |
| ------------- | ------------------------ | -------------------------- |
| folder, file  | `snake_case`             | `components/swap/swap.tsx` |
| primitive     | `PascalCase`             | `Guard`                    |
| part          | `Primitive.Part`         | `Switch.Case`              |
| props type    | `<Primitive>Props`       | `GuardProps`               |
| part props    | `<Primitive><Part>Props` | `SwitchCaseProps`          |
| helper        | `camelCase`              | `renderableRender`         |

Props read as a sentence at the call site: `guardIf`, `thenRender`, `shouldHide`, `swapOn`, `itemExtractor`.

## Props

- Props are optional and have a default. Missing input renders nothing instead of throwing.
- A slot that is rendered conditionally takes a `Renderable` (a component or a node). A slot that always passes through takes a `ReactNode`.

## Rendering

- Primitives add nothing to the tree: no wrapper element, no context, no state.
- Slots are rendered through `renderableRender`. Its second argument, `children`, is only passed by wrappers.

## Types

- Generics are inferred from the props: `List<T>` takes `T` from `array`.
- The type assertion needed to build on `Tag` lives in `Tag.forward` only.
