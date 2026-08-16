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
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://cdn.example.com/avatars/aoi.png",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://cdn.example.com/avatars/rin.png",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://cdn.example.com/avatars/kai.png",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://cdn.example.com/avatars/mio.png",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://cdn.example.com/avatars/jun.png",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new layout engine this morning. Two years of guessing replaced by one measurement.",
	createdAt: "2024-05-14T08:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw internally. The measurement is the whole story.",
	createdAt: "2024-05-14T09:02:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Walked the long way to the studio and the harbour was doing this.",
	createdAt: "2024-05-14T09:25:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: how do you all keep notes between reviews?",
	createdAt: "2024-05-14T09:48:00.000Z",
	visibility: "circle",
	replyCount: 3,
	repostCount: 1,
	likeCount: 27,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{
		id: "t-1",
		label: "#LayoutEngine",
		postCount: 18400,
		category: "Technology",
	},
	{ id: "t-2", label: "Harbour Festival", postCount: 9120, category: "Events" },
	{ id: "t-3", label: "#DesignSystems", postCount: 4380 },
];

const suggested: AuthorModel[] = [
	{
		id: "u-nao",
		displayName: "Nao Kubo",
		handle: "nao",
		avatarUrl: "https://cdn.example.com/avatars/nao.png",
		verified: true,
	},
	{
		id: "u-sora",
		displayName: "Sora Hayashi",
		handle: "sora",
		avatarUrl: "https://cdn.example.com/avatars/sora.png",
	},
	{
		id: "u-ren",
		displayName: "Ren Fujita",
		handle: "ren",
		avatarUrl: "https://cdn.example.com/avatars/ren.png",
	},
];

const suggestionReasons: string[] = [
	"Followed by rin",
	"Followed by kai and 3 others",
	"New to your timeline",
];

const header = (
	<TimelineHeader
		viewer={viewer}
		search={
			<SearchField
				value=""
				placeholder="Search Yosegi"
				onQueryChange={() => {}}
			/>
		}
		notifications={<NotificationBell unreadCount={5} tone="quiet" />}
		onViewerPress={() => {}}
	/>
);

const main = (
	<>
		<FeedTabs activeFeed="for-you" onFeedChange={() => {}} />
		<PostComposer
			viewer={viewer}
			draft=""
			visibility="public"
			visibilityPicker={
				<VisibilityPicker visibility="public" onVisibilityChange={() => {}} />
			}
			onDraftChange={() => {}}
			onSubmitPress={() => {}}
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
					onReplyPress={() => {}}
					onRepostPress={() => {}}
					onLikePress={() => {}}
				/>
			}
		/>
		<PostCard
			post={postKai}
			authorLine={
				<PostAuthorLine
					author={kai}
					label="1h"
					avatar={<UserAvatar author={kai} />}
					visibility={postKai.visibility}
				/>
			}
			actions={
				<PostActionBar
					post={postKai}
					onReplyPress={() => {}}
					onRepostPress={() => {}}
					onLikePress={() => {}}
				/>
			}
			quoted={<QuotedPost post={postRin} avatar={<UserAvatar author={rin} />} />}
		/>
		<PostCard
			post={postMio}
			authorLine={
				<PostAuthorLine
					author={mio}
					label="45m"
					avatar={<UserAvatar author={mio} />}
					visibility={postMio.visibility}
				/>
			}
			actions={
				<PostActionBar
					post={postMio}
					onReplyPress={() => {}}
					onRepostPress={() => {}}
					onLikePress={() => {}}
				/>
			}
			media={
				<PostMedia
					images={[
						{
							url: "https://cdn.example.com/media/harbour-morning.jpg",
							alt: "Fishing boats moored along a harbour wall at sunrise",
						},
						{
							url: "https://cdn.example.com/media/harbour-crane.jpg",
							alt: "A loading crane silhouetted against a pale orange sky",
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
					label="20m"
					avatar={<UserAvatar author={jun} />}
					visibility={postJun.visibility}
				/>
			}
			actions={
				<PostActionBar
					post={postJun}
					onReplyPress={() => {}}
					onRepostPress={() => {}}
					onLikePress={() => {}}
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
							onTrendPress={() => {}}
						/>
					))}
				</>
			}
		/>
		<SuggestedUserPanel
			heading="Who to follow"
			rows={
				<>
					{suggested.map((author, index) => (
						<SuggestedUserRow
							key={author.id}
							author={author}
							avatar={<UserAvatar author={author} />}
							follow={
								<FollowButton following={false} onFollowToggle={() => {}} />
							}
							reason={suggestionReasons[index]}
						/>
					))}
				</>
			}
		/>
	</>
);

const meta = {
	title: "Screens/Timeline",
	component: AppShell,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Timeline: Story = {
	args: {
		header,
		main,
		sidebar,
		density: "cozy",
	},
};
