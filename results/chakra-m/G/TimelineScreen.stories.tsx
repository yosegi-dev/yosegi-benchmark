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
	displayName: "Nao Kishi",
	handle: "nao",
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
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?img=45",
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=68",
};

const post1 = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout today. Two columns, no surprises, and it finally reads well on a wide screen.",
	createdAt: "2026-08-13T09:00:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p-2",
	author: kai,
	body: "This matches what we measured last sprint. Wide screens were the whole problem.",
	createdAt: "2026-08-13T08:10:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
};

const post3 = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio window this morning. The light only lasts about ten minutes.",
	createdAt: "2026-08-13T07:25:00.000Z",
	visibility: "public" as const,
	replyCount: 21,
	repostCount: 33,
	likeCount: 186,
	likedByViewer: false,
};

const post4 = {
	id: "p-4",
	author: jun,
	body: "Small circle question: how do you all keep review queues from growing over a weekend?",
	createdAt: "2026-08-13T06:40:00.000Z",
	visibility: "circle" as const,
	replyCount: 7,
	repostCount: 2,
	likeCount: 41,
	likedByViewer: false,
};

const post3Images = [
	{
		url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
		alt: "Morning light across a studio desk",
	},
	{
		url: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800",
		alt: "A window with the blinds half drawn",
	},
];

const trends = [
	{ id: "t-1", label: "#DesignSystems", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 8210, category: "Software" },
	{ id: "t-3", label: "#TypeScript", postCount: 5390, category: "Programming" },
];

const suggestions = [
	{ author: rin, reason: "Followed by kai" },
	{ author: mio, reason: "Followed by rin and 3 others" },
	{ author: jun, reason: "New to your timeline" },
];

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
							label="3h"
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
							label="4h"
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
							label="5h"
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
