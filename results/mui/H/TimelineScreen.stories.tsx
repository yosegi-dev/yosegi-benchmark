import type { Meta, StoryObj } from "@storybook/react";

import { AppShell } from "~/components/app-shell";
import { FeedTabs } from "~/components/feed-tabs";
import { FollowButton } from "~/components/follow-button";
import { NotificationBell } from "~/components/notification-bell";
import { PostActionBar } from "~/components/post-action-bar";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostBody } from "~/components/post-body";
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
	avatarUrl: "https://i.pravatar.cc/160?img=15",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
};

const post1: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, one scroll container, and a lot fewer layout shifts than last week.",
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
	body: "This is the part people underrate: the layout shift budget is a design decision, not a rendering detail.",
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
	body: "Two shots from the studio wall this morning. Same paint, completely different light.",
	createdAt: "2026-08-13T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 148,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle post: still not sure the composer should submit on Cmd+Enter. Opinions welcome.",
	createdAt: "2026-08-13T06:30:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 17,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "Layout Shift", postCount: 3820, category: "Web" },
	{ id: "t-3", label: "#StudioLight", postCount: 940, category: "Photography" },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by Kai", following: false },
	{ author: mio, reason: "Followed by Rin", following: false },
	{ author: jun, reason: "New to your circle", following: true },
];

const header = (
	<TimelineHeader
		viewer={viewer}
		search={<SearchField value="" placeholder="Search Yosegi" onQueryChange={noop} />}
		notifications={<NotificationBell unreadCount={3} tone="quiet" onBellPress={noop} />}
		onViewerPress={noop}
	/>
);

const main = (
	<>
		<FeedTabs activeFeed="for-you" onFeedChange={noop} />
		<PostComposer
			viewer={viewer}
			draft=""
			visibility="public"
			visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
			onDraftChange={noop}
			onSubmitPress={noop}
			submitLabel="Post"
		/>
		<PostCard
			post={post1}
			authorLine={
				<PostAuthorLine
					author={post1.author}
					label="2h"
					avatar={<UserAvatar author={post1.author} />}
					visibility={post1.visibility}
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
					avatar={<UserAvatar author={post2.author} />}
					visibility={post2.visibility}
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
					avatar={<UserAvatar author={post3.author} />}
					visibility={post3.visibility}
				/>
			}
			media={
				<PostMedia
					images={[
						{
							url: "https://picsum.photos/id/1015/800/600",
							alt: "Studio wall in morning light",
						},
						{
							url: "https://picsum.photos/id/1025/800/600",
							alt: "The same wall under an overcast sky",
						},
					]}
				/>
			}
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
					label="6h"
					avatar={<UserAvatar author={post4.author} />}
					visibility={post4.visibility}
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
			heading="Trending now"
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
			rows={
				<>
					{suggestions.map((suggestion) => (
						<SuggestedUserRow
							key={suggestion.author.id}
							author={suggestion.author}
							avatar={<UserAvatar author={suggestion.author} />}
							follow={
								<FollowButton following={suggestion.following} onFollowToggle={noop} />
							}
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
	parameters: { layout: "fullscreen" },
	args: {
		density: "cozy",
		header,
		main,
		sidebar,
	},
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
