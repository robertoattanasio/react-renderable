# react-renderable

## 1.0.7

### Patch Changes

- `Guard` renders `thenRender` for any value other than `null` or `undefined`, so `thenRender={0}` renders `0`. `shouldHide` still wins over `thenRender`.
- Relative imports use the `.js` extension and types are imported with `import type`.

## 1.0.6

### Patch Changes

- a50595a: Point `repository` and `bugs` at this package's own repository instead of the documentation site, and link the npm package from the README.

## 1.0.5

### Patch Changes

- a1b8ebf: Package refactor

## 1.0.4

### Patch Changes

- `TagProps` accepts an optional second parameter for the own props of a component built on Tag: same-named native props are replaced by them
- `Tag.forward` added to forward the remaining props of a polymorphic component to Tag, with an optional fallback tag

## 1.0.3

### Patch Changes

- 6357b87: Internal folders refactor

## 1.0.2

### Patch Changes

- 683de9f: Minor fixes in package.json
