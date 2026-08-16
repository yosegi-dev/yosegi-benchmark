# Results

One screen, four UI libraries, three host sizes, and arms that vary what the agent can see.
68 implementations: 36 across A1/A2/B and three sizes, 12 registry-only (G, three sizes),
8 declarations-only (H, sizes 20 and 240), 8 on the Screen JSON route (E), 4 on the
implementation handoff (F). Measured 2026-08-13/14. One run per cell, no repeats.

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
