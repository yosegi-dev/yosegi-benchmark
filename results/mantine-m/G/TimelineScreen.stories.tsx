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
	id: "u-you",
	displayName: "Sora Kubo",
	handle: "sora",
	avatarUrl: "https://i.pravatar.cc/150?img=15",
	verified: true,
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/150?img=32",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/150?img=12",
	verified: false,
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?img=45",
	verified: false,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=8",
	verified: false,
};

const post1 = {
	id: "p-1",
	author: rin,
	body: "Shipped the new type-driven component registry today. Two weeks of edits, and the diff is smaller than the one it replaced.",
	createdAt: "2026-05-12T09:12:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last quarter. The registry pays for itself the moment a second team touches the design system.",
	createdAt: "2026-05-12T10:04:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const post3 = {
	id: "p-3",
	author: mio,
	body: "Morning walk before the standup. The park behind the office is unreasonably good in May.",
	createdAt: "2026-05-12T11:20:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const post4 = {
	id: "p-4",
	author: jun,
	body: "Small circle question: how do you all handle review load when half the team is on release duty?",
	createdAt: "2026-05-12T12:47:00.000Z",
	visibility: "circle" as const,
	replyCount: 21,
	repostCount: 3,
	likeCount: 54,
	likedByViewer: false,
};

const post3Images = [
	{
		url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
		alt: "Sunlight through the trees along the park path",
	},
	{
		url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
		alt: "A wooden bench beside the pond",
	},
];

const trends = [
	{
		id: "t-1",
		label: "#DesignSystems",
		postCount: 18400,
		category: "Technology",
	},
	{ id: "t-2", label: "Storybook 10", postCount: 9320, category: "Technology" },
	{ id: "t-3", label: "May in Tokyo", postCount: 4210 },
];

const suggested = [
	{
		author: {
			id: "u-aoi",
			displayName: "Aoi Mori",
			handle: "aoi",
			avatarUrl: "https://i.pravatar.cc/150?img=24",
			verified: true,
		},
		reason: "Followed by @rin",
		following: false,
	},
	{
		author: {
			id: "u-haru",
			displayName: "Haru Kita",
			handle: "haru",
			avatarUrl: "https://i.pravatar.cc/150?img=51",
			verified: false,
		},
		reason: "Followed by @kai and 12 others",
		following: false,
	},
	{
		author: {
			id: "u-nao",
			displayName: "Nao Fujii",
			handle: "nao",
			avatarUrl: "https://i.pravatar.cc/150?img=63",
			verified: false,
		},
		reason: "New to the timeline",
		following: true,
	},
];

const meta: Meta = {
	title: "Screens/TimelineScreen",
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
					notifications={<NotificationBell unreadCount={5} onBellPress={noop} tone="quiet" />}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed="for-you" onFeedChange={noop} />
					<PostComposer
						draft=""
						onDraftChange={noop}
						onSubmitPress={noop}
						viewer={viewer}
						visibility="public"
						submitLabel="Post"
						visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
					/>
					<PostCard
						post={post1}
						authorLine={
							<PostAuthorLine
								author={rin}
								label="2h"
								visibility="public"
								avatar={<UserAvatar author={rin} />}
							/>
						}
						actions={
							<PostActionBar
								post={post1}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={post2}
						authorLine={
							<PostAuthorLine
								author={kai}
								label="1h"
								visibility="followers"
								avatar={<UserAvatar author={kai} />}
							/>
						}
						quoted={<QuotedPost post={post1} avatar={<UserAvatar author={rin} density="compact" />} />}
						actions={
							<PostActionBar
								post={post2}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={post3}
						authorLine={
							<PostAuthorLine
								author={mio}
								label="43m"
								visibility="public"
								avatar={<UserAvatar author={mio} />}
							/>
						}
						media={<PostMedia images={post3Images} />}
						actions={
							<PostActionBar
								post={post3}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={post4}
						authorLine={
							<PostAuthorLine
								author={jun}
								label="12m"
								visibility="circle"
								avatar={<UserAvatar author={jun} />}
							/>
						}
						actions={
							<PostActionBar
								post={post4}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trending now"
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
						rows={
							<>
								{suggested.map((entry) => (
									<SuggestedUserRow
										key={entry.author.id}
										author={entry.author}
										reason={entry.reason}
										avatar={<UserAvatar author={entry.author} density="compact" />}
										follow={<FollowButton following={entry.following} onFollowToggle={noop} />}
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
