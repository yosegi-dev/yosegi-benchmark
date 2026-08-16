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
	avatarUrl: "https://i.pravatar.cc/160?img=15",
	verified: false,
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
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
	avatarUrl: "https://i.pravatar.cc/160?img=45",
	verified: false,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
	verified: false,
};

const post1 = {
	id: "p-1",
	author: rin,
	body: "Shipped the new type-driven registry today. Turns out the hard part was never the codegen — it was agreeing on what a component's props actually mean.",
	createdAt: "2026-08-17T07:10:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last quarter. Naming is the whole design review.",
	createdAt: "2026-08-17T06:40:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const post3 = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the office. The light lasted about four minutes.",
	createdAt: "2026-08-17T05:55:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const post4 = {
	id: "p-4",
	author: jun,
	body: "Small circle post: I am finally rewriting the onboarding doc nobody has read since 2023.",
	createdAt: "2026-08-17T04:20:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const post3Images = [
	{
		url: "https://picsum.photos/seed/yosegi-a/800/600",
		alt: "Sunrise over a quiet residential street",
	},
	{
		url: "https://picsum.photos/seed/yosegi-b/800/600",
		alt: "Morning light through a row of ginkgo trees",
	},
];

const trends = [
	{
		id: "t-1",
		label: "#TypeDrivenUI",
		postCount: 18400,
		category: "Technology",
	},
	{
		id: "t-2",
		label: "Storybook 9",
		postCount: 9120,
		category: "Technology",
	},
	{
		id: "t-3",
		label: "朝の散歩",
		postCount: 4380,
	},
];

const suggestions = [
	{ author: rin, reason: "Followed by @kai" },
	{ author: mio, reason: "Posts about design systems" },
	{ author: jun, reason: "New to your network" },
];

const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		density: "cozy",
		header: (
			<TimelineHeader
				viewer={viewer}
				onViewerPress={noop}
				search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
				notifications={<NotificationBell unreadCount={3} onBellPress={noop} tone="quiet" />}
			/>
		),
		main: (
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
							author={post1.author}
							label="2h"
							visibility={post1.visibility}
							avatar={<UserAvatar author={post1.author} density="cozy" />}
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
							author={post2.author}
							label="3h"
							visibility={post2.visibility}
							avatar={<UserAvatar author={post2.author} density="cozy" />}
						/>
					}
					quoted={
						<QuotedPost post={post1} avatar={<UserAvatar author={post1.author} density="compact" />} />
					}
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
							author={post3.author}
							label="4h"
							visibility={post3.visibility}
							avatar={<UserAvatar author={post3.author} density="cozy" />}
						/>
					}
					media={<PostMedia images={post3Images} density="cozy" />}
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
							author={post4.author}
							label="6h"
							visibility={post4.visibility}
							avatar={<UserAvatar author={post4.author} density="cozy" />}
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
		),
		sidebar: (
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
		),
	},
};
