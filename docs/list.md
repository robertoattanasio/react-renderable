# List

Renders an array through a function.

```ts
List<T>(props: ListProps<T>): ReactNode
```

| Prop            | Type                                                       | Default |                  |
| --------------- | ---------------------------------------------------------- | ------- | ---------------- |
| `array`         | `readonly T[]`                                             | `[]`    | the items        |
| `itemExtractor` | `({ row, index }: { row: T; index: number }) => ReactNode` | `null`  | renders one item |

## Behavior

- `T` is inferred from `array`: `row` is typed without annotations.
- An empty array, or no `itemExtractor`, renders nothing.
- Keys are up to `itemExtractor`: `List` doesn't add them.
- No wrapper element: the items are rendered side by side.

## Example

```tsx
<ul>
  <List array={projects} itemExtractor={({ row }) => <li key={row.slug}>{row.title}</li>} />
</ul>
```
