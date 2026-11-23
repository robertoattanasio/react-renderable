# r.guard

A guard: renders its children, unless `when` holds. Then it renders `then`, to hide them or redirect, or nothing.

```ts
r.guard(props: GuardProps): ReactNode
```

| Prop       | Type           | Required | Default |                                                 |
| ---------- | -------------- | -------- | ------- | ----------------------------------------------- |
| `when`     | `unknown`      | yes      |         | when truthy, the children are not rendered      |
| `then`     | `ReactNode`    |          | `null`  | what to render in their place                   |
| `within`   | `ReactElement` |          |         | see [within and key](./slots.md#within-and-key) |
| `children` | `ReactNode`    |          |         |                                                 |

## Behavior

| `when` | Renders                       |
| ------ | ----------------------------- |
| falsy  | `children`                    |
| truthy | `then`, or nothing without it |

- The branches are keyed `"children"` and `"then"`, unless they already have a key.

> Children are evaluated right away. Content that reads a value the primitive checks (`user.name` when `user` can be `null`, `state.data` in a case) belongs in a component that reads it itself. See [Slots](./slots.md#evaluation).

## Example

```tsx
<r.guard when={!user} then={<Redirect to="/login" />}>
  <Dashboard />
</r.guard>
```
