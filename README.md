# react-renderable

`react-renderable` is a small set of primitives for deciding what to render in React: conditions, cases, lists and wrappers, written as components in the tree. They take plain JSX, add no wrapper nodes and work as Server Components.

Package: [npmjs.com/package/react-renderable](https://www.npmjs.com/package/react-renderable)

Documentation: [react-renderable.robertoattanasio.com](https://react-renderable.robertoattanasio.com)

## Installation

```sh
npm install react-renderable
```

The package expects React 19 and React DOM 19 in your project; both are peer dependencies. The types need TypeScript 5.7 or newer.

## Usage

Every primitive lives on `r`:

```tsx
import { r } from "react-renderable";

<r.show when={projects.length} fallback={<Empty />}>
  <ul>
    <r.each items={projects} map={(project) => <li key={project.id}>{project.title}</li>} />
  </ul>
</r.show>;
```

## API

- [Slots](./docs/slots.md): elements, `map`, `within` and keys, evaluation
- [r.guard](./docs/guard.md)
- [r.show](./docs/show.md)
- [r.switch](./docs/switch.md)
- [r.each](./docs/each.md)
- [r.repeat](./docs/repeat.md)
- [r.join](./docs/join.md)
- [r.wrap](./docs/wrap.md)
- [r.inject](./docs/inject.md)
- [r.portal](./docs/portal.md)
- [r.tag](./docs/tag.md)

Upgrading from 1.x: see the migration table in [CHANGELOG.md](./CHANGELOG.md).

## Scripts

For the available project scripts and what they do, see [docs/scripts.md](./docs/scripts.md).

## License

[MIT](./LICENSE)
