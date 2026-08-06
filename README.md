# react-renderable

Declarative render primitives for React. Every primitive shares one convention, so learning one teaches you all of them.

Documentation: [dev.robertoattanasio.com/react-renderable](https://dev.robertoattanasio.com/react-renderable)

## Install

```sh
npm install react-renderable
```

## What you get

`Guard`, `Swap`, `Switch` for branching. `Wrap`, `Inject` for composition. `List`, `Portal`, `Tag` for rendering. Plus `renderableRender`, the resolver behind them, so you can build your own primitives in the same convention.

```tsx
<Switch>
  <Switch.Case when={isLoading}>{Spinner}</Switch.Case>
  <Switch.Case when={!!error}>{() => <ErrorPanel error={error!} />}</Switch.Case>
  <Switch.Default>{() => <Results rows={rows} />}</Switch.Default>
</Switch>
```

## Built with

React 19 and TypeScript, nothing else: no dependencies, no runtime beyond React itself. Published as compiled ESM with type declarations, and side-effect free.

## Approach

- **One convention.** Every slot accepts both a component and its element, told apart by `typeof === "function"` — no heuristics.
- **Deferred by default.** The component form is not evaluated until it renders, so a branch that is not taken costs nothing and code that would crash outside its branch never runs.
- **Nothing added to the tree.** Primitives render their branch and nothing around it: no wrapper, no context, no provider.
- **Empty is a state, not a bug.** Every prop is optional; a missing target, an empty array or absent children render nothing instead of throwing.
- **Stateless.** No state, no effects, no refs — the work happens during render.

Conventions for contributing: [RULE.md](./RULE.md).

## License

[MIT](./LICENSE).
