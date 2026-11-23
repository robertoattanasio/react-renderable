# r.join

Puts a separator between its children, or between the items it renders from `items` with `map`.

```ts
r.join<T>(props: JoinProps<T>): ReactNode
```

| Prop        | Type                                    | Required |                                                 |
| ----------- | --------------------------------------- | -------- | ----------------------------------------------- |
| `separator` | `ReactNode`                             |          | the separator; without it, the items in a row   |
| `items`     | `Iterable<T>`                           |          | the data to render, with `map`                  |
| `map`       | `(item: T, index: number) => ReactNode` |          | renders one item, as in `r.each`                |
| `within`    | `ReactElement`                          |          | see [within and key](./slots.md#within-and-key) |
| `children`  | `ReactNode`                             |          |                                                 |

## Behavior

- With `items` and `map`, the items are rendered from the data and `children` is ignored. What shouldn't appear is left out of `items`.
- The key of an item goes on the element `map` returns; without one, the index is used.
- Children, or items, that render nothing (`null`, `undefined`, booleans, `""`) are skipped, so separators never double up.
- A child that is a component always counts, even if it renders nothing: `r.join` only sees its children, not what they render. For content that may be missing, use `items`.
- No separator before the first child or after the last.
- Children inside fragments count, at any depth.
- Every child keeps the key of its place in the source, so a child that disappears doesn't shift the keys of the others. Children inside a fragment are prefixed with the fragment's key.
- Every separator is keyed after the child that follows it.

## Example

```tsx
<r.join
  separator={<span aria-hidden>/</span>}
  items={crumbs}
  map={(crumb) => (
    <a key={crumb.url} href={crumb.url}>
      {crumb.name}
    </a>
  )}
/>
```

Static children:

```tsx
<r.join separator=" · ">
  <a href="/docs">Docs</a>
  <a href="/github">GitHub</a>
  <a href="/npm">npm</a>
</r.join>
```
