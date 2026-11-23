# react-renderable

## 2.0.0

### Major Changes

Every primitive now lives on one namespace, `r`, and takes plain JSX. There are no aliases for the 1.x names.

- `import { r } from "react-renderable"`: `r.guard`, `r.show`, `r.switch`, `r.each`, `r.repeat`, `r.join`, `r.wrap`, `r.inject`, `r.portal`, `r.tag`.
- Slots take elements, never components: `then={<Footer />}`, not `then={Footer}`.
- A function is accepted only in `map`, on `r.each`, `r.repeat` and `r.join`. The key goes on the element it returns; without one, the index is used.
- Core props are required: `when`, `value`, `items` and `map` of `r.each`, `times` and `map` of `r.repeat`, `with` of `r.wrap`, `to`.
- New: `r.show`, `r.repeat`, `r.join`.
- New: `within` on `r.guard`, `r.show`, `r.switch`, `r.each`, `r.repeat` and `r.join`. It's always rendered, with the chosen content as its direct children, and every branch gets a key of its own.
- `r.switch` matches `value` against `is` with `Object.is`, reads cases inside fragments at any depth, and always picks the first default, even an empty one.
- `Renderable` and `renderableRender` are no longer exported.
- `TagProps` infers `T` from `as` only, so the other props are checked against the chosen element: `as="div"` now rejects `href`, and event handlers get the right event type. The types need TypeScript 5.7 or newer.

### Migration

| 1.x                                                                | 2.0                                                                      |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `<Guard guardIf={c} thenRender={x}>`                               | `<r.guard when={c} then={x}>`                                            |
| `<Guard guardIf={c} shouldHide>`                                   | `<r.guard when={c}>`                                                     |
| `<Switch>` / `<Switch.Case when={a === "x"}>` / `<Switch.Default>` | `<r.switch value={a}>` / `<r.switch.case is="x">` / `<r.switch.default>` |
| `<Swap.Boolean components={[a, b]} swapOn={c} />`                  | `<r.show when={c} fallback={a}>{b}</r.show>`                             |
| `<List array={xs} itemExtractor={({ row, index }) => …} />`        | `<r.each items={xs} map={(item, index) => <X key={…} />} />`             |
| `<Wrap components={[A, <B />]}>`                                   | `<r.wrap with={[<A />, <B />]}>`                                         |
| `<Inject components={xs} onTop>` / `<Inject components={xs}>`      | `<r.inject before={…}>` / `<r.inject after={…}>`                         |
| `<Portal element={el}>`                                            | `<r.portal to={el}>`                                                     |
| `<Tag as="section">` / `Tag.forward`                               | `<r.tag as="section">` / `r.tag.forward`                                 |
| `thenRender={Footer}` (component)                                  | `then={<Footer />}` (element)                                            |
| `Renderable`, `renderableRender`                                   | not exported                                                             |
| `SwapBooleanProps`, `ListProps`                                    | removed; new `ShowProps`, `EachProps`, `RepeatProps`, `JoinProps`        |

A `Switch.Case` with a condition instead of a value has no direct equivalent in `r.switch`: turn it into nested `r.guard` or `r.show`, or into a comparison by value.

## 1.0.8

### Patch Changes

- ea1cd86: Mark `Portal` as a client component with `"use client"`. Server Components can now import from `react-renderable` without loading `createPortal`, which the server build of `react-dom` doesn't export.
- ea1cd86: Remove the `development` condition from `exports`. Bundlers in development mode received the TypeScript source instead of the compiled build; every environment now resolves `dist`.

## 1.0.7

### Patch Changes

- `Guard` renders `thenRender` for any value other than `null` or `undefined`, so `thenRender={0}` renders `0`. `shouldHide` still wins over `thenRender`.
- Relative imports use the `.js` extension and types are imported with `import type`.

## 1.0.6

### Patch Changes

- a50595a: Point `repository` and `bugs` at this package's own repository instead of the documentation site, and link the npm package from the README.

## 1.0.5

### Patch Changes

- a1b8ebf: Package refactor

## 1.0.4

### Patch Changes

- `TagProps` accepts an optional second parameter for the own props of a component built on Tag: same-named native props are replaced by them
- `Tag.forward` added to forward the remaining props of a polymorphic component to Tag, with an optional fallback tag

## 1.0.3

### Patch Changes

- 6357b87: Internal folders refactor

## 1.0.2

### Patch Changes

- 683de9f: Minor fixes in package.json
