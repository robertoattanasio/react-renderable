# r.inject

Renders something before its children, after them, or both.

```ts
r.inject(props: InjectProps): ReactNode
```

| Prop       | Type        | Default |                              |
| ---------- | ----------- | ------- | ---------------------------- |
| `before`   | `ReactNode` | `null`  | rendered before the children |
| `after`    | `ReactNode` | `null`  | rendered after the children  |
| `children` | `ReactNode` |         |                              |

## Behavior

- What's injected sits next to `children`, never around them.

## Example

```tsx
<r.inject
  after={
    <>
      <Toaster />
      <CookieBanner />
    </>
  }
>
  <App />
</r.inject>
```
