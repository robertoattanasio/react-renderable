# r.tag

An element whose tag is chosen with `as`, with the props of that tag.

```ts
r.tag<T extends ElementType = "div">(props: TagProps<T>): ReactElement
r.tag.forward<T extends ElementType>(props: object, fallback?: ElementType): TagProps<T>
```

| Prop       | Type                | Default |                           |
| ---------- | ------------------- | ------- | ------------------------- |
| `as`       | `T`                 | `"div"` | a tag name or a component |
| `children` | `ReactNode`         |         |                           |
| `...rest`  | `ComponentProps<T>` |         | the props of `as`         |

## TagProps

```ts
TagProps<T extends ElementType = "div", OwnProps = object>
```

The props of `T`, plus `as`. `OwnProps` are the props a component built on `r.tag` adds: a native prop with the same name is replaced, not merged.

`T` is inferred from `as` only, and the other props are checked against it: `as="div"` rejects `href`, `as="a"` rejects `href={1}`, and `onClick` receives the event of the chosen element. This needs TypeScript 5.7 or newer. From 5.4 to 5.6 the props are still checked, but event handlers need their parameter typed by hand.

## r.tag.forward

For components built on `r.tag`. It passes on the remaining props and keeps `as`: the one the consumer chose, or `fallback` when there's none.

TypeScript can't prove that the remaining props of a generic component match `ComponentProps<T>` until `T` is known. `r.tag.forward` holds that cast, so the components built on `r.tag` don't need one.

## Example

```tsx
<r.tag as="section" id="about">…</r.tag>
<r.tag as={Link} to="/about">About</r.tag>
```

A component built on `r.tag`:

```tsx
type CardProps<T extends ElementType = "article"> = TagProps<T, { tone?: "light" | "dark" }>;

const Card = <T extends ElementType = "article">({ tone = "light", ...rest }: CardProps<T>) => (
  <r.tag {...r.tag.forward<T>(rest, "article")} data-tone={tone} />
);
```
