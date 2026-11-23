# r.portal

Renders its children into another DOM element.

```ts
r.portal(props: PortalProps): ReactNode
```

| Prop       | Type              | Required |                      |
| ---------- | ----------------- | -------- | -------------------- |
| `to`       | `Element \| null` | yes      | where to render      |
| `children` | `ReactNode`       |          | what to render there |

## Behavior

- With `to` set to `null` it renders nothing, as during server rendering.
- It's the only client component of the package (`"use client"`): `createPortal` doesn't exist on the server.
- The element has to exist when `r.portal` renders: read it in an effect or a ref callback, then pass it.

## Example

```tsx
const [target, setTarget] = useState<Element | null>(null);

useEffect(() => setTarget(document.body), []);

<r.portal to={target}>
  <Modal />
</r.portal>;
```
