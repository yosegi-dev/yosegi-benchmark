# Measurement protocol

One screen (`SPEC-SCREEN.md`), four hosts, three arms per host. Twelve implementations.

## Arms

Each arm is a fresh agent with no memory of the others and no access to `CONTRACT.md`.
All three are given `SPEC-SCREEN.md` and told which UI library the host is built on.

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
the honest reading is that on a host this size, reading the source is enough — and the
result should be reported that way.

### B — Yosegi

Given the screen spec and a built registry. Uses `component list` / `component inspect`
to pin down props. Reading `src/` directly is not forbidden — the Agent Skill does not
forbid it either — but the registry is the stated source of truth for props.

## Scoring

### Primary: type errors

`npx tsc --noEmit` in the host, counting only diagnostics whose file is the emitted
`TimelineScreen.stories.tsx`. Recorded as a raw count plus the distinct error codes.

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

Measured on the corpus by `scripts/cost.mjs`, three ways: full component directory (upper
bound), `*Props` interface blocks only (lower bound), registry output for the used
components. Arms also self-reported tool counts; the audit found those wrong in both
sampled cases, so nothing is concluded from them.

## What this design does not establish

- The hosts are synthetic. The divergence recipe is applied deliberately and uniformly,
  which no real product does.
- ~20 components is small. A2's advantage shrinks as a host grows, and this benchmark
  cannot show that — it is exactly the regime where reading everything is cheap.
- One screen, one run per arm. No repeat trials, so a single unlucky run moves a number.
- The same model family wrote the hosts and the arms.

These belong in the published write-up, not in a footnote.
