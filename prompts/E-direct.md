# Experiment E, direct route — static screen, Story written by hand

Write one Storybook story file. This is a controlled measurement, so the constraints matter
more than usual.

Working directory: `{DIR}`

Stay inside it. Do not read, list, or glob anything outside that directory — not a parent,
not a sibling. The one exception is the Yosegi CLI itself, named below. There is material
outside your directory that would invalidate the measurement.

## Your inputs

- `SPEC-STATIC.md` — the screen to build
- `src/` — the host's full source
- `tsconfig.json`
- `.yosegi/` — a prebuilt Yosegi Component Registry for this host

The host is a React + TypeScript product built on **{LIB}**.

## Use the registry

The registry is the source of truth for a component's props, slots, enum options, defaults,
and import specifier.

```sh
YOSEGI={YOSEGI_BIN}
node $YOSEGI component list --data-dir .yosegi --quiet
node $YOSEGI component inspect "src/components/post-card#PostCard" --data-dir .yosegi --quiet
```

`component inspect` accepts several ids at once. Confirm every component's props there
before you write it. You may also read `src/` if you want to; nothing forbids it.

## Your route

**Write the `.stories.tsx` by hand.** This is the route Yosegi's Agent Skill calls the
default (its step 3a). Do not go through Screen JSON, and do not run `screen generate` —
the other side of this experiment does that, and the route is the only variable between us.

## Your output

`ModerationScreen.stories.tsx`, in your working directory (next to `src/`, not inside it).

- CSF3: `import type { Meta, StoryObj } from "@storybook/react";`, a default-exported
  `Meta`, and one named story.
- Import every host component through the specifier the registry reports (the `~/` alias
  form). Never use a relative import.
- Use only the host's own components from `src/components/`. Do not import from any library
  directly.

## Rules

- Do NOT run `tsc`, `npx tsc`, or any typechecker. There is no `node_modules` and this is
  deliberate. Your first complete version is what gets scored.
- Do NOT create or modify any file other than `ModerationScreen.stories.tsx`. `src/` and
  `.yosegi/` are read-only.
- Build the whole tree the spec describes. Every component in it, all three posts.

## Final report

Return exactly this, concise and factual:

1. Whether you completed the full tree in the spec, and anything you left out
2. Anything you were unsure of, and what you did about it
3. Counts: files opened, `yosegi` invocations, other shell commands
4. Nothing else — no summary of the file's contents
