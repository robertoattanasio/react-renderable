# Inject

Renders a list of renderables next to its children, after them or before.

```ts
Inject(props: InjectProps): ReactNode
```

| Prop         | Type           | Default |                              |
| ------------ | -------------- | ------- | ---------------------------- |
| `components` | `Renderable[]` | `[]`    | what to add                  |
| `onTop`      | `boolean`      | `false` | add them before the children |
| `children`   | `ReactNode`    |         |                              |

## Behavior

- The injected renderables are siblings of `children`, never wrappers: they don't receive them.
- They're keyed by their position in `components`.

## Example

```tsx
<Inject components={[Toaster, CookieBanner]}>
  <App />
</Inject>
```
