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

## Primitives

| | |
| --- | --- |
| `Guard` | renders conditionally, with an optional alternative |
| `Swap` | picks between renderables |
| `Wrap` | nests renderables around children, outermost first |
| `Inject` | renders renderables before or after children |
| `List` | maps an array to nodes |
| `Tag` | renders a polymorphic element via `as` |
| `Portal` | renders into another DOM element |

```tsx
<Guard guardIf={isLoading} thenRender={Spinner}>
  <Content />
</Guard>

<Swap.Boolean swapOn={isDark} components={[<SunIcon size={16} />, <MoonIcon size={16} />]} />

<Wrap components={[StoreProvider, ThemeProvider]}>
  <App />
</Wrap>

<Inject components={[Background, Cursor]} onTop>
  <Page />
</Inject>

<List array={jobs} itemExtractor={({ row, index }) => <Job key={index} job={row} />} />

<Tag as="section" className="prose">
  {children}
</Tag>
```

## Notes

`Wrap` replaces the children of the element form, so a wrapper always controls what it wraps. Passing an inline arrow as a renderable gives React a new component type on every render, which remounts that subtree — hoist it out of the render for anything stateful.

## License

MIT
