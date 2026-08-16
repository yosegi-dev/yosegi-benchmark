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
	displayName: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/128?img=15",
	verified: false,
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=32",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
	verified: false,
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=45",
	verified: false,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=68",
	verified: false,
};

// `visibility` is pinned with `as const` so each literal stays assignable to the
// Visibility union instead of widening to `string`.
const post1 = {
	id: "p-1",
	author: rin,
	body: "Spent the morning rewriting the sync layer and it finally holds under a flaky network. Small win, big relief.",
	createdAt: "2026-08-13T09:12:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p-2",
	author: kai,
	body: "This is the part nobody puts in the changelog, and it is the part that takes the whole week.",
	createdAt: "2026-08-13T08:40:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const post3 = {
	id: "p-3",
	author: mio,
	body: "Two frames from the walk home. The light lasted about four minutes.",
	createdAt: "2026-08-13T07:55:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 21,
	likeCount: 148,
	likedByViewer: false,
};

const post4 = {
	id: "p-4",
	author: jun,
	body: "Keeping this one small: the deadline moved, and I am telling the people it actually affects.",
	createdAt: "2026-08-13T07:20:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const post3Images = [
	{
		url: "https://images.example.com/mio/dusk-01.jpg",
		alt: "A row of houses backlit by orange dusk light",
	},
	{
		url: "https://images.example.com/mio/dusk-02.jpg",
		alt: "A crossing signal glowing against a deep blue sky",
	},
];

const trends = [
	{ id: "t-1", label: "#やってみた", postCount: 18400, category: "Trending in Japan" },
	{ id: "t-2", label: "Local-first sync", postCount: 9210, category: "Technology" },
	{ id: "t-3", label: "夏の写真", postCount: 4380, category: "Photography" },
];

const suggested = [
	{
		author: {
			id: "u-sora",
			displayName: "Sora Nishida",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/128?img=5",
			verified: true,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-hana",
			displayName: "Hana Oda",
			handle: "hana",
			avatarUrl: "https://i.pravatar.cc/128?img=26",
			verified: false,
		},
		reason: "Followed by kai and 3 others",
	},
	{
		author: {
			id: "u-tetsu",
			displayName: "Tetsu Maruyama",
			handle: "tetsu",
			avatarUrl: "https://i.pravatar.cc/128?img=51",
			verified: false,
		},
		reason: "New to your timeline",
	},
];

const header = (
	<TimelineHeader
		viewer={viewer}
		onViewerPress={noop}
		search={<SearchField value="" onQueryChange={noop} placeholder="Search Yosegi" />}
		notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
	/>
);

const main = (
	<>
		<FeedTabs activeFeed="for-you" onFeedChange={noop} />
		<PostComposer
			draft=""
			onDraftChange={noop}
			onSubmitPress={noop}
			viewer={viewer}
			visibility="public"
			visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
		/>
		<PostCard
			post={post1}
			authorLine={
				<PostAuthorLine
					author={post1.author}
					label="2h"
					visibility={post1.visibility}
					avatar={<UserAvatar author={post1.author} />}
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
					author={post2.author}
					label="3h"
					visibility={post2.visibility}
					avatar={<UserAvatar author={post2.author} />}
				/>
			}
			quoted={<QuotedPost post={post1} avatar={<UserAvatar author={post1.author} />} />}
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
					author={post3.author}
					label="4h"
					visibility={post3.visibility}
					avatar={<UserAvatar author={post3.author} />}
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
					author={post4.author}
					label="5h"
					visibility={post4.visibility}
					avatar={<UserAvatar author={post4.author} />}
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
);

const sidebar = (
	<>
		<TrendPanel
			heading="Trends for you"
			items={trends.map((trend, index) => (
				<TrendItem key={trend.id} rank={index + 1} trend={trend} onTrendPress={noop} />
			))}
		/>
		<SuggestedUserPanel
			heading="Who to follow"
			rows={suggested.map((entry) => (
				<SuggestedUserRow
					key={entry.author.id}
					author={entry.author}
					reason={entry.reason}
					avatar={<UserAvatar author={entry.author} />}
					follow={<FollowButton following={false} onFollowToggle={noop} />}
				/>
			))}
		/>
	</>
);

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		header,
		main,
		sidebar,
	},
};
