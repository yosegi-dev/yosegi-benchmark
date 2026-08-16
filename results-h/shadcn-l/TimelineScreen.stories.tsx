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
	avatarUrl: "https://images.example.com/avatars/aoi.png",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://images.example.com/avatars/rin.png",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://images.example.com/avatars/kai.png",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://images.example.com/avatars/mio.png",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://images.example.com/avatars/jun.png",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Rewrote the layout pass this morning and the whole timeline stopped jumping while images load. Reserving the box before the fetch was the entire fix.",
	createdAt: "2024-05-06T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the one I keep sending to people who ask why their feed feels unstable.",
	createdAt: "2024-05-06T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from the same walk, six minutes apart. The light does all the work.",
	createdAt: "2024-05-06T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 184,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet week. Reading more than I am shipping, which is fine for now.",
	createdAt: "2024-05-06T06:30:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 28,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "Layout stability", postCount: 4820, category: "Technology" },
	{ id: "t-2", label: "Morning light", postCount: 2140, category: "Photography" },
	{ id: "t-3", label: "Type scales", postCount: 960, category: "Design" },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-nao",
			displayName: "Nao Kimura",
			handle: "nao",
			avatarUrl: "https://images.example.com/avatars/nao.png",
			verified: true,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-hana",
			displayName: "Hana Oda",
			handle: "hana",
			avatarUrl: "https://images.example.com/avatars/hana.png",
		},
		reason: "Followed by kai and 3 others",
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Ueda",
			handle: "sora",
			avatarUrl: "https://images.example.com/avatars/sora.png",
		},
		reason: "New to your topics",
	},
];

const meta = {
	title: "Screens/Timeline",
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
				search={<SearchField value="" placeholder="Search" onQueryChange={noop} />}
				notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
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
					submitLabel="Post"
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
					actions={
						<PostActionBar
							post={postKai}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
						/>
					}
					quoted={<QuotedPost post={postRin} avatar={<UserAvatar author={rin} />} />}
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
					actions={
						<PostActionBar
							post={postMio}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
						/>
					}
					media={
						<PostMedia
							images={[
								{
									url: "https://images.example.com/posts/mio-walk-1.jpg",
									alt: "A narrow street at sunrise, long shadows across the road",
								},
								{
									url: "https://images.example.com/posts/mio-walk-2.jpg",
									alt: "The same street six minutes later, the shadows gone",
								},
							]}
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
			</>
		),
		sidebar: (
			<>
				<TrendPanel
					heading="Trends for you"
					items={
						<>
							{trends.map((trend, index) => (
								<TrendItem key={trend.id} trend={trend} rank={index + 1} onTrendPress={noop} />
							))}
						</>
					}
				/>
				<SuggestedUserPanel
					heading="Who to follow"
					rows={
						<>
							{suggestions.map(({ author, reason }) => (
								<SuggestedUserRow
									key={author.id}
									author={author}
									avatar={<UserAvatar author={author} />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
									reason={reason}
								/>
							))}
						</>
					}
				/>
			</>
		),
	},
};
