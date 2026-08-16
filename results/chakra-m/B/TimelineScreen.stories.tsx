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
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/128?img=1",
	verified: true,
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
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=44",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, one composer, zero regrets.",
	createdAt: "2026-08-17T09:00:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the write-up I keep sending to people who ask how we lay out a feed.",
	createdAt: "2026-08-17T08:20:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Morning walk before the standup. The light was doing something unusual.",
	createdAt: "2026-08-17T07:05:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: what is the smallest change you made that people noticed?",
	createdAt: "2026-08-17T06:40:00.000Z",
	visibility: "circle",
	replyCount: 21,
	repostCount: 3,
	likeCount: 57,
	likedByViewer: false,
};

const postThreeImages = [
	{ url: "https://picsum.photos/seed/timeline-a/800/600", alt: "A footpath under morning light" },
	{ url: "https://picsum.photos/seed/timeline-b/800/600", alt: "A river seen from a low bridge" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9120, category: "Trending in Japan" },
	{ id: "t-3", label: "#MorningWalk", postCount: 3480 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{
		author: {
			id: "u-hana",
			displayName: "Hana Kubo",
			handle: "hana",
			avatarUrl: "https://i.pravatar.cc/128?img=20",
			verified: true,
		},
		reason: "Followed by rin",
		following: false,
	},
	{
		author: {
			id: "u-taku",
			displayName: "Taku Mori",
			handle: "taku",
			avatarUrl: "https://i.pravatar.cc/128?img=52",
		},
		reason: "Followed by kai and 3 others",
		following: false,
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Fujii",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/128?img=60",
		},
		reason: "New to your area",
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
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} tone="quiet" />}
				/>
			}
			main={
				<div>
					<FeedTabs activeFeed="for-you" onFeedChange={noop} />
					<PostComposer
						draft=""
						onDraftChange={noop}
						onSubmitPress={noop}
						viewer={viewer}
						visibility="public"
						visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
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
								label="5h"
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
				</div>
			}
			sidebar={
				<div>
					<TrendPanel
						heading="Trends for you"
						items={trends.map((trend, index) => (
							<TrendItem key={trend.id} rank={index + 1} trend={trend} onTrendPress={noop} />
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
								follow={<FollowButton following={suggestion.following} onFollowToggle={noop} />}
							/>
						))}
					/>
				</div>
			}
		/>
	);
}

const meta: Meta<typeof TimelineScreen> = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
