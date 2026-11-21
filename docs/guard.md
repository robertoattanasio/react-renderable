# Guard

Renders its children, unless a condition holds: then it renders something else, or nothing.

```ts
Guard(props: GuardProps): ReactNode
```

| Prop         | Type         | Default |                                            |
| ------------ | ------------ | ------- | ------------------------------------------ |
| `guardIf`    | `boolean`    | `false` | when `true`, the children are not rendered |
| `thenRender` | `Renderable` | `null`  | what to render instead                     |
| `shouldHide` | `boolean`    | `false` | when `true`, render nothing instead        |
| `children`   | `Renderable` |         | what to render while `guardIf` is `false`  |

## Behavior

| `guardIf` | `shouldHide` | Renders      |
| --------- | ------------ | ------------ |
| `false`   | any          | `children`   |
| `true`    | `false`      | `thenRender` |
| `true`    | `true`       | nothing      |

Without `thenRender`, a guarded `Guard` renders nothing.

## Example

```tsx
<Guard guardIf={!user} thenRender={<Login />}>
  <Dashboard user={user} />
</Guard>
```
