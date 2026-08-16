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
	id: "u-ayaka",
	displayName: "Ayaka Mori",
	handle: "ayaka",
	avatarUrl: "https://cdn.example.com/avatars/ayaka.jpg",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://cdn.example.com/avatars/rin.jpg",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://cdn.example.com/avatars/kai.jpg",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://cdn.example.com/avatars/mio.jpg",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://cdn.example.com/avatars/jun.jpg",
};

const firstPost: PostModel = {
	id: "p-1",
	author: rin,
	body: "Spent the morning rewriting our design tokens as one flat map. Every component now reads from the same three scales, and the diff deleted more than it added.",
	createdAt: "2026-08-13T07:40:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const secondPost: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we found last quarter. The hard part was never the tokens themselves, it was the components that had quietly grown their own.",
	createdAt: "2026-08-13T08:05:00.000Z",
	visibility: "followers",
	replyCount: 5,
	repostCount: 11,
	likeCount: 74,
	likedByViewer: false,
};

const thirdPost: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two views of the same dashboard, before and after the spacing pass. Same data, same components, only the density scale changed.",
	createdAt: "2026-08-13T08:32:00.000Z",
	visibility: "public",
	replyCount: 18,
	repostCount: 63,
	likeCount: 402,
	likedByViewer: false,
};

const fourthPost: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small thing that saved me an hour today: the composer keeps its audience setting between drafts now, so I stop publishing to the wrong circle.",
	createdAt: "2026-08-13T09:15:00.000Z",
	visibility: "circle",
	replyCount: 3,
	repostCount: 6,
	likeCount: 41,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "Design tokens", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "#TypeScript", postCount: 9260, category: "Programming" },
	{ id: "t-3", label: "Component libraries", postCount: 4130, category: "Design" },
];

const suggestions: { author: AuthorModel; following: boolean; reason: string }[] = [
	{
		author: {
			id: "u-nao",
			displayName: "Nao Kimura",
			handle: "nao",
			avatarUrl: "https://cdn.example.com/avatars/nao.jpg",
			verified: true,
		},
		following: false,
		reason: "Followed by @rin",
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Hayashi",
			handle: "sora",
			avatarUrl: "https://cdn.example.com/avatars/sora.jpg",
		},
		following: true,
		reason: "Followed by @kai and 12 others",
	},
	{
		author: {
			id: "u-emi",
			displayName: "Emi Tanaka",
			handle: "emi",
			avatarUrl: "https://cdn.example.com/avatars/emi.jpg",
		},
		following: false,
		reason: "New to your timeline",
	},
];

const header = (
	<TimelineHeader
		viewer={viewer}
		search={<SearchField value="" onQueryChange={noop} />}
		notifications={<NotificationBell unreadCount={7} onBellPress={noop} />}
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
		/>
		<PostCard
			post={firstPost}
			authorLine={
				<PostAuthorLine
					author={rin}
					label="2h"
					avatar={<UserAvatar author={rin} />}
					visibility={firstPost.visibility}
				/>
			}
			actions={
				<PostActionBar
					post={firstPost}
					onReplyPress={noop}
					onRepostPress={noop}
					onLikePress={noop}
				/>
			}
		/>
		<PostCard
			post={secondPost}
			authorLine={
				<PostAuthorLine
					author={kai}
					label="1h"
					avatar={<UserAvatar author={kai} />}
					visibility={secondPost.visibility}
				/>
			}
			quoted={<QuotedPost post={firstPost} avatar={<UserAvatar author={rin} density="compact" />} />}
			actions={
				<PostActionBar
					post={secondPost}
					onReplyPress={noop}
					onRepostPress={noop}
					onLikePress={noop}
				/>
			}
		/>
		<PostCard
			post={thirdPost}
			authorLine={
				<PostAuthorLine
					author={mio}
					label="45m"
					avatar={<UserAvatar author={mio} />}
					visibility={thirdPost.visibility}
				/>
			}
			media={
				<PostMedia
					images={[
						{
							url: "https://cdn.example.com/media/dashboard-before.png",
							alt: "Dashboard before the spacing pass",
						},
						{
							url: "https://cdn.example.com/media/dashboard-after.png",
							alt: "Dashboard after the spacing pass",
						},
					]}
				/>
			}
			actions={
				<PostActionBar
					post={thirdPost}
					onReplyPress={noop}
					onRepostPress={noop}
					onLikePress={noop}
				/>
			}
		/>
		<PostCard
			post={fourthPost}
			authorLine={
				<PostAuthorLine
					author={jun}
					label="20m"
					avatar={<UserAvatar author={jun} />}
					visibility={fourthPost.visibility}
				/>
			}
			actions={
				<PostActionBar
					post={fourthPost}
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
			items={trends.map((trend, index) => (
				<TrendItem key={trend.id} trend={trend} rank={index + 1} onTrendPress={noop} />
			))}
		/>
		<SuggestedUserPanel
			heading="Who to follow"
			rows={suggestions.map((suggestion) => (
				<SuggestedUserRow
					key={suggestion.author.id}
					author={suggestion.author}
					avatar={<UserAvatar author={suggestion.author} density="compact" />}
					follow={
						<FollowButton
							following={suggestion.following}
							onFollowToggle={noop}
							density="compact"
						/>
					}
					reason={suggestion.reason}
				/>
			))}
		/>
	</>
);

const meta = {
	title: "Screens/Timeline",
	component: AppShell,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Timeline: Story = {
	args: {
		header,
		main,
		sidebar,
	},
};
