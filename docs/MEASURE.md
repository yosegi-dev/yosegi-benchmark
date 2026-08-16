# Measurement protocol

One screen (`SPEC-SCREEN.md`) for every arm, four libraries at three sizes (`SCALE.md`), and
one variable per arm: what the agent is allowed to see. 68 implementations across the arms
below and the two side experiments — `RESULTS.md` is the record of what was actually run, and it is
authoritative wherever it and this file disagree.

## Arms

Each arm is a fresh agent with no memory of the others and no access to `CONTRACT.md`.
All of them are given `SPEC-SCREEN.md` and told which UI library the host is built on.
The verbatim prompt for each of them is in `prompts/`, along with the two asymmetries the
audit turned up. The two side experiments below ran from prompts that were not kept; their
working directories are, and `setup-efg.sh` rebuilds them.

### A1 — library knowledge only

Given the screen spec, the library name, and a bare listing of the component files
(paths and export names only, no contents). May not open any file under `src/`.

This is the arm `docs/registry.md` already measures. It is a weak baseline on its own —
no real agent is forbidden from reading files — but it isolates one variable: how far
general knowledge of the library carries you when the product layer has diverged.

### A2 — free source access, no Yosegi

Given the screen spec and the repository. May read, grep, and open anything. No registry,
no `component inspect`. This is what an agent actually does today.

This is the arm that decides whether the tool has a case. If A2 ties with B on a host,
the honest reading is that at that size, reading the source is enough — and the result
should be reported that way.

### B — Yosegi

Given the screen spec and a built registry. Uses `component list` / `component inspect`
to pin down props. Reading `src/` directly is not forbidden — the Agent Skill does not
forbid it either — but the registry is the stated source of truth for props.

### G — registry only

Given the screen spec and a built registry, and no source at all. The isolation arm: A2 and
B both read `src/`, so neither can say what the registry carries on its own. Run at all
three sizes; running it only at 20, where the near-miss families do not yet exist, was an
audit finding.

### H — declarations only

Given the screen spec and the host's emitted `.d.ts` tree (`setup-efg.sh` compiles it with
`--declaration --emitDeclarationOnly`), and no source and no registry. The package-consumer
arm: what an agent reads when the design system arrives compiled inside `node_modules`
rather than sitting in the same repository. Run at 20 and 240.

### E and F — the two side experiments

Not arms in the comparison above; each varies something other than what the agent can see.

- **E** takes a second, deliberately static screen (`SPEC-STATIC.md`) and compares the two
  routes Yosegi's Agent Skill chooses between — writing the Story directly, or going
  through Screen JSON. Both sides get source and registry; only the route differs.
- **F** takes an approved Story to a real page (`SPEC-IMPL.md`), with and without
  `story import` + `screen context`. Only the hosts whose approved Story is render-style
  are in scope, which is why it runs on two.

## Scoring

### Primary: type errors

`scripts/score.sh` drops the arm's file into its host, runs the workspace `tsc --noEmit`
there, and counts only the diagnostics whose file is the emitted
`TimelineScreen.stories.tsx`. Recorded as a raw count plus the distinct error codes.
`scripts/score-ef.sh` applies the same protocol to E and F.

Run once, on the arm's first submitted output. No fix-up round — an agent that would
have self-corrected from the compiler is measuring the compiler, not the registry.

### Secondary: silent errors

Mistakes that compile and are still wrong. Scored by `scripts/silent.mjs` — regex-level
checks derived from `SPEC-SCREEN.md`, matching both prop syntaxes and gated on a clean
typecheck (a file with type errors is N/A here by definition) — plus targeted hand checks
recorded in RESULTS.md. Not a full human review; cardinality is unchecked. Classes:

| Class | Example |
| --- | --- |
| `wrong-enum` | a valid enum value that is not the one the spec asked for |
| `missing-slot` | `media` or `quoted` omitted where the spec puts one |
| `dropped-component` | a component in the spec's tree never rendered |
| `fabricated-data` | a model field invented rather than taken from the spec |
| `wrong-semantics` | right type, wrong meaning — counts swapped, label used as name |

Silent errors matter more than type errors: a type error stops the build and gets fixed,
a silent one ships. `docs/registry.md` already makes this point.

`wrong-render` was added after the audit: a value whose type is right but whose rendered
form depends on a host convention the types cannot express (the `@` handle prefix).

### Tertiary: discovery cost

Measured on the corpus, not on the agent, so the number does not move with the model.
`scripts/cost.mjs` prices three corpora: the whole component directory (what finding the
right components costs), the 18 files the screen actually uses (a floor that assumes the
agent already knows which those are), and one `component list` plus `component inspect` for
the same 18. `RESULTS.md` publishes two more bounds that `cost.mjs` does not emit — the
`*Props` interface blocks alone, and the `.d.ts` tree `setup-efg.sh` writes for arm H.

Arms also self-reported tool counts; the audit found those wrong in both sampled cases, so
nothing is concluded from them.

## What this design does not establish

- The hosts are synthetic. The divergence recipe is applied deliberately and uniformly,
  which no real product does, and A1's error count is a direct function of how many renames
  the recipe applied.
- Size is a variable now (20, 80, 240 — `SCALE.md`), which the first round could not see.
  What it still cannot see is a real design system's shape: the filler is generated, and
  its near misses were written to be exactly as hard as the benchmark wanted them.
- One run per cell, and the arms' silent-error rates are 1–2 findings per 12 runs — the
  regime where one more run moves a cell.
- The spec names every component and pins the data, so discovery and curation are
  unmeasured. That is the half of the workflow where a registry query would matter most.
- The same model family wrote the hosts, the filler, the arms, and the scoring scripts.

These belong in the published write-up, not in a footnote. `RESULTS.md` repeats them
alongside the numbers, and adds the caveats that are specific to a result.
