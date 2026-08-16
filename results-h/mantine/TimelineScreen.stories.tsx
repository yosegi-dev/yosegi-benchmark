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
	id: "u-sora",
	displayName: "Sora Kimura",
	handle: "sora",
	avatarUrl: "https://cdn.example.com/avatars/sora.png",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://cdn.example.com/avatars/rin.png",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://cdn.example.com/avatars/kai.png",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://cdn.example.com/avatars/mio.png",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://cdn.example.com/avatars/jun.png",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Spent the morning rewriting the sync layer and it finally survives a flaky network. Small win, big relief.",
	createdAt: "2024-05-14T08:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last quarter. Retrying is easy; knowing what is safe to retry is the actual work.",
	createdAt: "2024-05-14T07:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from the studio walk-through this afternoon. The light at 4pm is doing all the work here.",
	createdAt: "2024-05-14T06:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the close friends list: taking next week off, so the release review moves to the 27th.",
	createdAt: "2024-05-14T05:20:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 28,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TypeScript", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Design systems", postCount: 6210, category: "Design" },
	{ id: "t-3", label: "#FridayDeploy", postCount: 2380 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{
		author: {
			id: "u-aoi",
			displayName: "Aoi Nakamura",
			handle: "aoi",
			avatarUrl: "https://cdn.example.com/avatars/aoi.png",
			verified: true,
		},
		reason: "Followed by @rin",
		following: false,
	},
	{
		author: {
			id: "u-haru",
			displayName: "Haru Yoshida",
			handle: "haru",
			avatarUrl: "https://cdn.example.com/avatars/haru.png",
		},
		reason: "Followed by @kai and 3 others",
		following: false,
	},
	{
		author: {
			id: "u-nao",
			displayName: "Nao Fujita",
			handle: "nao",
			avatarUrl: "https://cdn.example.com/avatars/nao.png",
		},
		reason: "Based on your recent likes",
		following: true,
	},
];

const header = (
	<TimelineHeader
		viewer={viewer}
		search={<SearchField value="" placeholder="Search Yosegi" onQueryChange={noop} />}
		notifications={<NotificationBell unreadCount={5} tone="reply" onBellPress={noop} />}
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
			post={postOne}
			authorLine={
				<PostAuthorLine
					author={rin}
					label="2h"
					avatar={<UserAvatar author={rin} />}
					visibility={postOne.visibility}
				/>
			}
			actions={
				<PostActionBar
					post={postOne}
					onReplyPress={noop}
					onRepostPress={noop}
					onLikePress={noop}
				/>
			}
		/>

		<PostCard
			post={postTwo}
			authorLine={
				<PostAuthorLine
					author={kai}
					label="3h"
					avatar={<UserAvatar author={kai} />}
					visibility={postTwo.visibility}
				/>
			}
			quoted={<QuotedPost post={postOne} avatar={<UserAvatar author={rin} density="compact" />} />}
			actions={
				<PostActionBar
					post={postTwo}
					onReplyPress={noop}
					onRepostPress={noop}
					onLikePress={noop}
				/>
			}
		/>

		<PostCard
			post={postThree}
			authorLine={
				<PostAuthorLine
					author={mio}
					label="4h"
					avatar={<UserAvatar author={mio} />}
					visibility={postThree.visibility}
				/>
			}
			media={
				<PostMedia
					images={[
						{
							url: "https://cdn.example.com/media/studio-window.jpg",
							alt: "Afternoon light across a studio window",
						},
						{
							url: "https://cdn.example.com/media/studio-desk.jpg",
							alt: "A desk with prints laid out in a row",
						},
					]}
				/>
			}
			actions={
				<PostActionBar
					post={postThree}
					onReplyPress={noop}
					onRepostPress={noop}
					onLikePress={noop}
				/>
			}
		/>

		<PostCard
			post={postFour}
			authorLine={
				<PostAuthorLine
					author={jun}
					label="6h"
					avatar={<UserAvatar author={jun} />}
					visibility={postFour.visibility}
				/>
			}
			actions={
				<PostActionBar
					post={postFour}
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
							avatar={<UserAvatar author={suggestion.author} density="compact" />}
							follow={<FollowButton following={suggestion.following} onFollowToggle={noop} />}
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

export const Default: Story = {
	args: {
		header,
		main,
		sidebar,
		density: "cozy",
	},
};
