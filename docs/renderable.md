# Renderable

The type every slot accepts, and the function that renders it.

```ts
type Renderable = ComponentType<{ children: ReactNode }> | ReactNode;

renderableRender(renderable: Renderable, children?: ReactNode): ReactNode
```

| Parameter    | Type         |                                            |
| ------------ | ------------ | ------------------------------------------ |
| `renderable` | `Renderable` | a component, an element, or any other node |
| `children`   | `ReactNode`  | passed only by wrappers, such as `Wrap`    |

## Behavior

| `renderable`  | Result                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------ |
| a component   | rendered as an element, `<Component>{children}</Component>`                                |
| an element    | returned as it is, or cloned with `children` in place of its own when `children` is passed |
| anything else | returned as it is: strings, numbers, `null`, arrays                                        |

- A component is mounted, never called as a function: its hooks belong to it.
- Passing a component or an element is a choice of the caller. `Footer` and `<Footer />` both work.

## Example

```tsx
renderableRender(Footer);
renderableRender(<Footer year={2026} />);
renderableRender(Card, <p>Inside the card</p>);
```
