# Tag

An element whose tag is chosen with `as`, with the props of that tag.

```ts
Tag<T extends ElementType = "div">(props: TagProps<T>): ReactElement
Tag.forward<T extends ElementType>(props: object, fallback?: ElementType): TagProps<T>
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

The props of `T`, plus `as`. `OwnProps` are the props a component built on `Tag` adds: a native prop with the same name is replaced, not merged.

## Tag.forward

For components built on `Tag`. It passes on the remaining props and keeps `as`: the one the consumer chose, or `fallback` when there's none.

TypeScript can't prove that the remaining props of a generic component match `ComponentProps<T>` until `T` is known. `Tag.forward` holds that cast, so the components built on `Tag` don't need one.

## Example

```tsx
<Tag as="section" id="about">…</Tag>
<Tag as={Link} to="/about">About</Tag>
```

A component built on `Tag`:

```tsx
type CardProps<T extends ElementType = "article"> = TagProps<T, { tone?: "light" | "dark" }>;

const Card = <T extends ElementType = "article">({ tone = "light", ...rest }: CardProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "article")} data-tone={tone} />
);
```
