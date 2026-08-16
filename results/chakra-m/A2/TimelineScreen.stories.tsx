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
	displayName: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
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
	avatarUrl: "https://i.pravatar.cc/128?img=15",
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
	avatarUrl: "https://i.pravatar.cc/128?img=57",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Rewrote the whole onboarding flow this morning and it finally feels like one screen instead of four.",
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
	body: "This is the part people underestimate — the flow is the product, not the screens it happens to have.",
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
	body: "Two shots from the studio build-out. The light at 4pm is doing all the work here.",
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
	body: "Quiet week. Reading more, shipping less, and somehow the backlog got shorter anyway.",
	createdAt: "12m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 24,
	likedByViewer: false,
};

const postThreeImages = [
	{ url: "https://picsum.photos/seed/studio-a/800/800", alt: "Studio wall at golden hour" },
	{ url: "https://picsum.photos/seed/studio-b/800/800", alt: "Desk with the new lighting rig" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18420, category: "Technology" },
	{ id: "t-2", label: "Type scales", postCount: 6310, category: "Design" },
	{ id: "t-3", label: "#ShipFriday", postCount: 2145 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: mio, reason: "Followed by rin", following: false },
	{ author: jun, reason: "Followed by kai and 3 others", following: false },
	{ author: kai, reason: "Based on your recent likes", following: true },
];

const noop = () => {};

const header = (
	<TimelineHeader
		viewer={viewer}
		search={<SearchField value="" onQueryChange={noop} />}
		notifications={<NotificationBell unreadCount={5} onBellPress={noop} />}
		onViewerPress={noop}
	/>
);

const main = (
	<div style={{ display: "grid", gap: "1rem" }}>
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
	</div>
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
					avatar={<UserAvatar author={suggestion.author} />}
					reason={suggestion.reason}
					follow={<FollowButton following={suggestion.following} onFollowToggle={noop} />}
				/>
			))}
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

export const Timeline: Story = {
	args: {
		header,
		main,
		sidebar,
	},
};
