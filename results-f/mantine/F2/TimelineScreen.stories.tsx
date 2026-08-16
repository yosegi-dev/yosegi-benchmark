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
	avatarUrl: "https://placehold.co/96x96/png?text=A",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://placehold.co/96x96/png?text=R",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://placehold.co/96x96/png?text=K",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://placehold.co/96x96/png?text=M",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://placehold.co/96x96/png?text=J",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout today. Two columns, one main feed, and the sidebar finally stops fighting the content.",
	createdAt: "2024-05-02T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underrate: the sidebar is a layout problem, not a content problem.",
	createdAt: "2024-05-02T08:40:00.000Z",
	visibility: "followers",
	replyCount: 5,
	repostCount: 17,
	likeCount: 94,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the rain came in.",
	createdAt: "2024-05-02T07:55:00.000Z",
	visibility: "public",
	replyCount: 8,
	repostCount: 23,
	likeCount: 176,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle post: still not convinced that infinite scroll beats a plain paginated feed.",
	createdAt: "2024-05-02T06:30:00.000Z",
	visibility: "circle",
	replyCount: 3,
	repostCount: 6,
	likeCount: 41,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9120, category: "Technology" },
	{ id: "t-3", label: "Morning walks", postCount: 3480 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by @kai", following: false },
	{ author: mio, reason: "Followed by @rin and 4 others", following: false },
	{ author: jun, reason: "New to your circle", following: true },
];

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
				/>
			}
			main={
				<>
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
								label="4h"
								visibility={postThree.visibility}
								avatar={<UserAvatar author={postThree.author} />}
							/>
						}
						media={
							<PostMedia
								images={[
									{
										url: "https://placehold.co/640x360/png?text=Riverside",
										alt: "A riverside path under grey morning cloud",
									},
									{
										url: "https://placehold.co/640x360/png?text=Bridge",
										alt: "A steel footbridge with rain starting to fall",
									},
								]}
							/>
						}
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
								avatar={<UserAvatar author={suggestion.author} density="compact" />}
								follow={<FollowButton following={suggestion.following} onFollowToggle={noop} />}
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
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
