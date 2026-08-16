# Arm H — spec + emitted declarations, no source, no registry

Write one Storybook story file. This is a controlled measurement, so the constraints matter
more than usual.

Working directory: `{DIR}`

Stay inside it. Do not read, list, or glob anything outside that directory.

## Your inputs

- `SPEC-SCREEN.md` — the screen to build
- `types/` — the design system's TypeScript declaration files (`.d.ts`), as they would
  arrive inside a compiled npm package{N}

The host is a React + TypeScript product built on **{LIB}**. Its design system is consumed
as a compiled package: you have its type declarations — `types/components/*.d.ts`,
`types/models.d.ts` — but no `.tsx` source, no Stories, and no registry. This mirrors an
app repository that depends on `@company/ui` and reads what `node_modules` holds.

*(L hosts add:)* Be aware: this design system is large and contains several components
with similar names. Picking one by name without checking its declaration is a mistake.

## Your output

`TimelineScreen.stories.tsx`, in your working directory.

- CSF3: `import type { Meta, StoryObj } from "@storybook/react";`, a default-exported
  `Meta`, and one named story.
- Import every component through the `~/` path alias mirroring the declaration path:
  `types/components/post-card.d.ts` → `~/components/post-card`. Never use a relative
  import.
- Use only the components the declarations describe.

## Rules

- Do NOT run `tsc` or any typechecker (there is no `node_modules`, deliberately) — your
  first complete version is what gets scored.
- Do NOT create any file other than `TimelineScreen.stories.tsx`.
- Build the whole tree the spec describes. Every component in it, all four posts.

## Final report

1. Whether you completed the full tree, and anything left out
2. Anything the declarations could not tell you that you needed
3. Counts: files opened, greps run, other commands
Nothing else.
