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
	displayName: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
	verified: false,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=1",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=2",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=3",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=4",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Rebuilt the whole timeline on the new design tokens tonight. Every spacing value now comes from one place, and the diff was mostly deletions.",
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
	body: "This is the part nobody writes down: the refactor that ships is the one that removes code.",
	createdAt: "2024-05-06T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from this morning's walk along the river. The light lasted about four minutes.",
	createdAt: "2024-05-06T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 148,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: how do you decide when a prototype is done enough to show?",
	createdAt: "2024-05-06T07:20:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignTokens", postCount: 4820, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 2140, category: "Frontend" },
	{ id: "t-3", label: "#MorningLight", postCount: 970, category: "Photography" },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-aoi",
			displayName: "Aoi Nakamura",
			handle: "aoi",
			avatarUrl: "https://i.pravatar.cc/160?img=5",
			verified: true,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Hayashi",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/160?img=6",
		},
		reason: "Followed by kai and 3 others",
	},
	{
		author: {
			id: "u-yuki",
			displayName: "Yuki Mori",
			handle: "yuki",
			avatarUrl: "https://i.pravatar.cc/160?img=7",
		},
		reason: "New to your topics",
	},
];

const mioImages = [
	{
		url: "https://images.example.com/river-01.jpg",
		alt: "Sunrise over a river, seen from the east bank",
	},
	{
		url: "https://images.example.com/river-02.jpg",
		alt: "A footbridge in the same light, half in shadow",
	},
];

const header = (
	<TimelineHeader
		viewer={viewer}
		search={
			<SearchField
				value=""
				placeholder="Search posts and people"
				onQueryChange={noop}
			/>
		}
		notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
		onViewerPress={noop}
	/>
);

const main = (
	<>
		<FeedTabs activeFeed="for-you" onFeedChange={noop} />

		<PostComposer
			viewer={viewer}
			draft=""
			visibility="public"
			visibilityPicker={
				<VisibilityPicker visibility="public" onVisibilityChange={noop} />
			}
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
			quoted={
				<QuotedPost post={postRin} avatar={<UserAvatar author={rin} />} />
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
					author={mio}
					label="4h"
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
					label="5h"
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
);

const sidebar = (
	<>
		<TrendPanel
			heading="Trends for you"
			items={
				<>
					{trends.map((trend, index) => (
						<TrendItem
							key={trend.id}
							trend={trend}
							rank={index + 1}
							onTrendPress={noop}
						/>
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
);

const meta: Meta = {
	title: "Screens/TimelineScreen",
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<AppShell header={header} main={main} sidebar={sidebar} density="cozy" />
	),
};
