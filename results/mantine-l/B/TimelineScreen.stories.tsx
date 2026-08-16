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
	displayName: "Nao Hayashi",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=1",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=2",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=3",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=4",
	verified: false,
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, sticky header, and every card is finally the same height as its content.",
	createdAt: "2026-05-04T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underestimate: the layout is easy, the empty states are the work.",
	createdAt: "2026-05-04T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the rain came in.",
	createdAt: "2026-05-04T07:15:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the small circle: taking next week off, back with the release notes after that.",
	createdAt: "2026-05-03T21:02:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 21,
	likedByViewer: false,
};

const postThreeImages = [
	{
		url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
		alt: "A lake at sunrise with low mist over the water",
	},
	{
		url: "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=800",
		alt: "A wet footpath running between two rows of trees",
	},
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 10", postCount: 9320, category: "Technology" },
	{ id: "t-3", label: "Morning walks", postCount: 2140 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-aya",
			displayName: "Aya Kurosawa",
			handle: "aya",
			avatarUrl: "https://i.pravatar.cc/160?img=5",
			verified: true,
		},
		reason: "Followed by @rin",
	},
	{
		author: {
			id: "u-sho",
			displayName: "Sho Nakai",
			handle: "sho",
			avatarUrl: "https://i.pravatar.cc/160?img=6",
		},
		reason: "Followed by @kai and 3 others",
	},
	{
		author: {
			id: "u-yui",
			displayName: "Yui Tanabe",
			handle: "yui",
			avatarUrl: "https://i.pravatar.cc/160?img=7",
		},
		reason: "Posts about design systems",
	},
];

function TimelineScreen() {
	return (
		<AppShell
			density="cozy"
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search Yosegi" />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} tone="quiet" />}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed="for-you" onFeedChange={noop} density="cozy" />
					<PostComposer
						draft=""
						onDraftChange={noop}
						onSubmitPress={noop}
						viewer={viewer}
						visibility="public"
						submitLabel="Post"
						visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} density="cozy" />}
					/>
					<PostCard
						post={postOne}
						authorLine={
							<PostAuthorLine
								author={postOne.author}
								label="2h"
								visibility={postOne.visibility}
								avatar={<UserAvatar author={postOne.author} density="cozy" />}
							/>
						}
						actions={
							<PostActionBar
								post={postOne}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
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
								avatar={<UserAvatar author={postTwo.author} density="cozy" />}
							/>
						}
						quoted={<QuotedPost post={postOne} avatar={<UserAvatar author={postOne.author} density="compact" />} />}
						actions={
							<PostActionBar
								post={postTwo}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
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
								avatar={<UserAvatar author={postThree.author} density="cozy" />}
							/>
						}
						media={<PostMedia images={postThreeImages} density="cozy" />}
						actions={
							<PostActionBar
								post={postThree}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>
					<PostCard
						post={postFour}
						authorLine={
							<PostAuthorLine
								author={postFour.author}
								label="1d"
								visibility={postFour.visibility}
								avatar={<UserAvatar author={postFour.author} density="cozy" />}
							/>
						}
						actions={
							<PostActionBar
								post={postFour}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trending now"
						density="cozy"
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
						density="cozy"
						rows={
							<>
								{suggestions.map(({ author, reason }) => (
									<SuggestedUserRow
										key={author.id}
										author={author}
										reason={reason}
										avatar={<UserAvatar author={author} density="cozy" />}
										follow={<FollowButton following={false} onFollowToggle={noop} density="compact" />}
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
