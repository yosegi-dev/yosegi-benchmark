# Scale spec

At 20 components, reading the source is as good as querying a registry — both arms scored
zero. `docs/registry.md` in the Yosegi repository claims the payoff scales with divergence;
the first run covered divergence and held size fixed, so it could not see the other axis.
This spec adds it.

## The variable

Three sizes per library, as separate workspace packages:

| Scale | Package | Components in `src/components/` |
| --- | --- | --- |
| S | `hosts/<lib>` | 20 |
| M | `hosts/<lib>-m` | 80 |
| L | `hosts/<lib>-l` | 240 |

The screen never changes. The 20 contract components never change — they are copied
verbatim from the S host, so `verify-contract` keeps passing and the task an arm is given is
identical at every size. What grows is the number of components that exist and are not part
of the answer.

## What the filler has to be

Volume alone would not test anything: 220 obviously-irrelevant components are 220 files an
agent never opens. A real design system of this size is hard to search for a different
reason — it is full of things that look like what you want.

So the filler includes deliberate near-miss families around the contract components:

| Contract component | Near misses that must also exist |
| --- | --- |
| `PostCard` | `PostCardCompact`, `PostCardSkeleton`, `LegacyPostCard`, `PostCardMedia` |
| `UserAvatar` | `UserAvatarGroup`, `AvatarStack`, `UserAvatarLegacy` |
| `ActionButton` | `ActionButtonGroup`, `IconActionButton`, `ActionButtonLegacy` |
| `TrendPanel` | `TrendPanelCompact`, `TrendBoard` |
| `SuggestedUserPanel` | `SuggestedUserPanelLegacy`, `SuggestedUserGrid` |
| `PostComposer` | `PostComposerCompact`, `ReplyComposer` |
| `FeedTabs` | `FeedTabsLegacy`, `FeedSegmentedControl` |
| `SearchField` | `SearchFieldCompact`, `SearchBar` |

Each near miss takes plausible but **different** props from the component it shadows — a
`size` where the real one takes `density`, loose props where the real one takes a model,
`children` where the real one takes slots. Choosing one by name is a mistake that compiles
about half the time and is wrong every time.

The rest of the filler is ordinary product surface: notification rows, settings rows, empty
states, profile blocks, media viewers, list cards. Named from the same domain, built the same
way, indistinguishable in shape from the real components.

## Fairness

The filler is not written to defeat any arm. The registry and the source carry exactly the
same facts about every component, near misses included — `component inspect` reads the types,
which is what `src/` contains. The only difference is access: one `component list --query
post` returns every candidate with its props, where reading source means opening each file to
find out. If that turns out not to matter at 240 components either, that is the result.

Every filler component is real code that compiles and could ship. None is a stub, and none is
marked as filler in any way an agent could use to skip it — no naming convention, no separate
directory, no comment. They live in `src/components/` with everything else.

## Held constant across S, M, L

- The screen spec and the 20 contract components, byte for byte
- The library and its version
- The toolchain: one TypeScript, one React, one `@storybook/react`, from the workspace root
- The three arms and their isolation
