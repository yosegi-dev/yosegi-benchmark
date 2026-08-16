# Divergence recipe

The premise of the benchmark is a product that has been running long enough to grow
its own component layer on top of a UI library. That layer is what an agent has to
write against, and it is what the registry reads — `registry build` excludes
`node_modules`, so the library's own types are never the target.

This recipe defines how far each host's layer diverges from its library. It is applied
identically to all four hosts, so the only variable between hosts is the underlying
library. It is derived from what `README.md` names as not derivable from general React
knowledge: renamed variants, a named slot rather than children, a domain enum, a runtime
model object.

Every rule below is a thing real design systems do, not a trap invented for the benchmark.

## R1 — Variant values are domain words

`tone` on action controls is `"reply" | "repost" | "like" | "quiet"`, not the library's
`"primary" | "secondary" | "default"`. An agent writing from library knowledge reaches
for the library's vocabulary.

## R2 — Size vocabulary is the product's own

`density` is `"compact" | "cozy" | "roomy"`, not `size` with `"sm" | "md" | "lg"`.
Both the prop name and its values differ from every one of the four libraries.

## R3 — Two domain enums

- `visibility`: `"public" | "followers" | "circle" | "unlisted"`
- `feedKind`: `"for-you" | "following" | "list"`

Neither has any counterpart in a UI library, and neither is guessable from the screen
spec alone — the spec names three of the four visibility values, so an agent has to
discover the fourth and the exact spelling.

## R4 — State arrives as a runtime model, not loose props

`PostCard` takes `post: PostModel`, a single object, rather than `author`, `body`,
`createdAt` as separate props. `PostModel` carries `visibility`, so the enum is reachable
only through the object.

## R5 — Named slots, not children

`PostCard` has `media` and `quoted` as `ReactNode` props. It has no `children`. An agent
that assumes composition-by-children produces a card with an empty body.

## R6 — Event props are product-named

`onReplyPress` / `onRepostPress` / `onLikePress` on the action bar, `onFeedChange` on the
tabs, `onVisibilityChange` on the picker. Not `onClick`, not `onChange`, not `onSelect`.

## R7 — One collision with the library's own prop name

`PostAuthorLine` takes `label` where the library would call the same thing `title`, and
`TrendPanel` takes `heading`. Products rename these constantly, and the rename is
invisible to an agent that knows the library.

## What is held constant

The component names, their roles, their prop names, and their prop types are identical
across all four hosts. Only the implementation underneath differs — each host builds the
same API on its own library. This removes host-authoring variance from the comparison:
a difference in result between two hosts is a difference between the libraries and what
an agent knows about them, not a difference in how the two layers happened to be written.
