# r.each

Calls `map` once for every item and renders what it returns, like `Array.map` on any iterable.

```ts
r.each<T>(props: EachProps<T>): ReactNode
```

| Prop     | Type                                    | Required | Default |                                                 |
| -------- | --------------------------------------- | -------- | ------- | ----------------------------------------------- |
| `items`  | `Iterable<T>`                           | yes      |         | an array, a `Set`, a `Map`, …                   |
| `map`    | `(item: T, index: number) => ReactNode` | yes      |         | renders one item                                |
| `empty`  | `ReactNode`                             |          | `null`  | rendered when `items` is empty                  |
| `within` | `ReactElement`                          |          |         | see [within and key](./slots.md#within-and-key) |

## Behavior

- `T` is inferred from `items`.
- The key goes on the element `map` returns, as with `Array.map`. Without one, the item is keyed by its index.
- A `Map` gives `[key, value]` pairs, as when iterated.
- With `within`, the items become its direct children. `empty` is keyed `"empty"`, unless it already has a key.

## Example

```tsx
<ul>
  <r.each
    items={projects}
    map={(project) => <li key={project.slug}>{project.title}</li>}
    empty={<li>No projects</li>}
  />
</ul>
```
