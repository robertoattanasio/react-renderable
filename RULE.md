# Conventions

How react-renderable is written. The library is small on purpose, and these rules are what keeps it that way.

## The approach

**One convention, eight primitives.** Every slot accepts the same two forms — a component or its element — so learning one primitive teaches the others. A new primitive that needs its own convention is not a primitive: it is an application component.

**Nothing is added to the tree.** A primitive renders its branch and nothing around it: no wrapper element, no context, no provider. Composition happens where the consumer put it.

**No state, no effects, no refs** unless the behaviour is impossible without them. `Switch` reads its children, `Wrap` folds an array, `Guard` returns one of three things — all of it during render, none of it retained.

## Files

One folder per primitive, under `components/`, named in `snake_case`:

```
components/guard/
  guard.tsx     the primitive
  type.ts       its props
```

Shared logic lives in `utils/`, one folder per concern, with the same split. Nothing else: no barrel per folder, no index files except the root one.

## Naming

| what          | convention               | example                       |
| ------------- | ------------------------ | ----------------------------- |
| folder, file  | `snake_case`             | `components/swap/swap.tsx`    |
| primitive     | `PascalCase`             | `Guard`                       |
| compound part | `Primitive.Part`         | `Switch.Case`                 |
| props type    | `<Primitive>Props`       | `GuardProps`                  |
| part props    | `<Primitive><Part>Props` | `SwitchCaseProps`             |
| helper        | `camelCase`              | `renderableRender`            |

Props are named for the question they answer, and read as a sentence at the call site: `guardIf`, `thenRender`, `shouldHide`, `swapOn`, `itemExtractor`. A boolean starts with the verb that makes it a condition, not with `is`.

## Props

Every prop is optional and has a default, so a primitive never throws for missing input: it renders nothing. That is what lets `<List array={rows} />` with an empty array, a `Portal` with no target and a `Guard` with no children all be legitimate states rather than bugs.

The rule for which props take a `Renderable`:

- **rendered conditionally** → `Renderable`, so the component form can stay unevaluated
- **always passes through** → plain `ReactNode`, because there is nothing to defer and a second form would only add a way to get it wrong

`children` follows the same rule as any other slot: a `Renderable` in `Guard`, `Portal` and `Switch.Case`, a `ReactNode` in `Wrap` and `Inject`.

## Rendering

Everything resolves through `renderableRender`, never through an ad-hoc check. A component is told apart from a node by `typeof === "function"` — no heuristics, no `isValidElement` guessing on the component form.

Pass `children` as its second argument only for wrappers. On the component form they become its children; on the element form they replace the ones that element already had, which is what keeps a wrapper from deciding what it wraps.

## Types

Props types are exported from the root, because consumers build on them — `TagProps<T, OwnProps>` is the foundation margo-ui is written on. Generics stay inferred: `List<T>` takes its type from the array, and a call site should never have to annotate.

Type assertions are allowed only where TypeScript cannot follow a generic through, and they live in one place — `Tag.forward` — instead of being repeated in every component built on `Tag`.

## Comments

The reasoning lives in the documentation site. In the code, comment only what is genuinely surprising: the assertion in `Tag.forward` and the shape of `TagProps` carry a comment because the type system, not the logic, is the hard part there.

## Breaking changes

Renaming a prop, changing a default or changing what a primitive returns for empty input are all breaking — consumers rely on "renders nothing" as much as on "renders this". They ship with a major changeset that says what to rename.
