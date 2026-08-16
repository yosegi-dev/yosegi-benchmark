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

const viewer: AuthorModel = {
	id: "u-viewer",
	displayName: "Nao Kimura",
	handle: "nao",
	avatarUrl: "https://images.example.com/avatars/nao.png",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://images.example.com/avatars/rin.png",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://images.example.com/avatars/kai.png",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://images.example.com/avatars/mio.png",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://images.example.com/avatars/jun.png",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout today. Two columns, sticky header, and the sidebar finally stops fighting the feed on narrow desktops.",
	createdAt: "2026-08-13T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw in the usability round — people read the feed first and only reach for the sidebar once they stall.",
	createdAt: "2026-08-13T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio review this morning. Left is the current build, right is the density pass we are testing next week.",
	createdAt: "2026-08-13T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the small circle: the migration script is ready, but I want one more dry run before anyone points production at it.",
	createdAt: "2026-08-13T06:30:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 3,
	likeCount: 27,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{
		url: "https://images.example.com/media/studio-current.jpg",
		alt: "The current timeline build shown on a desktop display",
	},
	{
		url: "https://images.example.com/media/studio-density.jpg",
		alt: "The compact density pass shown side by side with the current build",
	},
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Timeline redesign", postCount: 6230, category: "Product" },
	{ id: "t-3", label: "#TypeScript", postCount: 42100 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by @kai", following: false },
	{ author: mio, reason: "Followed by @rin and 12 others", following: false },
	{ author: jun, reason: "New to Yosegi", following: true },
];

const noop = () => {};

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		density: "cozy",
		header: (
			<TimelineHeader
				viewer={viewer}
				search={<SearchField value="" onQueryChange={noop} />}
				notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
				onViewerPress={noop}
			/>
		),
		main: (
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
							label="2h"
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
							label="3h"
							avatar={<UserAvatar author={postTwo.author} />}
							visibility={postTwo.visibility}
						/>
					}
					quoted={
						<QuotedPost post={postOne} avatar={<UserAvatar author={postOne.author} density="compact" />} />
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
							label="4h"
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
							label="6h"
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
		),
		sidebar: (
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
							reason={suggestion.reason}
							avatar={<UserAvatar author={suggestion.author} density="compact" />}
							follow={<FollowButton following={suggestion.following} onFollowToggle={noop} density="compact" />}
						/>
					))}
				/>
			</>
		),
	},
};
