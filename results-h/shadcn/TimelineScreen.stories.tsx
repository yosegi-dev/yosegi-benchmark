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
import type { AuthorModel, PostModel, TrendModel } from "~/models";

const noop = () => {};

const viewer: AuthorModel = {
	id: "u-viewer",
	displayName: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/160?u=nao",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?u=rin",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?u=kai",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?u=mio",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?u=jun",
};

const post1: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new density scale today. Everything from the avatar to the tab strip now reads from one table, so a screen can be tuned in a single prop.",
	createdAt: "2026-08-13T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underrate: one table beats twenty one-off spacing decisions.",
	createdAt: "2026-08-13T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const post3: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio wall we rebuilt this week. Same paint, very different light.",
	createdAt: "2026-08-13T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet morning, long walk, no notifications. Recommended.",
	createdAt: "2026-08-13T06:20:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 3,
	likeCount: 27,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 6120, category: "Frontend" },
	{ id: "t-3", label: "#TypeSafety", postCount: 2980 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by kai", following: false },
	{ author: mio, reason: "Followed by rin and 4 others", following: false },
	{ author: jun, reason: "Based on your recent likes", following: true },
];

const header = (
	<TimelineHeader
		viewer={viewer}
		search={<SearchField value="" placeholder="Search Yosegi" density="cozy" onQueryChange={noop} />}
		notifications={<NotificationBell unreadCount={3} tone="quiet" onBellPress={noop} />}
		onViewerPress={noop}
	/>
);

const main = (
	<>
		<FeedTabs activeFeed="for-you" onFeedChange={noop} density="cozy" />
		<PostComposer
			viewer={viewer}
			draft=""
			visibility="public"
			visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} density="cozy" />}
			onDraftChange={noop}
			onSubmitPress={noop}
			submitLabel="Post"
		/>
		<PostCard
			post={post1}
			density="cozy"
			authorLine={
				<PostAuthorLine
					author={post1.author}
					label="2h"
					avatar={<UserAvatar author={post1.author} density="cozy" />}
					visibility={post1.visibility}
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
					avatar={<UserAvatar author={post2.author} density="cozy" />}
					visibility={post2.visibility}
				/>
			}
			quoted={<QuotedPost post={post1} avatar={<UserAvatar author={post1.author} density="compact" />} />}
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
					avatar={<UserAvatar author={post3.author} density="cozy" />}
					visibility={post3.visibility}
				/>
			}
			media={
				<PostMedia
					images={[
						{ url: "https://picsum.photos/seed/studio-north/640/420", alt: "Studio wall lit from the north window" },
						{ url: "https://picsum.photos/seed/studio-dusk/640/420", alt: "The same wall at dusk, lit by a single lamp" },
					]}
					density="cozy"
				/>
			}
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
					avatar={<UserAvatar author={post4.author} density="cozy" />}
					visibility={post4.visibility}
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
);

const sidebar = (
	<>
		<TrendPanel
			heading="Trends for you"
			density="cozy"
			items={
				<>
					{trends.map((trend, index) => (
						<TrendItem key={trend.id} trend={trend} rank={index + 1} onTrendPress={noop} />
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
							avatar={<UserAvatar author={suggestion.author} density="cozy" />}
							follow={<FollowButton following={suggestion.following} onFollowToggle={noop} density="cozy" />}
							reason={suggestion.reason}
						/>
					))}
				</>
			}
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

export const Timeline: Story = {
	args: {
		header,
		main,
		sidebar,
		density: "cozy",
	},
};
