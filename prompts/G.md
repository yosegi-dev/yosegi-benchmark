# Arm G — spec + registry, no source

Write one Storybook story file. This is a controlled measurement, so the constraints matter
more than usual.

Working directory: `{DIR}`

Stay inside it. Do not read, list, or glob anything outside that directory.

## Your inputs

- `SPEC-SCREEN.md` — the screen to build
- `.yosegi/` — a Yosegi Component Registry for the host

**You do not have the host's source code.** The host is a React + TypeScript product built
on {LIB}{N}, but its `src/` is not available to you — the registry is your only window into
what its components take. This mirrors using Yosegi from a client that has no checkout of
the repository. (Do not open `.yosegi/registry.json` by hand; use the CLI.)

```sh
YOSEGI=<yosegi checkout>/packages/server/bin/yosegi.js
node $YOSEGI component list --data-dir .yosegi --quiet
node $YOSEGI component inspect "src/components/post-card#PostCard" --data-dir .yosegi --quiet
```

`component inspect` accepts several ids at once. Confirm every component's props there
before you write it.

*(M/L hosts add:)* Be aware: this component library is large and contains several
components with similar names. Picking one by name without checking its props is a mistake.

## Your output

`TimelineScreen.stories.tsx`, in your working directory.

- CSF3: `import type { Meta, StoryObj } from "@storybook/react";`, a default-exported
  `Meta`, and one named story.
- Import every host component through the specifier the registry reports (the `~/` alias
  form). Never use a relative import.
- Use only the host's own components from `src/components/` as the registry lists them.

## Rules

- Do NOT run `tsc` or any typechecker (there is no `node_modules`, deliberately) — your
  first complete version is what gets scored.
- Do NOT create any file other than `TimelineScreen.stories.tsx`.
- Build the whole tree the spec describes. Every component in it, all four posts.

## Final report

1. Whether you completed the full tree, and anything left out
2. Anything the registry could not tell you that you needed
3. Counts: `yosegi` invocations, other commands
Nothing else.
