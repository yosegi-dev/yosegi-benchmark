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
	handle: "@aoi",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "@rin",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "@kai",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "@mio",
	avatarUrl: "https://i.pravatar.cc/160?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "@jun",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline renderer this morning. Scroll jank is finally gone on long threads.",
	createdAt: "2026-08-15T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we measured on the staging build. Nice work.",
	createdAt: "2026-08-15T08:40:00.000Z",
	visibility: "followers",
	replyCount: 3,
	repostCount: 9,
	likeCount: 64,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from the offsite. The light on the second morning was unreal.",
	createdAt: "2026-08-15T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 188,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the close circle: taking Friday off to finish the reading list.",
	createdAt: "2026-08-15T06:20:00.000Z",
	visibility: "circle",
	replyCount: 1,
	repostCount: 0,
	likeCount: 15,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TimelineRewrite", postCount: 18420, category: "Technology" },
	{ id: "t-2", label: "Offsite photos", postCount: 6310, category: "Photography" },
	{ id: "t-3", label: "#FridayReading", postCount: 2145 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by Kai", following: false },
	{ author: mio, reason: "Posts about photography", following: true },
	{ author: jun, reason: "New to your network", following: false },
];

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value="" placeholder="Search posts" onQueryChange={noop} />}
					notifications={<NotificationBell unreadCount={5} tone="quiet" onBellPress={noop} />}
					onViewerPress={noop}
				/>
			}
			main={
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
						media={
							<PostMedia
								images={[
									{ url: "https://picsum.photos/seed/offsite-1/800/600", alt: "Sunrise over the offsite venue" },
									{ url: "https://picsum.photos/seed/offsite-2/800/600", alt: "The team walking along the shoreline" },
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
								avatar={<UserAvatar author={suggestion.author} density="compact" />}
								reason={suggestion.reason}
								follow={<FollowButton following={suggestion.following} onFollowToggle={noop} />}
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

export const Default: StoryObj<typeof meta> = {};
