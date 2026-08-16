# Implementation spec — Timeline page

The step after review: the approved Story becomes a real page. The Story is the source of
truth for structure and data; this spec defines only what "a real page" adds on top of it.

## Input

`TimelineScreen.stories.tsx` — the approved Story in your working directory. Its component
tree and its mock data are the contract. Reproduce them exactly; do not redesign the screen.

## Deliverable

`timeline-page.tsx`, in your working directory (next to `src/`, not inside it), exporting a
`TimelinePage` component:

- No Storybook imports. This is an application page, not a Story.
- The mock data moves in as module-level constants, exactly as the Story has it.
- The screen's interactions become local state (`useState`), replacing the Story's inert
  handlers:
  - The feed tabs switch: clicking a tab changes `activeFeed`.
  - The composer works: typing updates the draft, the visibility picker updates visibility,
    and submitting clears the draft.
  - Like toggles: `likedByViewer` flips and `likeCount` moves by one, per post.
  - Follow toggles per suggested user.
  - Search input updates its own value.
- Everything else stays exactly as the Story renders it.

It must type-check under the host's `tsconfig.json` with no errors.

Do not modify anything under `src/components/`.
