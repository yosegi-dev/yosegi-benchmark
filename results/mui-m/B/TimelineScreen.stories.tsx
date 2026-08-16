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
	id: "u-nao",
	displayName: "Nao Kubo",
	handle: "@nao",
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
	avatarUrl: "https://i.pravatar.cc/160?img=8",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Spent the morning rewriting the layout pass. Half the code disappeared and the page got faster.",
	createdAt: "2026-08-13T07:40:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last quarter — the fastest change is usually the one that removes a step.",
	createdAt: "2026-08-13T06:55:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 11,
	likeCount: 63,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio window this week. Same corner, completely different light.",
	createdAt: "2026-08-13T05:20:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 19,
	likeCount: 142,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: how do you keep a reading list from turning into a graveyard?",
	createdAt: "2026-08-13T04:05:00.000Z",
	visibility: "circle",
	replyCount: 9,
	repostCount: 2,
	likeCount: 27,
	likedByViewer: false,
};

const mioImages: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/seed/studio-morning/800/600", alt: "Studio window in flat morning light" },
	{ url: "https://picsum.photos/seed/studio-evening/800/600", alt: "The same window at sunset" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#LayoutPass", postCount: 4820, category: "Technology" },
	{ id: "t-2", label: "Design Systems", postCount: 2310, category: "Design" },
	{ id: "t-3", label: "#StudioLight", postCount: 1290, category: "Photography" },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-aoi",
			displayName: "Aoi Nakata",
			handle: "@aoi",
			avatarUrl: "https://i.pravatar.cc/160?img=24",
			verified: true,
		},
		reason: "Followed by Rin",
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Hayashi",
			handle: "@sora",
			avatarUrl: "https://i.pravatar.cc/160?img=52",
		},
		reason: "Posts about design systems",
	},
	{
		author: {
			id: "u-riku",
			displayName: "Riku Mori",
			handle: "@riku",
			avatarUrl: "https://i.pravatar.cc/160?img=60",
		},
		reason: "New to your timeline",
	},
];

const noop = () => {};

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search Yosegi" />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
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
						visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
					/>
					<PostCard
						post={postRin}
						authorLine={
							<PostAuthorLine
								author={rin}
								label="2h"
								visibility={postRin.visibility}
								avatar={<UserAvatar author={rin} />}
							/>
						}
						actions={
							<PostActionBar
								post={postRin}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postKai}
						authorLine={
							<PostAuthorLine
								author={kai}
								label="3h"
								visibility={postKai.visibility}
								avatar={<UserAvatar author={kai} />}
							/>
						}
						quoted={<QuotedPost post={postRin} avatar={<UserAvatar author={rin} density="compact" />} />}
						actions={
							<PostActionBar
								post={postKai}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postMio}
						authorLine={
							<PostAuthorLine
								author={mio}
								label="5h"
								visibility={postMio.visibility}
								avatar={<UserAvatar author={mio} />}
							/>
						}
						media={<PostMedia images={mioImages} />}
						actions={
							<PostActionBar
								post={postMio}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postJun}
						authorLine={
							<PostAuthorLine
								author={jun}
								label="6h"
								visibility={postJun.visibility}
								avatar={<UserAvatar author={jun} />}
							/>
						}
						actions={
							<PostActionBar
								post={postJun}
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
								avatar={<UserAvatar author={suggestion.author} />}
								follow={<FollowButton following={false} onFollowToggle={noop} />}
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

export const Timeline: Story = {};
