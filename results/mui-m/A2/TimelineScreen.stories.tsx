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
import { SearchBar } from "~/components/search-bar";
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
	displayName: "Nao Kishi",
	handle: "@nao",
	avatarUrl: "https://i.pravatar.cc/128?img=15",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "@rin",
	avatarUrl: "https://i.pravatar.cc/128?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "@kai",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "@mio",
	avatarUrl: "https://i.pravatar.cc/128?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "@jun",
	avatarUrl: "https://i.pravatar.cc/128?img=68",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout today. Two columns, sticky header, and the sidebar finally stays where it should.",
	createdAt: "2026-08-13T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part nobody sees but everybody feels. Congrats on the ship.",
	createdAt: "2026-08-13T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 76,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from this morning's walk. The light was doing something strange over the river.",
	createdAt: "2026-08-13T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle post: I am rewriting my notes app for the fourth time and I regret nothing.",
	createdAt: "2026-08-13T06:30:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 8210, category: "Frontend" },
	{ id: "t-3", label: "#MorningLight", postCount: 3985 },
];

const suggested: { author: AuthorModel; reason: string; following: boolean }[] = [
	{
		author: {
			id: "u-aya",
			displayName: "Aya Morita",
			handle: "@aya",
			avatarUrl: "https://i.pravatar.cc/128?img=24",
			verified: true,
		},
		reason: "Followed by Rin Amano",
		following: false,
	},
	{
		author: {
			id: "u-taku",
			displayName: "Taku Nishi",
			handle: "@taku",
			avatarUrl: "https://i.pravatar.cc/128?img=52",
		},
		reason: "Followed by Kai Doi and 3 others",
		following: true,
	},
	{
		author: {
			id: "u-hana",
			displayName: "Hana Kubo",
			handle: "@hana",
			avatarUrl: "https://i.pravatar.cc/128?img=9",
		},
		reason: "New to Yosegi",
		following: false,
	},
];

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		header: (
			<TimelineHeader
				viewer={viewer}
				search={<SearchBar onSearch={noop} placeholder="Search Yosegi" />}
				notifications={<NotificationBell unreadCount={5} />}
				onViewerPress={noop}
			/>
		),
		main: (
			<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
							author={rin}
							label="2h"
							avatar={<UserAvatar author={rin} />}
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
							author={kai}
							label="3h"
							avatar={<UserAvatar author={kai} />}
							visibility={postKai.visibility}
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
							label="4h"
							avatar={<UserAvatar author={mio} />}
							visibility={postMio.visibility}
						/>
					}
					media={
						<PostMedia
							images={[
								{ url: "https://picsum.photos/seed/river-1/800/600", alt: "Morning fog over the river" },
								{ url: "https://picsum.photos/seed/river-2/800/600", alt: "Sunlight on the water" },
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
							author={jun}
							label="6h"
							avatar={<UserAvatar author={jun} />}
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
		),
		sidebar: (
			<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
				<TrendPanel
					heading="Trending now"
					items={trends.map((trend, index) => (
						<TrendItem key={trend.id} trend={trend} rank={index + 1} onTrendPress={noop} />
					))}
				/>
				<SuggestedUserPanel
					heading="Who to follow"
					rows={suggested.map((entry) => (
						<SuggestedUserRow
							key={entry.author.id}
							author={entry.author}
							avatar={<UserAvatar author={entry.author} density="compact" />}
							follow={<FollowButton following={entry.following} onFollowToggle={noop} />}
							reason={entry.reason}
						/>
					))}
				/>
			</div>
		),
	},
};
