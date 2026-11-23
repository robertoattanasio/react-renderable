import { Each } from "./components/each/each.js";
import { Guard } from "./components/guard/guard.js";
import { Inject } from "./components/inject/inject.js";
import { Join } from "./components/join/join.js";
import { Portal } from "./components/portal/portal.js";
import { Repeat } from "./components/repeat/repeat.js";
import { Show } from "./components/show/show.js";
import { Switch } from "./components/switch/switch.js";
import { Tag } from "./components/tag/tag.js";
import { Wrap } from "./components/wrap/wrap.js";

export const r = {
  guard: Guard,
  show: Show,
  switch: Switch,
  each: Each,
  repeat: Repeat,
  join: Join,
  wrap: Wrap,
  inject: Inject,
  portal: Portal,
  tag: Tag,
};
