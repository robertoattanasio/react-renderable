# r.repeat

Calls `map` `times` times and renders what it returns.

```ts
r.repeat(props: RepeatProps): ReactNode
```

| Prop     | Type                           | Required |                                                 |
| -------- | ------------------------------ | -------- | ----------------------------------------------- |
| `times`  | `number`                       | yes      | how many times                                  |
| `map`    | `(index: number) => ReactNode` | yes      | renders one of them                             |
| `within` | `ReactElement`                 |          | see [within and key](./slots.md#within-and-key) |

## Behavior

- `0`, a negative number, `NaN` or `Infinity` render nothing. A fraction is rounded down.
- The key goes on the element `map` returns. Without one, it's keyed by its index.

## Example

```tsx
<r.repeat times={5} map={(index) => <SkeletonRow key={index} />} />
```
