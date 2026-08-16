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
	displayName: "Aoi Kimura",
	handle: "aoi",
	avatarUrl: "https://picsum.photos/seed/aoi/96/96",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://picsum.photos/seed/rin/96/96",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://picsum.photos/seed/kai/96/96",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://picsum.photos/seed/mio/96/96",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://picsum.photos/seed/jun/96/96",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, one story file, and nothing left to wire up by hand.",
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
	body: "This is the part people underestimate: the layout was never the hard bit.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 62,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the rain came in.",
	createdAt: "38m",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle only: I still think relative timestamps are the hardest thing in this whole screen.",
	createdAt: "12m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 23,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 6120, category: "Trending in Japan" },
	{ id: "t-3", label: "#TypeScript", postCount: 42900 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{
		author: {
			id: "u-hana",
			displayName: "Hana Kubo",
			handle: "hana",
			avatarUrl: "https://picsum.photos/seed/hana/96/96",
			verified: true,
		},
		reason: "Followed by rin",
		following: false,
	},
	{
		author: {
			id: "u-taro",
			displayName: "Taro Nishi",
			handle: "taro",
			avatarUrl: "https://picsum.photos/seed/taro/96/96",
		},
		reason: "Followed by kai and 3 others",
		following: false,
	},
	{
		author: {
			id: "u-nao",
			displayName: "Nao Fujita",
			handle: "nao",
			avatarUrl: "https://picsum.photos/seed/nao/96/96",
		},
		reason: "Based on your activity",
		following: true,
	},
];

const postThreeImages = [
	{ url: "https://picsum.photos/seed/walk-1/640/480", alt: "A wet street seen from a bridge" },
	{ url: "https://picsum.photos/seed/walk-2/640/480", alt: "Grey clouds gathering over rooftops" },
];

function noop() {
	// Stories are static: every control is rendered in a fixed state.
}

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value="" onQueryChange={noop} />}
					notifications={<NotificationBell unreadCount={3} />}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed="for-you" onFeedChange={noop} />
					<PostComposer
						viewer={viewer}
						draft=""
						visibility="public"
						visibilityPicker={
							<VisibilityPicker visibility="public" onVisibilityChange={noop} />
						}
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
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trends for you"
						items={
							<>
								{trends.map((trend, index) => (
									<TrendItem key={trend.id} trend={trend} rank={index + 1} />
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
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
