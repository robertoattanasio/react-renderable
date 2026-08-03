# react-renderable

Declarative render primitives for React. Every primitive shares one convention, so learning one teaches you all of them.

## The Renderable convention

Every slot accepts **both forms**: the component itself, or its element.

```tsx
<Wrap components={[ThemeProvider]}>{children}</Wrap>
<Wrap components={[<ThemeProvider theme="dark" />]}>{children}</Wrap>
```

Use the component form by default. Use the element form when the renderable needs props. The two are told apart by `typeof === "function"`: a component is always a function, a `ReactNode` never is — so there is no heuristic and no ambiguity.

```ts
type Renderable = ComponentType<{ children: ReactNode }> | ReactNode;
```

The rule for which props take a `Renderable`: **anything rendered conditionally**, so it can stay unevaluated until it is actually needed. Props that always pass through — the `children` of `Wrap` and `Inject` — stay a plain `ReactNode`.

## Guard

Renders its children only when the condition is false, with an optional alternative to render in its place. Replaces the ternary chains that nest badly inside JSX.

| prop         | type         | default |                                                |
| ------------ | ------------ | ------- | ---------------------------------------------- |
| `guardIf`    | `boolean`    | `false` | when true, the children are withheld           |
| `thenRender` | `Renderable` | `null`  | rendered instead of the children while guarded |
| `shouldHide` | `boolean`    | `false` | while guarded, render nothing at all           |
| `children`   | `Renderable` |         | rendered while not guarded                     |

```tsx
<Guard guardIf={!user} thenRender={SignInPrompt}>
  <Dashboard user={user} />
</Guard>

<Guard guardIf={items.length === 0} shouldHide>
  <ItemList items={items} />
</Guard>
```

Because `children` is a `Renderable`, the component form defers the work — the function body never runs while guarded:

```tsx
<Guard guardIf={!invoice}>{() => <Total amount={invoice!.total} />}</Guard>
```

## Swap

Picks one of two renderables from a boolean. `Swap.Boolean` renders `components[0]` when `swapOn` is false and `components[1]` when it is true.

| prop         | type           | default |                                            |
| ------------ | -------------- | ------- | ------------------------------------------ |
| `components` | `Renderable[]` | `[]`    | the two branches, in `[false, true]` order |
| `swapOn`     | `boolean`      | `false` | which branch to render                     |

```tsx
<Swap.Boolean swapOn={isDark} components={[SunIcon, MoonIcon]} />

<Swap.Boolean swapOn={isPlaying} components={[<PlayIcon size={16} />, <PauseIcon size={16} />]} />
```

## Switch

Picks one branch out of many. Renders the first `Switch.Case` whose `when` is true, and falls back to `Switch.Default` when none match. Use it where `Swap` runs out of room: three or more branches, or conditions that read better as labels than as array positions.

`Switch.Case`

| prop       | type         | default |                              |
| ---------- | ------------ | ------- | ---------------------------- |
| `when`     | `boolean`    | `false` | whether this branch is taken |
| `children` | `Renderable` |         | rendered when `when` is true |

`Switch.Default`

| prop       | type         | default |                                 |
| ---------- | ------------ | ------- | ------------------------------- |
| `children` | `Renderable` |         | rendered when no case matches |

```tsx
<Switch>
  <Switch.Case when={status === "loading"}>
    <Spinner />
  </Switch.Case>
  <Switch.Case when={status === "error"}>{ErrorPanel}</Switch.Case>
  <Switch.Default>
    <Results rows={rows} />
  </Switch.Default>
</Switch>
```

Cases are read in order, so the first match wins. Only direct children count: wrapping a case in a fragment or another element hides it from the switch.

## Wrap

Nests renderables around children, **outermost first**. Flattens the provider pyramid that every app root grows.

| prop         | type           | default |                           |
| ------------ | -------------- | ------- | ------------------------- |
| `components` | `Renderable[]` | `[]`    | wrappers, outermost first |
| `children`   | `ReactNode`    |         | what ends up innermost    |

```tsx
<Wrap components={[StoreProvider, ThemeProvider, RouterProvider]}>
  <App />
</Wrap>
```

is the same tree as:

```tsx
<StoreProvider>
  <ThemeProvider>
    <RouterProvider>
      <App />
    </RouterProvider>
  </ThemeProvider>
</StoreProvider>
```

The element form lets a wrapper take props, which the component form cannot:

```tsx
<Wrap components={[<ThemeProvider theme="dark" />, StoreProvider]}>
  <App />
</Wrap>
```

A wrapper passed as an element has its own children replaced, so `Wrap` always stays in control of what it wraps.

## Inject

Renders a set of renderables before or after the children, without wrapping them. For the siblings a layout drags along — backgrounds, overlays, portals' anchors.

| prop         | type           | default |                                                  |
| ------------ | -------------- | ------- | ------------------------------------------------ |
| `components` | `Renderable[]` | `[]`    | rendered as siblings of the children             |
| `onTop`      | `boolean`      | `false` | render them before the children instead of after |
| `children`   | `ReactNode`    |         |                                                  |

```tsx
<Inject components={[Background, Cursor]} onTop>
  <Page />
</Inject>
```

## List

Maps an array to nodes. Renders nothing when the array is empty, so no empty-check wraps the JSX.

| prop            | type                            | default |                 |
| --------------- | ------------------------------- | ------- | --------------- |
| `array`         | `T[]`                           | `[]`    | the source rows |
| `itemExtractor` | `({ row, index }) => ReactNode` | `null`  | called per row  |

```tsx
<List array={jobs} itemExtractor={({ row, index }) => <Job key={index} job={row} />} />
```

## Portal

Renders into another DOM element. Renders nothing when the target is missing, so the usual null check disappears.

| prop       | type              | default |                             |
| ---------- | ----------------- | ------- | --------------------------- |
| `element`  | `Element \| null` | `null`  | the DOM node to render into |
| `children` | `Renderable`      |         |                             |

```tsx
<Portal element={document.querySelector("[data-root]")}>
  <Cursor />
</Portal>
```

## Tag

Renders a polymorphic element chosen at runtime, with that element's own props fully typed.

| prop  | type          | default |                                    |
| ----- | ------------- | ------- | ---------------------------------- |
| `as`  | `ElementType` | `"div"` | the element or component to render |
| …rest | props of `as` |         | typed against the chosen element   |

```tsx
<Tag as="section" className="prose">
  {children}
</Tag>

<Tag as="a" href="/about" rel="noreferrer">
  About
</Tag>
```

The exported `TagProps<T>` type builds prop types for your own polymorphic components:

```tsx
type ButtonProps<T extends ElementType = "button"> = TagProps<T> & { active?: boolean };
```

## renderableRender

The resolver behind every primitive, exported so you can build your own in the same convention.

```ts
renderableRender(renderable: Renderable, children?: ReactNode): ReactNode;
```

```tsx
const Panel = ({ title, children }: { title: Renderable; children: ReactNode }) => (
  <section>
    <header>{renderableRender(title)}</header>
    {children}
  </section>
);
```

Pass `children` as the second argument only for wrappers: the component form receives them as its children, and the element form has its own children replaced by them.

## Note

Passing an inline arrow as a renderable gives React a new component type on every render, which remounts that subtree. It is free for stateless nodes; hoist it out of the render for anything holding state.

## License

MIT
