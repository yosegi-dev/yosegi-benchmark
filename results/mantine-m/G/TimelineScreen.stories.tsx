import type { Meta, StoryObj } from "@storybook/react";

import { AppShell } from "~/components/app-shell";
import { FeedTabs } from "~/components/feed-tabs";
import { FollowButton } from "~/components/follow-button";
import { NotificationBell } from "~/components/notification-bell";
import { PostActionBar } from "~/components/post-action-bar";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostCard } from "~/components/post-card";
import { PostComposer } from "~/components/post-composer";
import { PostMedia } from "~/components/post-media";
import { QuotedPost } from "~/components/quoted-post";
import { SearchField } from "~/components/search-field";
import { SuggestedUserPanel } from "~/components/suggested-user-panel";
import { SuggestedUserRow } from "~/components/suggested-user-row";
import { TimelineHeader } from "~/components/timeline-header";
import { TrendItem } from "~/components/trend-item";
import { TrendPanel } from "~/components/trend-panel";
import { UserAvatar } from "~/components/user-avatar";
import { VisibilityPicker } from "~/components/visibility-picker";

const noop = () => {};

const viewer = {
	id: "u-viewer",
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
	verified: false,
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=5",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
	verified: false,
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=47",
	verified: true,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
	verified: false,
};

// The four timeline posts. `visibility` is pinned with `as const` so it narrows to
// the Visibility union rather than widening to string.
const post1 = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline rendering path this morning. Scrolling is finally smooth on the older phones we test on.",
	createdAt: "2026-08-15T07:12:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p-2",
	author: kai,
	body: "This matches what we measured on our side. The win comes almost entirely from dropping the extra layout pass.",
	createdAt: "2026-08-15T06:40:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 76,
	likedByViewer: false,
};

const post3 = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio session yesterday. Natural light only, no retouching.",
	createdAt: "2026-08-15T05:05:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const post4 = {
	id: "p-4",
	author: jun,
	body: "Quiet week. Reading a lot, writing a little, and finally cleaning up the notes from last month.",
	createdAt: "2026-08-15T03:30:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 3,
	likeCount: 41,
	likedByViewer: false,
};

const postMediaImages = [
	{
		url: "https://images.example.com/studio-wide.jpg",
		alt: "Wide shot of a studio lit by a north-facing window",
	},
	{
		url: "https://images.example.com/studio-detail.jpg",
		alt: "Close-up of a camera resting on a wooden bench",
	},
];

const trends = [
	{
		id: "t-1",
		label: "#TypeScript",
		postCount: 18400,
		category: "Technology",
	},
	{
		id: "t-2",
		label: "Design systems",
		postCount: 9320,
		category: "Design",
	},
	{
		id: "t-3",
		label: "#MorningRun",
		postCount: 4210,
		category: "Sports",
	},
];

const suggestions = [
	{ author: rin, reason: "Followed by @kai" },
	{ author: mio, reason: "Popular with people you follow" },
	{ author: jun, reason: "Followed by @rin and 3 others" },
];

const meta: Meta = {
	title: "Screens/TimelineScreen",
	parameters: {
		layout: "fullscreen",
		viewport: { defaultViewport: "desktop" },
	},
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<AppShell
			density="cozy"
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} tone="quiet" />}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed="for-you" onFeedChange={noop} density="cozy" />
					<PostComposer
						draft=""
						onDraftChange={noop}
						onSubmitPress={noop}
						viewer={viewer}
						visibility="public"
						submitLabel="Post"
						visibilityPicker={
							<VisibilityPicker visibility="public" onVisibilityChange={noop} density="cozy" />
						}
					/>
					<PostCard
						post={post1}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={rin}
								label="2h"
								visibility="public"
								avatar={<UserAvatar author={rin} density="cozy" />}
							/>
						}
						actions={
							<PostActionBar
								post={post1}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>
					<PostCard
						post={post2}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={kai}
								label="3h"
								visibility="followers"
								avatar={<UserAvatar author={kai} density="cozy" />}
							/>
						}
						quoted={<QuotedPost post={post1} avatar={<UserAvatar author={rin} density="compact" />} />}
						actions={
							<PostActionBar
								post={post2}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>
					<PostCard
						post={post3}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={mio}
								label="5h"
								visibility="public"
								avatar={<UserAvatar author={mio} density="cozy" />}
							/>
						}
						media={<PostMedia images={postMediaImages} density="cozy" />}
						actions={
							<PostActionBar
								post={post3}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>
					<PostCard
						post={post4}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={jun}
								label="7h"
								visibility="circle"
								avatar={<UserAvatar author={jun} density="cozy" />}
							/>
						}
						actions={
							<PostActionBar
								post={post4}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trending now"
						density="cozy"
						items={
							<>
								{trends.map((trend, index) => (
									<TrendItem key={trend.id} rank={index + 1} trend={trend} onTrendPress={noop} />
								))}
							</>
						}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						density="cozy"
						rows={
							<>
								{suggestions.map((suggestion) => (
									<SuggestedUserRow
										key={suggestion.author.id}
										author={suggestion.author}
										reason={suggestion.reason}
										avatar={<UserAvatar author={suggestion.author} density="cozy" />}
										follow={<FollowButton following={false} onFollowToggle={noop} density="cozy" />}
									/>
								))}
							</>
						}
					/>
				</>
			}
		/>
	),
};
