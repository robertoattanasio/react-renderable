# Switch

Renders the first case whose condition holds, or the default.

```ts
Switch(props: SwitchProps): ReactNode
Switch.Case(props: SwitchCaseProps): ReactNode
Switch.Default(props: SwitchDefaultProps): ReactNode
```

| Part             | Prop       | Type         |                                |
| ---------------- | ---------- | ------------ | ------------------------------ |
| `Switch`         | `children` | `ReactNode`  | the cases and the default      |
| `Switch.Case`    | `when`     | `boolean`    | the condition                  |
| `Switch.Case`    | `children` | `Renderable` | what to render when it holds   |
| `Switch.Default` | `children` | `Renderable` | what to render when none holds |

## Behavior

- Cases are checked in order: the first with a truthy `when` is rendered and the rest are skipped.
- When no case holds, the first `Switch.Default` is rendered, wherever it sits among the cases. Without one, nothing.
- Only direct children count. A case inside a fragment, or inside another component, is ignored.
- Any other child is ignored too.

## Example

```tsx
<Switch>
  <Switch.Case when={status === "loading"}>
    <Spinner />
  </Switch.Case>
  <Switch.Case when={status === "error"}>{ErrorMessage}</Switch.Case>
  <Switch.Default>
    <Content />
  </Switch.Default>
</Switch>
```
