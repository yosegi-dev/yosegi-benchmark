# Screen spec — Moderation review (static)

A second, deliberately static screen: nothing on it takes an event handler. This is the
screen class Yosegi's own Agent Skill routes through Screen JSON (its route test sends any
screen with a non-JSON value — a handler, a runtime object — to the direct route instead).

## Screen

A moderation review page at desktop width: a main column of reported posts and a sidebar.

```
AppShell
├─ header: a heading reading "Moderation review"
├─ main column — 3 reported posts, newest first
│  └─ PostCard × 3
│     ├─ PostAuthorLine   (avatar via its avatar slot, relative time as label,
│     │                    visibility marker)
│     ├─ QuotedPost       (only on post #2 — quotes post #1, with its own avatar)
│     ├─ PostMedia        (only on post #3 — two images)
│     └─ actions slot: a plain container with the report tally text
└─ sidebar
   └─ TrendPanel ("Review queue trends")
      └─ TrendItem × 3    (ranks 1–3)
```

## The three posts

| # | Author | Visibility | Report tally | Extra |
| --- | --- | --- | --- | --- |
| 1 | Rin Amano (@rin) | `public` | "Reported 3 times" | — |
| 2 | Kai Doi (@kai) | `followers` | "Reported once" | quotes post #1 |
| 3 | Mio Sato (@mio) | `unlisted` | "Reported 5 times" | two images |

- Relative times: 2h / 5h / 1d.
- Counts: any plausible values. No post is liked by the viewer.
- The trend items: #typescript (8,320 posts), #storybook (6,120), #designsystems (3,980),
  ranked 1–3 in that order.

## Deliverable

One Storybook CSF file, `ModerationScreen.stories.tsx`, default export plus a single named
story, using only the host's own components from `src/components/`. It must type-check under
the host's `tsconfig.json` with no errors.

Do not modify anything under `src/components/`.
