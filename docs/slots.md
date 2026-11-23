# Slots

The rules every prop of the primitives follows, and the two things they do for you: `within` and keys.

## Elements, not components

A slot takes what you would write in JSX: an element, a string, a number, `null`. Never a component.

```tsx
<r.guard when={!user} then={<Login />} />
```

`then={Login}` is a type error. Pass `<Login />`.

| Slot                                                                                       | Type           | Why                          |
| ------------------------------------------------------------------------------------------ | -------------- | ---------------------------- |
| rendered in place: `then`, `fallback`, `empty`, `before`, `after`, `separator`, `children` | `ReactNode`    | rendered as it is            |
| wrapping: `within`, `with`                                                                 | `ReactElement` | cloned with what goes inside |

## Functions only in map

A function shows up only where the primitive hands you a value, and only in the `map` prop, never as a child:

| Primitive  | `map`                                   |
| ---------- | --------------------------------------- |
| `r.each`   | `(item: T, index: number) => ReactNode` |
| `r.repeat` | `(index: number) => ReactNode`          |
| `r.join`   | `(item: T, index: number) => ReactNode` |

The key goes on the element `map` returns, as with `Array.map`. Without one, the element is keyed by its index.

The conditional primitives take JSX only: no lazy `() => …` form, and no narrowing of types.

## within and key

`within` is on `r.guard`, `r.show`, `r.switch`, `r.each`, `r.repeat` and `r.join`. It's for components that watch their direct children, and react when one appears or goes away.

- When `within` is set, it's always rendered, and what the primitive renders becomes its children: `cloneElement(within, undefined, content)`. This holds even when the content is `null`.
- For the lists (`r.each`, `r.repeat`, `r.join`), every item becomes a direct child of `within`.
- Every branch gets a key of its own, so it's never confused with the other one:

| Primitive  | Keys                                          |
| ---------- | --------------------------------------------- |
| `r.guard`  | `"children"`, `"then"`                        |
| `r.show`   | `"children"`, `"fallback"`                    |
| `r.switch` | `"case-<index>"`, `"default"`                 |
| `r.each`   | the key of each item, or its index; `"empty"` |

- A key you set yourself always wins.
- Keys are applied to elements only: strings, numbers and `null` stay as they are.

Without `within`, a wrapper placed around the primitive sees only the primitive itself as its child, never the branch inside it.

```tsx
<r.show when={isOpen} within={<Presence />}>
  <Panel />
</r.show>
```

## Evaluation

JSX is evaluated before the primitive is called. A primitive keeps the branch it doesn't choose from mounting (its body, hooks and effects don't run), but the expressions in its props have already run.

> Children are evaluated right away. Content that reads a value the primitive checks (`user.name` when `user` can be `null`, `state.data` in a case) belongs in a component that reads it itself.

```tsx
<r.switch value={state.status}>
  <r.switch.case is="success">
    <SuccessList />
  </r.switch.case>
</r.switch>
```

`<SuccessList />` reads `state.data` inside its own body, which runs only when the case is chosen.
