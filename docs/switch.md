# r.switch

Works like JavaScript's `switch`: renders the first case whose `is` matches `value`, or the default. Matching is by value only.

```ts
r.switch(props: SwitchProps): ReactNode
r.switch.case(props: SwitchCaseProps): ReactNode
r.switch.default(props: SwitchDefaultProps): ReactNode
```

| Part               | Prop       | Type           | Required |                                                 |
| ------------------ | ---------- | -------------- | -------- | ----------------------------------------------- |
| `r.switch`         | `value`    | `unknown`      | yes      | the value to match                              |
| `r.switch`         | `within`   | `ReactElement` |          | see [within and key](./slots.md#within-and-key) |
| `r.switch`         | `children` | `ReactNode`    |          | the cases and the default                       |
| `r.switch.case`    | `is`       | `unknown`      | yes      | compared to `value` with `Object.is`            |
| `r.switch.case`    | `children` | `ReactNode`    |          | what to render when it matches                  |
| `r.switch.default` | `children` | `ReactNode`    |          | what to render when no case matches             |

## Behavior

- Cases are checked in order: the first whose `is` matches is rendered.
- When none matches, the first `r.switch.default` is rendered, wherever it sits and even when it has no children. Without one, nothing.
- Cases and defaults inside fragments count, at any depth. Any other child is ignored.
- The branches are keyed `"case-<index>"`, by position among the cases, and `"default"`, unless they already have a key.
- `is` stays `unknown`: in TSX every JSX element has the same type, so a case can't know the type of `value`.
- A condition that isn't a comparison belongs in nested `r.guard` or `r.show`.

> Children are evaluated right away. Content that reads a value the primitive checks (`user.name` when `user` can be `null`, `state.data` in a case) belongs in a component that reads it itself. See [Slots](./slots.md#evaluation).

## Example

```tsx
<r.switch value={status}>
  <r.switch.case is="loading">
    <Spinner />
  </r.switch.case>
  <r.switch.case is="error">
    <ErrorView />
  </r.switch.case>
  <r.switch.default>
    <Empty />
  </r.switch.default>
</r.switch>
```
