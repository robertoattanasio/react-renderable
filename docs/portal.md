# Portal

Renders its children into another DOM element.

```ts
Portal(props: PortalProps): ReactNode
```

| Prop       | Type              | Default |                      |
| ---------- | ----------------- | ------- | -------------------- |
| `element`  | `Element \| null` | `null`  | where to render      |
| `children` | `Renderable`      |         | what to render there |

## Behavior

- Without `element`, it renders nothing.
- It's the only client component of the package (`"use client"`): `createPortal` doesn't exist on the server.
- The element has to exist when `Portal` renders: read it in an effect or a ref callback, then pass it.

## Example

```tsx
const [target, setTarget] = useState<Element | null>(null);

useEffect(() => setTarget(document.body), []);

<Portal element={target}>
  <Modal />
</Portal>;
```
