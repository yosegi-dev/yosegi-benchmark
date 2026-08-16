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
	avatarUrl: "https://i.pravatar.cc/160?img=12",
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
	avatarUrl: "https://i.pravatar.cc/160?img=51",
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
	verified: true,
};

const post1 = {
	id: "p1",
	author: rin,
	body: "Shipped the new registry view this morning. It reads the host's types directly, so the props list is never out of date with the code.",
	createdAt: "2h",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p2",
	author: kai,
	body: "This is the part everyone underestimates. Types as the source of truth removes a whole class of drift.",
	createdAt: "1h",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const post3 = {
	id: "p3",
	author: mio,
	body: "Two shots from the studio wall we finished last weekend. The second one is my favourite.",
	createdAt: "38m",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const post4 = {
	id: "p4",
	author: jun,
	body: "Small circle question: does anyone still run their own build server, or has everyone moved on?",
	createdAt: "12m",
	visibility: "circle" as const,
	replyCount: 21,
	repostCount: 2,
	likeCount: 44,
	likedByViewer: false,
};

const post3Images = [
	{
		url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
		alt: "A pale studio wall lit from the left, half painted",
	},
	{
		url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
		alt: "The finished wall at dusk, with the lamp switched on",
	},
];

const trends = [
	{ id: "t1", label: "#typesafety", postCount: 18400, category: "Technology" },
	{ id: "t2", label: "Storybook 9", postCount: 9120, category: "Frontend" },
	{ id: "t3", label: "#designsystems", postCount: 5340, category: "Design" },
];

const suggestions = [
	{
		author: {
			id: "u-aoi",
			displayName: "Aoi Nakamura",
			handle: "aoi",
			avatarUrl: "https://i.pravatar.cc/160?img=24",
			verified: false,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Hayashi",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/160?img=15",
			verified: true,
		},
		reason: "Followed by kai and 4 others",
	},
	{
		author: {
			id: "u-yuki",
			displayName: "Yuki Mori",
			handle: "yuki",
			avatarUrl: "https://i.pravatar.cc/160?img=5",
			verified: false,
		},
		reason: "New to your timeline",
	},
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

export const Timeline: Story = {
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
							label="38m"
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
		),
		sidebar: (
			<>
				<TrendPanel
					heading="Trends for you"
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
							{suggestions.map((suggestion) => (
								<SuggestedUserRow
									key={suggestion.author.id}
									author={suggestion.author}
									reason={suggestion.reason}
									avatar={<UserAvatar author={suggestion.author} density="compact" />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
								/>
							))}
						</>
					}
				/>
			</>
		),
	},
};
