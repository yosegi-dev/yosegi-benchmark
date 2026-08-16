# Component API contract

Every host implements exactly this API. Prop names, prop types, export names, and file
paths are identical across all four hosts; only the implementation underneath differs.

NOT handed to any implementation arm. This is the answer key.

Shared conventions:

- Every component is a named export. No default exports.
- Files live at `src/components/<file>.tsx` exactly as listed.
- Optional props are `?`. Nothing uses `undefined` as a value; absent means absent.
- Every component's props interface is exported as `<Name>Props`.
- No component accepts `children` unless listed.
- JSDoc every prop whose meaning is not obvious from its name. One line.

## src/models.ts

```ts
export type Visibility = "public" | "followers" | "circle" | "unlisted";
export type FeedKind = "for-you" | "following" | "list";
export type Density = "compact" | "cozy" | "roomy";
export type ActionTone = "reply" | "repost" | "like" | "quiet";

export interface AuthorModel {
  id: string;
  displayName: string;
  handle: string;
  avatarUrl: string;
  verified?: boolean;
}

export interface PostModel {
  id: string;
  author: AuthorModel;
  body: string;
  createdAt: string;
  visibility: Visibility;
  replyCount: number;
  repostCount: number;
  likeCount: number;
  likedByViewer: boolean;
}

export interface TrendModel {
  id: string;
  label: string;
  postCount: number;
  category?: string;
}
```

## src/components/app-shell.tsx — `AppShell`

| Prop | Type | Notes |
| --- | --- | --- |
| `header` | `ReactNode` | slot |
| `main` | `ReactNode` | slot |
| `sidebar` | `ReactNode` | slot |
| `density?` | `Density` | default `"cozy"` |

No `children`.

## src/components/timeline-header.tsx — `TimelineHeader`

| Prop | Type | Notes |
| --- | --- | --- |
| `viewer` | `AuthorModel` | |
| `search` | `ReactNode` | slot |
| `notifications` | `ReactNode` | slot |
| `onViewerPress?` | `() => void` | |

## src/components/search-field.tsx — `SearchField`

| Prop | Type | Notes |
| --- | --- | --- |
| `value` | `string` | |
| `placeholder?` | `string` | |
| `density?` | `Density` | |
| `onQueryChange` | `(value: string) => void` | not `onChange` |

## src/components/notification-bell.tsx — `NotificationBell`

| Prop | Type | Notes |
| --- | --- | --- |
| `unreadCount` | `number` | |
| `tone?` | `ActionTone` | default `"quiet"` |
| `onBellPress?` | `() => void` | |

## src/components/user-avatar.tsx — `UserAvatar`

| Prop | Type | Notes |
| --- | --- | --- |
| `author` | `AuthorModel` | the whole model, not a `src` string |
| `density?` | `Density` | |

## src/components/feed-tabs.tsx — `FeedTabs`

| Prop | Type | Notes |
| --- | --- | --- |
| `activeFeed` | `FeedKind` | not `value` |
| `onFeedChange` | `(feed: FeedKind) => void` | |
| `density?` | `Density` | |

The tab labels are internal to the component; the caller passes no labels.

## src/components/post-composer.tsx — `PostComposer`

| Prop | Type | Notes |
| --- | --- | --- |
| `viewer` | `AuthorModel` | |
| `draft` | `string` | not `value` |
| `visibility` | `Visibility` | |
| `visibilityPicker` | `ReactNode` | slot |
| `onDraftChange` | `(draft: string) => void` | |
| `onSubmitPress` | `() => void` | |
| `submitLabel?` | `string` | default `"Post"` |

## src/components/visibility-picker.tsx — `VisibilityPicker`

| Prop | Type | Notes |
| --- | --- | --- |
| `visibility` | `Visibility` | |
| `onVisibilityChange` | `(visibility: Visibility) => void` | |
| `density?` | `Density` | |

## src/components/post-card.tsx — `PostCard`

