# react-renderable

`react-renderable` is a small set of primitives for deciding what to render in React. Each one accepts a `Renderable`, which can be either a component or a React node, so you can use the same slot with both.

Package: [npmjs.com/package/react-renderable](https://www.npmjs.com/package/react-renderable)

Documentation: [dev.robertoattanasio.com/react-renderable](https://dev.robertoattanasio.com/react-renderable)

## Installation

```sh
npm install react-renderable
```

The package expects React 19 and React DOM 19 in your project; both are peer dependencies.

## API

The primitives cover common rendering patterns, including conditional content, lists, wrappers, and portals. See the individual guides for details:

- [Renderable](./docs/renderable.md)
- [Guard](./docs/guard.md)
- [Switch](./docs/switch.md)
- [Swap](./docs/swap.md)
- [List](./docs/list.md)
- [Wrap](./docs/wrap.md)
- [Inject](./docs/inject.md)
- [Portal](./docs/portal.md)
- [Tag](./docs/tag.md)

## Scripts

For the available project scripts and what they do, see [docs/scripts.md](./docs/scripts.md).

## License

[MIT](./LICENSE)
