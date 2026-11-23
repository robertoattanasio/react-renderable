# r.wrap

Nests its children inside a list of wrappers.

```ts
r.wrap(props: WrapProps): ReactNode
```

| Prop       | Type             | Required | Default |                                              |
| ---------- | ---------------- | -------- | ------- | -------------------------------------------- |
| `with`     | `ReactElement[]` | yes      |         | the wrappers, from the outermost             |
| `when`     | `unknown`        |          | `true`  | when falsy, the children render without them |
| `children` | `ReactNode`      |          |         | what ends up inside                          |

## Behavior

- The first wrapper is the outermost, the last one wraps `children` directly.
- Each wrapper is cloned with what's inside in place of its own children.
- Without wrappers, the children are rendered as they are.

## Example

```tsx
<r.wrap with={[<ThemeProvider />, <QueryProvider client={client} />, <Layout />]}>
  <Page />
</r.wrap>
```

Renders:

```tsx
<ThemeProvider>
  <QueryProvider client={client}>
    <Layout>
      <Page />
    </Layout>
  </QueryProvider>
</ThemeProvider>
```

A link only when there's somewhere to go:

```tsx
<r.wrap with={[<a href={href} />]} when={href}>
  <Card />
</r.wrap>
```
