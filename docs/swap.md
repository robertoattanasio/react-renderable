# Swap

Picks one of two renderables.

```ts
Swap.Boolean(props: SwapBooleanProps): ReactNode
```

| Prop         | Type           | Default |                         |
| ------------ | -------------- | ------- | ----------------------- |
| `components` | `Renderable[]` | `[]`    | `[whenFalse, whenTrue]` |
| `swapOn`     | `boolean`      | `false` | which one to render     |

## Behavior

- `swapOn={false}` renders `components[0]`, `swapOn={true}` renders `components[1]`.
- A missing entry renders nothing.

## Example

```tsx
<Swap.Boolean components={[<IconPlay />, <IconPause />]} swapOn={playing} />
```
