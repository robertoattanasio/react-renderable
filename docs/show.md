# r.show

The positive side of `r.guard`: renders its children when `when` holds, otherwise `fallback`.

```ts
r.show(props: ShowProps): ReactNode
```

| Prop       | Type           | Required | Default |                                                 |
| ---------- | -------------- | -------- | ------- | ----------------------------------------------- |
| `when`     | `unknown`      | yes      |         | when truthy, the children are rendered          |
| `fallback` | `ReactNode`    |          | `null`  | what to render otherwise                        |
| `within`   | `ReactElement` |          |         | see [within and key](./slots.md#within-and-key) |
| `children` | `ReactNode`    |          |         |                                                 |

## Behavior

| `when` | Renders                           |
| ------ | --------------------------------- |
| truthy | `children`                        |
| falsy  | `fallback`, or nothing without it |

- The branches are keyed `"children"` and `"fallback"`, unless they already have a key.

> Children are evaluated right away. Content that reads a value the primitive checks (`user.name` when `user` can be `null`, `state.data` in a case) belongs in a component that reads it itself. See [Slots](./slots.md#evaluation).

## Example

```tsx
<r.show when={items.length} fallback={<Empty />}>
  <Results />
</r.show>
```
