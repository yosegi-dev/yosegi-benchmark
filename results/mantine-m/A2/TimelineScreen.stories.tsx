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
	avatarUrl: "https://i.pravatar.cc/160?img=12",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=31",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=52",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new registry pipeline this morning. Component metadata now comes straight from the types, so nothing drifts out of sync any more.",
	createdAt: "2026-08-13T07:20:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part everyone underestimates. Generating the screen is easy; keeping the registry honest is the whole job.",
	createdAt: "2026-08-13T06:05:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 62,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio wall this week. Same palette, different light.",
	createdAt: "2026-08-13T04:40:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the small circle: the migration lands Thursday and I will be offline for most of it.",
	createdAt: "2026-08-12T22:15:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 3,
	likeCount: 28,
	likedByViewer: false,
};

const mioImages: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/id/1015/800/600", alt: "Studio wall in morning light" },
	{ url: "https://picsum.photos/id/1025/800/600", alt: "The same wall at dusk" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 7320, category: "Technology" },
	{ id: "t-3", label: "Typed registries", postCount: 2140 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-nao",
			displayName: "Nao Kimura",
			handle: "nao",
			avatarUrl: "https://i.pravatar.cc/160?img=24",
			verified: true,
		},
		reason: "Followed by @rin",
	},
	{
		author: {
			id: "u-emi",
			displayName: "Emi Takada",
			handle: "emi",
			avatarUrl: "https://i.pravatar.cc/160?img=9",
		},
		reason: "Followed by @kai and 3 others",
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Nishi",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/160?img=57",
		},
		reason: "New to your topics",
	},
];

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Timeline: Story = {
	args: {
		density: "cozy",
		header: (
			<TimelineHeader
				viewer={viewer}
				search={<SearchField value="" onQueryChange={noop} />}
				notifications={<NotificationBell unreadCount={5} />}
				onViewerPress={noop}
			/>
		),
		main: (
			<>
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
							label="5h"
							avatar={<UserAvatar author={mio} />}
							visibility={postMio.visibility}
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
							label="1d"
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
			</>
		),
		sidebar: (
			<>
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
			</>
		),
	},
};
