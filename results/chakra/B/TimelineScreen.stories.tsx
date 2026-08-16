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
	displayName: "Aoi Mori",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=52",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=68",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, one sticky header, and every card built from the same handful of components.",
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
	body: "This is the part people underestimate: the layout is easy, the component contract is the hard bit.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk. The light was doing something unusual around the river.",
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
	body: "Quiet note for the circle: the review is moved to Thursday, same room.",
	createdAt: "12m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/seed/river-morning/640/640", alt: "Mist over the river at sunrise" },
	{ url: "https://picsum.photos/seed/river-bridge/640/640", alt: "A footbridge seen from the bank" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18420, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9310, category: "Software" },
	{ id: "t-3", label: "#MorningWalk", postCount: 4120 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by kai", following: false },
	{ author: mio, reason: "Followed by rin and 3 others", following: false },
	{ author: jun, reason: "New to your area", following: true },
];

const columnStyle = {
	display: "flex",
	flexDirection: "column" as const,
	gap: "1rem",
};

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Timeline: Story = {
	args: {
		header: (
			<TimelineHeader
				viewer={viewer}
				onViewerPress={noop}
				search={<SearchField value="" onQueryChange={noop} placeholder="Search Yosegi" />}
				notifications={<NotificationBell unreadCount={5} onBellPress={noop} tone="quiet" />}
			/>
		),
		main: (
			<div style={columnStyle}>
				<FeedTabs activeFeed="for-you" onFeedChange={noop} />
				<PostComposer
					viewer={viewer}
					draft=""
					visibility="public"
					onDraftChange={noop}
					onSubmitPress={noop}
					visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
				/>
				<PostCard
					post={postOne}
					authorLine={
						<PostAuthorLine
							author={postOne.author}
							label={postOne.createdAt}
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
							label={postTwo.createdAt}
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
							label={postThree.createdAt}
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
							label={postFour.createdAt}
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
		),
		sidebar: (
			<div style={columnStyle}>
				<TrendPanel
					heading="Trends for you"
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
					rows={
						<>
							{suggestions.map((suggestion) => (
								<SuggestedUserRow
									key={suggestion.author.id}
									author={suggestion.author}
									reason={suggestion.reason}
									avatar={<UserAvatar author={suggestion.author} />}
									follow={
										<FollowButton following={suggestion.following} onFollowToggle={noop} />
									}
								/>
							))}
						</>
					}
				/>
			</div>
		),
	},
};
