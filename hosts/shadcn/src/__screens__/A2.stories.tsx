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
	displayName: "Aya Mori",
	handle: "aya",
	avatarUrl: "https://i.pravatar.cc/128?img=47",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=5",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=32",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=18",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, one code path, and every card finally reads the same on desktop and on a phone.",
	createdAt: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underrate: the layout work is what made the card work, not the other way round.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Spent the morning at the coast shooting the fog rolling in. Two frames I actually like.",
	createdAt: "45m",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 122,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet reminder to myself: write the test before the fix, every time, even when the fix is obvious.",
	createdAt: "20m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 3,
	likeCount: 28,
	likedByViewer: false,
};

const postThreeImages = [
	{
		url: "https://images.example.com/fog-coast-01.jpg",
		alt: "Fog rolling over a rocky coastline at sunrise",
	},
	{
		url: "https://images.example.com/fog-coast-02.jpg",
		alt: "A lighthouse half hidden by low cloud",
	},
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9320, category: "Trending in Tech" },
	{ id: "t-3", label: "#FridayShip", postCount: 4210 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by kai", following: false },
	{ author: mio, reason: "Followed by rin and 12 others", following: true },
	{ author: jun, reason: "New to your circle", following: false },
];

const header = (
	<TimelineHeader
		viewer={viewer}
		search={<SearchField value="" onQueryChange={noop} />}
		notifications={<NotificationBell unreadCount={3} />}
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
		/>
		<PostCard
			post={postOne}
			authorLine={
				<PostAuthorLine
					author={postOne.author}
					label={postOne.createdAt}
					avatar={<UserAvatar author={postOne.author} />}
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
					author={postTwo.author}
					label={postTwo.createdAt}
					avatar={<UserAvatar author={postTwo.author} />}
					visibility={postTwo.visibility}
				/>
			}
			quoted={
				<QuotedPost
					post={postOne}
					avatar={<UserAvatar author={postOne.author} density="compact" />}
				/>
			}
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
					author={postThree.author}
					label={postThree.createdAt}
					avatar={<UserAvatar author={postThree.author} />}
					visibility={postThree.visibility}
				/>
			}
			media={<PostMedia images={postThreeImages} />}
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
					author={postFour.author}
					label={postFour.createdAt}
					avatar={<UserAvatar author={postFour.author} />}
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
			heading="Trends for you"
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
					reason={suggestion.reason}
					follow={
						<FollowButton
							following={suggestion.following}
							onFollowToggle={noop}
							density="compact"
						/>
					}
				/>
			))}
		/>
	</>
);

const meta: Meta<typeof AppShell> = {
	title: "Screens/A2",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		header,
		main,
		sidebar,
	},
};
