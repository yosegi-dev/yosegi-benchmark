# Screen spec — SNS timeline

The single screen every host implements. Identical across all four UI libraries.
This file is handed to every implementation arm.

## Screen

A social timeline page, rendered at desktop width with a two-column layout:
a main column and a right sidebar.

```
AppShell
├─ TimelineHeader          (avatar, search, notification bell)
├─ main column
│  ├─ FeedTabs             ("For you" / "Following")
│  ├─ PostComposer         (text input, visibility picker, submit)
│  └─ PostCard × 4
│     ├─ PostAuthorLine    (avatar, display name, handle, relative time)
│     ├─ PostBody          (text)
│     ├─ QuotedPost        (only on post #2 — a nested post)
│     ├─ PostMedia         (only on post #3 — two images)
│     └─ PostActionBar     (reply / repost / like, each with a count)
└─ sidebar
   ├─ TrendPanel
   │  └─ TrendItem × 3
   └─ SuggestedUserPanel
      └─ SuggestedUserRow × 3   (each with a FollowButton)
```

## The four posts

| # | Author | Visibility | Extra |
| --- | --- | --- | --- |
| 1 | Rin Amano (@rin) | `public` | — |
| 2 | Kai Doi (@kai) | `followers` | quotes post #1 |
| 3 | Mio Sato (@mio) | `public` | two images |
| 4 | Jun Ito (@jun) | `circle` | — |

- The composer starts empty, with visibility `public`.
- `FeedTabs` starts on the "For you" tab.
- Counts on the action bar: reply / repost / like are 12 / 48 / 310 for post #1,
  and any plausible values for the rest.
- Post #1 has been liked by the viewer; the others have not.

## Deliverable

One Storybook CSF file, `TimelineScreen.stories.tsx`, default export plus a single
named story, using only the host's own components from `src/components/`.
It must type-check under the host's `tsconfig.json` with no errors.

Do not modify anything under `src/components/`. The screen is built from the
components as they exist.
