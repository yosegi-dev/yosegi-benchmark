# Results

One screen, four UI libraries, three host sizes, and arms that vary what the agent can see.
68 implementations per round: 36 across A1/A2/B and three sizes, 12 registry-only (G, three
sizes), 8 declarations-only (H, sizes 20 and 240), 8 on the Screen JSON route (E), 4 on the
implementation handoff (F). One run per cell, no repeats.

## Rounds

The whole matrix is re-run on each Yosegi minor release, against the published package.

| Round | Yosegi | Measured | Artifacts |
| --- | --- | --- | --- |
| 1 | 0.2.0 | 2026-08-13/14 | tag `v0.2.0` (`results/raw-v0.2.0/` keeps its scores in tree) |
| 2 | 0.3.0 | 2026-08-17 | `results*/` at tag `v0.3.0` |

Everything from [Type errors](#type-errors) down to [F](#f--implementation-handoff) is
round 1, kept verbatim. Round 2 is [its own section](#round-2--yosegi-030), and states each
figure against round 1's. [What this does not show](#what-this-does-not-show) applies to
both.

Round 1's Yosegi version is an inference, not a record: this file did not name one, and
0.2.0 was what `npx @yosegi/yosegi` resolved to on the day. Round 2 found one artifact that
contradicts it — see [Provenance](#provenance-of-round-1s-f-baseline).

## Common setup

This file was rewritten once after an adversarial methodology review. The review found two
scoring defects that changed published numbers (below, marked **corrected**), and every
correction here was re-verified against the raw outputs, which are all in `results*/`.

Versions: MUI 9.3.1, Chakra UI 3.36.1, Mantine 9.5.1, Radix (shadcn/ui) 1.2.6.
React 19.2.8, TypeScript 6.0.3, from the workspace root. Every arm was a Claude (Opus 5)
agent with file read, grep, and shell tools — the same model family that wrote the hosts,
the filler, and the scoring scripts. Arm prompts are in `prompts/`, including the two
disclosed asymmetries (B received procedural coaching A2 did not; agents carried Yosegi's
AGENTS.md in their system prompt).

Arms:

- **A1** — spec + a bare export listing. No source, no registry.
- **A2** — spec + the host's full source. No registry.
- **B** — A2 plus a prebuilt registry.
- **G** — spec + the registry. **No source.** The isolation arm.
- **H** — spec + the host's emitted `.d.ts` files. **No source, no registry.** The
  package-consumer arm: what an agent reads when the design system arrives compiled in
  `node_modules`.

The 20 contract components are byte-identical within each library across S/M/L (verified,
0 diffs), and API-identical across the four libraries (verified by
`scripts/verify-contract.mjs` on normalized registry signatures — prop names, kinds, enum
options, slots; 0 mismatches across 12 packages). They are not byte-identical across
libraries; each library implements the same API on its own primitives, which is the design.

## Type errors

`tsc --noEmit`, counting only diagnostics in the emitted story. First submitted file; no
arm could typecheck (no `node_modules`).

| Host | A1 | A2 | B | G |
| --- | ---: | ---: | ---: | ---: |
| shadcn/ui 20 | 36 | 0 | 0 | 0 |
| shadcn/ui 80 | 30 | 0 | 0 | 0 |
| shadcn/ui 240 | 24 | 0 | 0 | 0 |
| MUI 20 | 33 | 0 | 0 | 0 |
| MUI 80 | 24 | 0 | 0 | 0 |
| MUI 240 | 30 | 0 | 0 | 0 |
| Chakra UI 20 | 26 | 0 | 0 | 0 |
| Chakra UI 80 | 35 | 0 | 0 | 0 |
| Chakra UI 240 | 30 | 0 | 0 | 0 |
| Mantine 20 | 24 | 0 | 0 | 0 |
| Mantine 80 | 25 | 0 | 0 | 0 |
| Mantine 240 | 29 | 0 | 0 | 0 |

Two A1 screens (shadcn 20, MUI 20) also crash at render, verified in Storybook — the MUI
one throws in `TimelineHeader` on a mis-named prop; the Mantine A1 renders an essentially
blank page.

**Corrected reading of A1.** The first publication scored A1 6–9 "silent errors" per run.
That was a scorer artifact: A1 arms write JSX-attribute syntax and the checker only matched
object literals, and silent errors are by definition mistakes that *compile* — A1 does not.
Re-checked against both syntaxes, A1's semantic content is almost entirely right: every A1
file renders the quote and the media, sets all four visibilities in spec order, and pins
post #1's counts. What A1 gets wrong is the API layer, loudly — children where a card takes
slots, loose props where a component takes a model, `onReply` for `onReplyPress`,
`timestamp` for `label`, agreeing across all four libraries. The spec supplied the
semantics; nothing supplied the API. That is a cleaner statement of what the registry
carries than the original one.

## Silent errors

Mistakes that compile and are still wrong. Gated on a clean typecheck (A1 is N/A by
definition); checks match both syntaxes; scored by `scripts/silent.mjs`, which is
regex-level, not a human review.

| Arm | Runs | Findings |
| --- | ---: | --- |
| A2 | 12 | 1 — `SearchBar` picked for `SearchField` (MUI 80) |
| B | 12 | 1 — `IconActionButton` picked for `NotificationBell` (Mantine 240) |
| G | 12 | 2 — handle rendered without `@` (MUI 20 and MUI 240) |

The A2 and B findings are near-miss picks — deliberate filler components that shadow real
ones with different props, existing only at 80 and 240. Both slots are `ReactNode`, both
compile. The MUI 80 A2 arm read both files and had been warned about near-misses, and still
chose wrong: a judgement failure with full information, which no lookup tool prevents.

**The G finding is structural** (**corrected** — first published as 0 / 0). MUI is the one
host whose `PostAuthorLine` renders the handle raw instead of prepending `@`; the correct
data is therefore `"@rin"` on MUI and `"rin"` everywhere else. All six source-reading MUI
arms wrote `"@rin"`. Of the three registry-only MUI arms, two wrote bare `"rin"` — a screen
that shows `Rin Amano rin` — and one guessed right from the spec. The registry carries
`handle: string`; it does not carry what the component does with it. A rendering convention
is exactly the kind of fact only the source (or a Story, or a screenshot) can supply, and
it is the one class of defect the no-source condition produced.

**G at scale.** The first publication ran G only at 20 components, where `component list`
alone nearly answers the screen. Re-run at 80 and 240 — the sizes where the near-miss
families exist: 0 type errors in all 8 runs, and 0 near-miss picks in all 12 G runs
against 1 each for A2 and B. The registry-only condition survived the sizes built to break
it, with the rendering-convention caveat above as its only loss.

## H — declarations only

Added after the question "when does an agent actually lack the source?" — the honest
answer is: rarely in a monorepo, but routinely when the design system is a separate
repository consumed as a compiled package. There the agent has the `.d.ts`, not the
`.tsx`. Eight runs, four libraries at 20 and at 240 components:

- Type errors: 0 in all 8. Near-miss picks at 240: 0 in all 4.
- Silent errors: the MUI `@` handle convention missed in 2 of 2 MUI runs — the same
  blind spot as G, for the same reason: declarations carry the same JSDoc and types the
  registry reads, and neither carries what a component does with a string at render.

So on correctness, source ≡ declarations ≡ registry, and only the spec-only arm fails.
The three carriers differ in read size (see below) and in what they cannot carry
(conventions — shared by declarations and registry; source alone has no blind spot in
this benchmark). Caveat: these `.d.ts` were emitted from hosts whose props carry JSDoc;
a package built without declaration JSDoc would be a darker condition.

## Discovery cost

**Corrected framing.** The first publication compared the registry against reading every
component file and called it five- to seven-fold. That comparison charges A2 for a search B
was never asked to do — the cost script hard-codes the 18 ids. Three honest columns: the
full component directory (upper bound; an agent with grep reads less), the `*Props`
interface blocks alone (lower bound; assumes the agent knows exactly where to look), and
the registry (one full `component list` + `component inspect` for the 18).

| Components | Source, full read | Source, props only | Declarations | Registry |
| --- | ---: | ---: | ---: | ---: |
| 20 | 20–27KB | 5.5–6KB | 10.9–17.6KB | 12.5–16KB |
| 80 | 75–110KB | 21–27KB | 38.8–45.7KB | 22–25KB |
| 240 | 231–332KB | 64–80KB | 114–136KB | 44–49KB |

Both curves are linear in host size; the registry has a smaller constant (~166 bytes per
listed component against ~1.25KB of source), not a better growth rate — at 240 the listing
is 82% of the registry's bytes. Against the props-only lower bound the registry reads
*more* at 20 components, breaks even at 80, and reads 0.55–0.77× at 240. The defensible
cost claim is modest: at design-system scale the registry answers in roughly a third to a
fifth of a full read and somewhat under a targeted read — and the G column shows the form
of the claim that actually matters: the host source an agent needs can be zero, at the
price of the rendering-convention blind spot.

## E — the Screen JSON route

Static screen (the class the route exists for), both routes with identical access, four
hosts each: all eight stories clean under `tsc`. The JSON route converged in **2 rounds**
(**corrected** from 2–3: the one third round was a cosmetic edit with byte-identical
validator output) — round 1 was the same `schemaVersion` schema rejection on all four
hosts, round 2 generated.

Two caveats the first publication understated. The validator's final output on every host
carries 15 × `NOT_EDITABLE_PROP_VALUE`: `json`-kind props are written into the story
*unchecked*, and on this screen that is where the semantics live (every `PostModel`,
every count, every visibility). And the static spec itself names the slots ("via its
avatar slot", "actions slot"), pre-answering the two divergence rules the route would
otherwise have to reveal. The loop's mechanics work — machine-readable, node-addressed,
self-correctable without a typechecker — but this experiment cannot show its semantic
layer catching anything, both because `inspect` upstream prevents the mistakes and because
the surface it declines to check is the surface that matters here.

## F — implementation handoff

From an approved Story to a page with real state, with and without `story import` +
`screen context`: both sides zero errors and full wiring on both hosts — and the wiring
list was itself the spec's checklist, so the measure cannot discriminate; the tie is partly
by construction.

The census the first publication left out: **21 of the 24** approved A2/B stories are
`component` + `args` CSF, which `story import` cannot read (`STORY_NOT_FOUND`; the
documented fallback is reading the Story as text). The handoff was measured on 2 of the 3
`render`-style stories, i.e. on the minority format its own generator emits. `story
import` on those recovered the tree faithfully — 28 nodes, 7 fixtures — with functions and
derived values dropped with warnings, as documented.

## Round 2 — Yosegi 0.3.0

Measured 2026-08-17, the day after 0.3.0 was published. All 68 cells re-run, one run per
cell, no retries, no cell failed to produce a file. The hosts are byte-identical to round
1's (`git status hosts/` is clean), so the only intended variable is the Yosegi version.

The CLI under test was a pinned install of the published `@yosegi/yosegi@0.3.0`.
`build-registry.sh`'s documented fallback was checked rather than assumed: with `YOSEGI_BIN`
unset, `npx --yes @yosegi/yosegi` resolved 0.3.0 and produced the same registry fingerprint
as the pinned bin.

### The registry did not move

0.2.0 and 0.3.0 were both run over all 12 hosts. Strip `generatedAt`, `builtWith`,
`builtWithCliPath`, and the `--report` path, and the two `registry.json` files are identical
on every host — same component counts, same `version` fingerprint. `component list` and
`component inspect` stdout is byte-identical too, on all 8 hosts checked, which is what the
discovery-cost column actually measures.

The fingerprints also tie round 2 back to round 1's committed artifacts: round 1's
`results-f/mantine/F2/screen.json` records `componentRegistryVersion: "src:01051c921b30"`,
and that is what 0.3.0 produces for `hosts/mantine` today. The registry round 1 measured and
the registry round 2 measured are the same bytes.

`verify-contract`: 20 components, 0 mismatching, at 4 hosts and at 12.

### Type errors

`tsc --noEmit`, counting only diagnostics in the emitted story. Round 1's figure in
parentheses.

| Host | A1 | A2 | B | G | H |
| --- | ---: | ---: | ---: | ---: | ---: |
| shadcn/ui 20 | 23 (36) | 0 (0) | 0 (0) | 0 (0) | 0 (0) |
| shadcn/ui 80 | 30 (30) | 0 (0) | 0 (0) | 0 (0) | — |
| shadcn/ui 240 | 30 (24) | 0 (0) | 0 (0) | 0 (0) | 0 (0) |
| MUI 20 | 33 (33) | 0 (0) | 0 (0) | 0 (0) | 0 (0) |
| MUI 80 | 30 (24) | 0 (0) | 0 (0) | 0 (0) | — |
| MUI 240 | 29 (30) | 0 (0) | 0 (0) | 0 (0) | 0 (0) |
| Chakra UI 20 | 35 (26) | 0 (0) | 0 (0) | 0 (0) | 0 (0) |
| Chakra UI 80 | 30 (35) | 0 (0) | 0 (0) | 0 (0) | — |
| Chakra UI 240 | 30 (30) | 0 (0) | 0 (0) | 0 (0) | 0 (0) |
| Mantine 20 | 23 (24) | 0 (0) | 0 (0) | 0 (0) | 0 (0) |
| Mantine 80 | 30 (25) | 0 (0) | 0 (0) | 0 (0) | — |
| Mantine 240 | 30 (29) | 0 (0) | 0 (0) | 0 (0) | 0 (0) |

Every information-bearing arm reproduced exactly: 0 errors in all 24 A2/B cells, all 12 G
cells, all 8 H cells. A1 moved cell by cell — range 23–35 against round 1's 24–36, mean 29.4
against 28.8 — and moved in both directions, which is what a spec-only arm re-rolled once
looks like. Nothing in A1's column is a version signal; it is the noise floor of this
design, and it is roughly ±6 per cell.

### Silent errors

Same scorer, same gate (a file with type errors is N/A).

| Arm | Runs | Round 2 findings | Round 1 findings |
| --- | ---: | --- | --- |
| A2 | 12 | 0 | 1 — `SearchBar` for `SearchField` (MUI 80) |
| B | 12 | 0 | 1 — `IconActionButton` for `NotificationBell` (Mantine 240) |
| G | 12 | 2 — handle without `@` (MUI 20, MUI 240) | 2 — same two cells |
| H | 8 | 1 — handle without `@` (MUI 20) | 2 — MUI 20 and MUI 240 |

**Near-miss picks: 0 in all 32 M/L cells**, across every arm, by name census over the 20
filler components `SCALE.md` names. Round 1's two near-miss findings did not reproduce. The
MUI 80 A2 arm — the cell round 1 called "a judgement failure with full information" — read
`search-bar`, `search-field`, and `search-field-compact` this time and picked `SearchField`,
naming the reason. Two rounds is two samples of a 1-per-12 rate; the honest reading is that
the near-miss rate is somewhere near zero and neither round resolves it further.

**The `@` handle finding is the one that reproduced**, and it reproduced where round 1 said
it was structural: MUI is the host whose `PostAuthorLine` renders the handle raw, and only
the no-source arms miss it. Across both rounds, 7 of 10 no-source MUI runs (G and H) wrote a
bare handle; all 12 source-reading MUI runs wrote `"@rin"`. The registry and the `.d.ts`
carry `handle: string` and neither carries what the component does with it.

### Discovery cost

Unchanged, and unchanged for a checkable reason: the hosts are byte-identical and the
registry CLI's stdout is byte-identical, so every column is the same measurement.
`results/raw/cost-v0.3.0.txt` is the re-run. Registry bytes: 12.5–16.0KB at 20, 21.8–24.9KB
at 80, 44.3–48.7KB at 240, against 19.7–27.3 / 75.2–109.7 / 231.3–332.3KB for a full source
read — the same 0.14–0.69× band round 1 published.

### E — the Screen JSON route

All eight stories clean under `tsc`, as in round 1.

**The validator did not change; the arms did.** Round 1 reported round 1 of the loop as a
`schemaVersion` schema rejection on all four hosts. In round 2 no arm was rejected at all:
every host's first `screen generate` exited 0. That is not a 0.3.0 fix. Round 1's rejected
input is in git, and re-running it now gives byte-identical validator output under 0.2.0 and
under 0.3.0 — same exit code, same issue list, on all four hosts. What changed is that round
2's E-json prompt (reconstructed — see below) tells the arm to read
`references/screen-json.md` before writing, and round 1's is not recorded.

Round 1's second caveat is now measured rather than asserted. Round 1 found 15 ×
`NOT_EDITABLE_PROP_VALUE` on every host and read it as a surface the route declines to
check. In round 2 the MUI and Chakra arms followed the warning's own suggestion — moved the
JSON values into `fixtures` and referenced them through `bindings` — and came out with 4
warnings instead of 15. The shadcn and Mantine arms wrote the values inline and got 15, as
round 1 did. The unchecked surface is real, but it is opt-out, and the warning says how.

### F — implementation handoff

Both conditions, both hosts: 0 type errors, and all six behaviours `SPEC-IMPL.md`'s five
wiring bullets ask for — tab switch, draft typing, submit clearing the draft, like toggle,
follow toggle, search input — present in all four pages. Same tie as round 1, and the same
reason it cannot discriminate: the wiring list is the spec's own checklist.

What round 2 adds is that `story import` contributed nothing on either host, and the pages
were correct anyway:

- **mantine F2** — `STORY_NOT_FOUND`. This round's approved Mantine B story is
  `component` + `args`, so the documented fallback fired. `setup-efg.sh` pins F to the two
  hosts whose round-1 story was render-style; which stories come out render-style is not
  stable across rounds (round 1: 3 of 24, round 2: 6 of 24, and only shadcn-l overlaps).
- **shadcn-l F2** — worse than a failure, because it looks like a success. The story's
  `render` is `() => <TimelineScreen />`, a wrapper around a local component, so import
  returned **1 node** and no warning about it. `screen context` then reported 1 component, 0
  imports, 0 tasks. This is the second failure mode 0.3.0's own `SKILL.md` documents ("a
  `render`-wrapper Story silently returns a single node and no warnings"), observed.

So F's finding is stronger than round 1's tie: on 2 of 2 cells the handoff commands
delivered nothing usable, and the arm produced a correct page from the Story as text. That
is the shape `SKILL.md` already tells agents to expect.

#### Provenance of round 1's F baseline

One real 0.2.0 → 0.3.0 behaviour change turned up, and finding it also undermined round 1's
own record. `story import` gained module-level fixture extraction. On round 1's committed
shadcn-l B story:

| | nodes | fixtures | warnings |
| --- | ---: | ---: | --- |
| 0.2.0 | 28 | 0 | `OPAQUE_PROP` per prop |
| 0.3.0 | 28 | 7 | `OPAQUE_FIXTURE`, naming the const |

Round 1's committed `results-f/shadcn-l/F2/screen.json` has those 7 fixtures. Published
0.2.0 cannot produce them. So round 1's F experiment was run against an unreleased local
build, not the published package — which this file never recorded, because it never recorded
a Yosegi version at all. Round 1's registry-side results are unaffected (the registry output
is identical across the two versions, verified above); its F numbers are the ones without a
known baseline.

### What round 2 changed in the harness

Three fixes and one gap, all of which only surface on a second run:

- `setup-arms.sh` copied `hosts/<lib>/src` wholesale, and on the four 20-component hosts
  that directory now contains `src/__screens__/` — round 1's own A1/A2/B outputs, kept there
  for Storybook review. A2 and B were being handed the previous round's answers inside their
  own source tree. `setup-efg.sh` already dropped that directory; `setup-arms.sh` now does
  too.
- `listing.sh` listed those same files to A1. Fixed; all 12 `LISTING.txt` are now
  byte-identical to round 1's, so A1's input is unchanged between rounds.
- `setup-efg.sh` takes section names (`E`/`F`/`G`/`H`). F reads an approved B story, so a
  full run aborted before building G and H whenever the arms had not run yet.
- `score-gh.sh` is new. G and H were scored by hand in round 1, which is why
  `results/raw/g-*.txt` from that round holds diagnostics for a file that was not the one
  being scored. It applies `score.sh`'s protocol and mirrors each output into
  `results/<host>/<arm>/`, the layout `silent.mjs` reads.

**The gap: E and F had no recorded prompts.** `MEASURE.md` says so — "ran from prompts that
were not kept". Round 2's `prompts/E-direct.md`, `E-json.md`, `F1.md`, and `F2.md` are new,
written from `MEASURE.md`, the SPEC files, and round 1's committed artifacts, in the same
shape as the arms that were recorded. They close the gap going forward, but they are a
reconstruction: **E and F are the two experiments whose round-1 comparison is not
prompt-controlled**, and the E convergence result above is the place that matters.

### Not re-run

The Storybook render checks. Round 1 verified two A1 screens crash at render and one renders
blank, by hand in a browser. Those are outside the 68 cells and were not repeated, so round
2 has no render column.

## What this does not show

- The hosts are synthetic and the divergence recipe is a dial: A1's error count is a
  direct function of how many renames the recipe applied. The recipe (R1–R7) is published;
  treat A1's column as "what this much divergence produces", not a universal constant.
- One run per cell. The silent-error rates (1–2 findings per 12 runs) are exactly the
  regime where one more run moves a cell.
- The spec names every component and pins the data. Discovery and curation — the half of
  the workflow where `--query` and Story-based recommendation would matter — is unmeasured,
  and the spec's own tree drawing contains two components a caller cannot place (a spec
  defect the scorer works around).
- Self-reported tool counts from arms were audited and found wrong in both sampled cases;
  nothing here relies on them.
- Scoring is scripts plus targeted hand-checks (G handles, near-miss usage, renders);
  cardinality is unchecked, and a name in a comment would count as rendered.
- Same model family throughout, including the scorer.

Extraction quality on real code is a different measurement, on a production design system:
`docs/registry.md` in the Yosegi repository.
