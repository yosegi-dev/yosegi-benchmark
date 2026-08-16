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
	displayName: "Nao Kimura",
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
	avatarUrl: "https://i.pravatar.cc/160?img=68",
	verified: false,
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, sticky header, and every card is finally the\nsame height as its content.",
	createdAt: "2026-08-15T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part nobody sees until it lands. Congrats on the release.",
	createdAt: "2026-08-15T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the heat set in.",
	createdAt: "2026-08-15T07:05:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 23,
	likeCount: 154,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: what is the one keyboard shortcut you would not give up?",
	createdAt: "2026-08-15T06:22:00.000Z",
	visibility: "circle",
	replyCount: 19,
	repostCount: 2,
	likeCount: 33,
	likedByViewer: false,
};

const mioImages = [
	{ url: "https://picsum.photos/id/1015/800/600", alt: "A river cutting through a rocky canyon" },
	{ url: "https://picsum.photos/id/1025/800/600", alt: "A pug resting on a blanket" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "#MorningWalk", postCount: 9120, category: "Lifestyle" },
	{ id: "t-3", label: "#Storybook", postCount: 4360, category: "Technology" },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by Kai Doi", following: false },
	{ author: mio, reason: "Posts about photography", following: false },
	{ author: jun, reason: "New to your circle", following: true },
];

const noop = () => {};

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search Yosegi" />}
					notifications={<NotificationBell unreadCount={5} onBellPress={noop} tone="quiet" />}
					onViewerPress={noop}
				/>
			}
			main={
				<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
				</div>
			}
			sidebar={
				<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