| Prop | Type | Notes |
| --- | --- | --- |
| `post` | `PostModel` | R4: single runtime model |
| `authorLine` | `ReactNode` | slot |
| `actions` | `ReactNode` | slot |
| `media?` | `ReactNode` | slot (R5) |
| `quoted?` | `ReactNode` | slot (R5) |
| `density?` | `Density` | |

No `children`. The body text is rendered from `post.body` by the card itself.

## src/components/post-author-line.tsx — `PostAuthorLine`

| Prop | Type | Notes |
| --- | --- | --- |
| `author` | `AuthorModel` | |
| `label` | `string` | R7: the relative time string, e.g. `"2h"` |
| `avatar` | `ReactNode` | slot |
| `visibility?` | `Visibility` | renders a small marker |

## src/components/post-body.tsx — `PostBody`

| Prop | Type | Notes |
| --- | --- | --- |
| `text` | `string` | not `children` |
| `density?` | `Density` | |

## src/components/quoted-post.tsx — `QuotedPost`

| Prop | Type | Notes |
| --- | --- | --- |
| `post` | `PostModel` | |
| `avatar` | `ReactNode` | slot |

## src/components/post-media.tsx — `PostMedia`

| Prop | Type | Notes |
| --- | --- | --- |
| `images` | `{ url: string; alt: string }[]` | |
| `density?` | `Density` | |

## src/components/post-action-bar.tsx — `PostActionBar`

| Prop | Type | Notes |
| --- | --- | --- |
| `post` | `PostModel` | counts come from the model |
| `onReplyPress` | `() => void` | |
| `onRepostPress` | `() => void` | |
| `onLikePress` | `() => void` | |
| `density?` | `Density` | |

## src/components/action-button.tsx — `ActionButton`

| Prop | Type | Notes |
| --- | --- | --- |
| `tone` | `ActionTone` | R1 |
| `label` | `string` | R7 |
| `count?` | `number` | |
| `active?` | `boolean` | not `selected`, not `checked` |
| `density?` | `Density` | |
| `onPress` | `() => void` | not `onClick` |

## src/components/trend-panel.tsx — `TrendPanel`

| Prop | Type | Notes |
| --- | --- | --- |
| `heading` | `string` | R7 |
| `items` | `ReactNode` | slot — the `TrendItem`s |
| `density?` | `Density` | |

## src/components/trend-item.tsx — `TrendItem`

| Prop | Type | Notes |
| --- | --- | --- |
| `trend` | `TrendModel` | |
| `rank` | `number` | |
| `onTrendPress?` | `() => void` | |

## src/components/suggested-user-panel.tsx — `SuggestedUserPanel`

| Prop | Type | Notes |
| --- | --- | --- |
| `heading` | `string` | R7 |
| `rows` | `ReactNode` | slot |
| `density?` | `Density` | |

## src/components/suggested-user-row.tsx — `SuggestedUserRow`

| Prop | Type | Notes |
| --- | --- | --- |
| `author` | `AuthorModel` | |
| `avatar` | `ReactNode` | slot |
| `follow` | `ReactNode` | slot — the `FollowButton` |
| `reason?` | `string` | |

## src/components/follow-button.tsx — `FollowButton`

| Prop | Type | Notes |
| --- | --- | --- |
| `following` | `boolean` | |
| `onFollowToggle` | `(following: boolean) => void` | receives the next state |
| `density?` | `Density` | |

## Divergence checklist

Each host must satisfy every line, verified by reading the emitted registry:

- [ ] `ActionTone` values are `reply` / `repost` / `like` / `quiet` (R1)
- [ ] `Density` is the prop name `density` with `compact` / `cozy` / `roomy` (R2)
- [ ] `Visibility` has four values including `unlisted` (R3)
- [ ] `FeedKind` has three values including `list` (R3)
- [ ] `PostCard` takes `post: PostModel` and no loose author/body props (R4)
- [ ] `PostCard` has `media` and `quoted` slots and no `children` (R5)
- [ ] Event props end in `Press` / `Change` / `Toggle`, never `onClick` (R6)
- [ ] `PostAuthorLine.label`, `TrendPanel.heading`, `SuggestedUserPanel.heading` (R7)
