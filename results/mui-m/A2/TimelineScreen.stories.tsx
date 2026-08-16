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
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, one sticky header, and nothing to scroll twice.",
	createdAt: "2026-08-17T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part everyone underestimates. Layout is the easy half.",
	createdAt: "2026-08-17T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the workshop this morning.",
	createdAt: "2026-08-17T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle only: the migration is done and nothing broke. Telling the rest of you tomorrow.",
	createdAt: "2026-08-17T06:30:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 3,
	likeCount: 28,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9120, category: "Software" },
	{ id: "t-3", label: "#MorningBuild", postCount: 3450 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-aoi",
			displayName: "Aoi Nakata",
			handle: "@aoi",
			avatarUrl: "https://i.pravatar.cc/160?img=5",
			verified: true,
		},
		reason: "Followed by Rin Amano",
	},
	{
		author: {
			id: "u-hana",
			displayName: "Hana Ono",
			handle: "@hana",
			avatarUrl: "https://i.pravatar.cc/160?img=24",
		},
		reason: "Followed by Kai Doi and 3 others",
	},
	{
		author: {
			id: "u-taku",
			displayName: "Taku Mori",
			handle: "@taku",
			avatarUrl: "https://i.pravatar.cc/160?img=51",
		},
		reason: "New here",
	},
];

const noop = () => {};

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value="" placeholder="Search Yosegi" onQueryChange={noop} />}
					notifications={<NotificationBell unreadCount={7} onBellPress={noop} />}
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
						post={postRin}
						authorLine={
							<PostAuthorLine
								author={postRin.author}
								label="2h"
								avatar={<UserAvatar author={postRin.author} />}
								visibility={postRin.visibility}
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
								author={postKai.author}
								label="3h"
								avatar={<UserAvatar author={postKai.author} />}
								visibility={postKai.visibility}
							/>
						}
						quoted={
							<QuotedPost post={postRin} avatar={<UserAvatar author={postRin.author} density="compact" />} />
						}
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
								author={postMio.author}
								label="4h"
								avatar={<UserAvatar author={postMio.author} />}
								visibility={postMio.visibility}
							/>
						}
						media={
							<PostMedia
								images={[
									{ url: "https://picsum.photos/id/1060/800/600", alt: "Workbench covered in offcuts" },
									{ url: "https://picsum.photos/id/1074/800/600", alt: "Finished panel drying by a window" },
								]}
							/>
						}
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
								author={postJun.author}
								label="6h"
								avatar={<UserAvatar author={postJun.author} />}
								visibility={postJun.visibility}
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
								follow={<FollowButton following={false} onFollowToggle={noop} density="compact" />}
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
