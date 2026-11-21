# Wrap

Nests its children inside a list of wrappers.

```ts
Wrap(props: WrapProps): ReactNode
```

| Prop         | Type           | Default |                                  |
| ------------ | -------------- | ------- | -------------------------------- |
| `components` | `Renderable[]` | `[]`    | the wrappers, from the outermost |
| `children`   | `ReactNode`    |         | what ends up inside              |

## Behavior

- The first wrapper is the outermost, the last one wraps `children` directly.
- A component wrapper receives what's inside as `children`. An element wrapper is cloned with it in place of its own children.
- Without wrappers, the children are rendered as they are.

## Example

```tsx
<Wrap components={[ThemeProvider, <QueryProvider client={client} />, Layout]}>
  <Page />
</Wrap>
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
