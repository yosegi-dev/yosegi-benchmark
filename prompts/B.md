# Arm B — spec + full source + registry

Write one Storybook story file. This is a controlled measurement, so the constraints matter
more than usual.

Working directory: `{DIR}`

Stay inside it. Do not read, list, or glob anything outside that directory — not a parent,
not a sibling. There is material there that would invalidate the measurement.

## Your inputs

- `SPEC-SCREEN.md` — the screen to build
- `src/` — the host's full source
- `tsconfig.json`
- `.yosegi/` — a prebuilt Yosegi Component Registry for this host

The host is a React + TypeScript product built on **{LIB}**.

*(M/L hosts add:)* Be aware: this component library is large and contains several
components with similar names. Picking one by name without checking its props is a mistake.

## Use the registry

The registry is the source of truth for a component's props, slots, enum options, defaults,
and import specifier. Query it with:

```sh
YOSEGI=<yosegi checkout>/packages/server/bin/yosegi.js

node $YOSEGI component list --data-dir .yosegi --quiet
node $YOSEGI component list --query post --data-dir .yosegi --quiet
node $YOSEGI component inspect "src/components/post-card#PostCard" --data-dir .yosegi --quiet
```

`component inspect` accepts several ids at once. Confirm every component's props there
before you write it — that is the point of the tool. You may also read `src/` if you want
to; nothing forbids it.

## Your output

`TimelineScreen.stories.tsx`, in your working directory (next to `src/`, not inside it).

- CSF3: `import type { Meta, StoryObj } from "@storybook/react";`, a default-exported
  `Meta`, and one named story.
- Import every host component through the specifier the registry reports (the `~/` alias
  form). Never use a relative import.
- Use only the host's own components from `src/components/`. Do not import from any library
  directly.

## Rules

- Do NOT run `tsc`, `npx tsc`, or any typechecker. There is no `node_modules` and this is
  deliberate. Your first complete version is what gets scored.
- Do NOT create or modify any file other than `TimelineScreen.stories.tsx`. `src/` and
  `.yosegi/` are read-only.
- Build the whole tree the spec describes. Every component in it, all four posts.

## Final report

Return exactly this, concise and factual:

1. Whether you completed the full tree in the spec, and anything you left out
2. Anything the registry told you that you would have got wrong otherwise — be specific,
   this is the measurement
3. Counts: files opened, greps/searches run, `yosegi` invocations, other shell commands
4. Nothing else — no summary of the file's contents

*(Audit note: point 2's answers are cued by the "confirm every component" instruction above
and are not usable as evidence; see `prompts/README.md`.)*
