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
	handle: "@nao",
	avatarUrl: "https://i.pravatar.cc/96?img=15",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "@rin",
	avatarUrl: "https://i.pravatar.cc/96?img=1",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "@kai",
	avatarUrl: "https://i.pravatar.cc/96?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "@mio",
	avatarUrl: "https://i.pravatar.cc/96?img=5",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "@jun",
	avatarUrl: "https://i.pravatar.cc/96?img=33",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, one composer, and a lot less state than the old one.",
	createdAt: "2026-05-12T09:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underrate: deleting state is a feature.",
	createdAt: "2026-05-12T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from this morning's walk along the river.",
	createdAt: "2026-05-12T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 148,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle only: I finally moved the build off the old bundler and nothing exploded.",
	createdAt: "2026-05-12T06:30:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 3,
	likeCount: 27,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9120, category: "Frontend" },
	{ id: "t-3", label: "#MorningWalk", postCount: 3480 },
];

const suggestions: { author: AuthorModel; following: boolean; reason: string }[] = [
	{ author: rin, following: false, reason: "Followed by Kai Doi" },
	{ author: mio, following: true, reason: "Followed by Rin Amano" },
	{ author: jun, following: false, reason: "New to your circle" },
];

const postImages: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/seed/river-1/800/600", alt: "River bank at sunrise" },
	{ url: "https://picsum.photos/seed/river-2/800/600", alt: "Footbridge over the river" },
];

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value="" placeholder="Search" onQueryChange={noop} />}
					notifications={<NotificationBell unreadCount={5} onBellPress={noop} />}
					onViewerPress={noop}
				/>
			}
			main={
				// The shell hands each column a single slot, so the vertical rhythm between
				// the feed's own sections is set here rather than by a host component.
				<div style={{ display: "grid", gap: 16 }}>
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
						quoted={<QuotedPost post={postOne} avatar={<UserAvatar author={postOne.author} density="compact" />} />}
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
						media={<PostMedia images={postImages} />}
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
				</div>
			}
			sidebar={
				<div style={{ display: "grid", gap: 16 }}>
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
								avatar={<UserAvatar author={suggestion.author} />}
								follow={<FollowButton following={suggestion.following} onFollowToggle={noop} />}
								reason={suggestion.reason}
							/>
						))}
					/>
				</div>
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
