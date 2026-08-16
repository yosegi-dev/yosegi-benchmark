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
	id: "u-aoi",
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://cdn.example.com/avatars/aoi.png",
	verified: true,
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
	body: "Shipped the new timeline layout this morning. Two columns, one less thing to scroll past.",
	createdAt: "2026-08-15T07:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we measured last sprint — the sidebar was doing most of the damage.",
	createdAt: "2026-08-15T08:05:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio build. Same component, compact and roomy density.",
	createdAt: "2026-08-15T08:40:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 134,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small note for the group: the visibility marker now reads from the post model directly.",
	createdAt: "2026-08-15T09:15:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 3,
	likeCount: 18,
	likedByViewer: false,
};

const postThreeImages = [
	{
		url: "https://cdn.example.com/media/studio-compact.png",
		alt: "The post card rendered at compact density",
	},
	{
		url: "https://cdn.example.com/media/studio-roomy.png",
		alt: "The same post card rendered at roomy density",
	},
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9120, category: "Frontend" },
	{ id: "t-3", label: "#TypeScript", postCount: 25300 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-sora",
			displayName: "Sora Kimura",
			handle: "sora",
			avatarUrl: "https://cdn.example.com/avatars/sora.png",
			verified: true,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-haru",
			displayName: "Haru Ono",
			handle: "haru",
			avatarUrl: "https://cdn.example.com/avatars/haru.png",
		},
		reason: "Followed by kai and 3 others",
	},
	{
		author: {
			id: "u-nao",
			displayName: "Nao Fujita",
			handle: "nao",
			avatarUrl: "https://cdn.example.com/avatars/nao.png",
		},
		reason: "New to the timeline",
	},
];

/**
 * The four posts share the same card shape, so the only difference between them is
 * which optional slots are filled: `quoted` on post #2, `media` on post #3.
 */
function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={5} onBellPress={noop} />}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed="for-you" onFeedChange={noop} />
					<PostComposer
						draft=""
						onDraftChange={noop}
						onSubmitPress={noop}
						viewer={viewer}
						visibility="public"
						visibilityPicker={
							<VisibilityPicker visibility="public" onVisibilityChange={noop} />
						}
					/>
					<PostCard
						post={postOne}
						authorLine={
							<PostAuthorLine
								author={postOne.author}
								label="2h"
								visibility={postOne.visibility}
								avatar={<UserAvatar author={postOne.author} />}
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
								label="1h"
								visibility={postTwo.visibility}
								avatar={<UserAvatar author={postTwo.author} />}
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
								label="45m"
								visibility={postThree.visibility}
								avatar={<UserAvatar author={postThree.author} />}
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
								label="20m"
								visibility={postFour.visibility}
								avatar={<UserAvatar author={postFour.author} />}
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
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trends for you"
						items={
							<>
								{trends.map((trend, index) => (
									<TrendItem
										key={trend.id}
										rank={index + 1}
										trend={trend}
										onTrendPress={noop}
									/>
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
			}
		/>
	);
}

const meta = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
