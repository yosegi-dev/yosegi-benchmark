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
	displayName: "Aoi Mori",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/150?img=12",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/150?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/150?img=15",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=68",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Spent the morning rewriting the sync layer and it finally holds under a flaky network. Small win, big relief.",
	createdAt: "2026-08-15T08:20:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last quarter. Offline-first is worth the extra week.",
	createdAt: "2026-08-15T07:05:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 62,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from the studio shoot this weekend. Natural light did most of the work.",
	createdAt: "2026-08-15T06:40:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the close circle: taking Friday off to finish the reading list.",
	createdAt: "2026-08-15T05:15:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const postThreeImages = [
	{ url: "https://picsum.photos/id/1015/800/600", alt: "River running through a canyon" },
	{ url: "https://picsum.photos/id/1025/800/600", alt: "A pug resting on a blanket" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#OfflineFirst", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Studio Light", postCount: 9320, category: "Photography" },
	{ id: "t-3", label: "#TypeSafety", postCount: 4210 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{
		author: {
			id: "u-nao",
			displayName: "Nao Kimura",
			handle: "nao",
			avatarUrl: "https://i.pravatar.cc/150?img=5",
			verified: true,
		},
		reason: "Followed by @rin",
		following: false,
	},
	{
		author: {
			id: "u-hana",
			displayName: "Hana Ueda",
			handle: "hana",
			avatarUrl: "https://i.pravatar.cc/150?img=23",
		},
		reason: "Followed by @kai and 3 others",
		following: false,
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Nishi",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/150?img=51",
		},
		reason: "Posts about photography",
		following: true,
	},
];

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} />}
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
								label="3h"
								visibility={postTwo.visibility}
								avatar={<UserAvatar author={postTwo.author} />}
							/>
						}
						quoted={
							<QuotedPost post={postOne} avatar={<UserAvatar author={postOne.author} />} />
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
								label="6h"
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
						heading="Trending now"
						items={trends.map((trend, index) => (
							<TrendItem
								key={trend.id}
								rank={index + 1}
								trend={trend}
								onTrendPress={noop}
							/>
						))}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={suggestions.map((suggestion) => (
							<SuggestedUserRow
								key={suggestion.author.id}
								author={suggestion.author}
								reason={suggestion.reason}
								avatar={<UserAvatar author={suggestion.author} />}
								follow={
									<FollowButton
										following={suggestion.following}
										onFollowToggle={noop}
									/>
								}
							/>
						))}
					/>
				</>
			}
		/>
	);
}

const meta = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
