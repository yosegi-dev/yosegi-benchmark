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
	displayName: "Aoi Kimura",
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
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://images.example.com/avatars/jun.png",
};

// QuotedPost prints `post.createdAt` verbatim next to the handle, so the field
// holds the already-formatted relative label rather than an ISO timestamp.
const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Rewrote the export pipeline over the weekend. Cold start is down from 4.2s to 900ms, and the diff is smaller than the benchmark script.",
	createdAt: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last quarter. Most of the win is in not re-parsing the manifest on every request.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 4,
	repostCount: 11,
	likeCount: 62,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from the studio shoot this morning. Natural light only, no retouching.",
	createdAt: "38m",
	visibility: "public",
	replyCount: 9,
	repostCount: 27,
	likeCount: 184,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: does anyone still keep a paper notebook for daily planning, or has everyone moved on?",
	createdAt: "12m",
	visibility: "circle",
	replyCount: 6,
	repostCount: 2,
	likeCount: 41,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#ColdStart", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "Studio Light", postCount: 3120, category: "Photography" },
	{ id: "t-3", label: "#PaperPlanner", postCount: 870 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{
		author: {
			id: "u-hana",
			displayName: "Hana Kudo",
			handle: "hana",
			avatarUrl: "https://images.example.com/avatars/hana.png",
		},
		reason: "Followed by rin",
		following: false,
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Nakai",
			handle: "sora",
			avatarUrl: "https://images.example.com/avatars/sora.png",
			verified: true,
		},
		reason: "Followed by kai and 3 others",
		following: true,
	},
	{
		author: {
			id: "u-ken",
			displayName: "Ken Ogawa",
			handle: "ken",
			avatarUrl: "https://images.example.com/avatars/ken.png",
		},
		reason: "New to the timeline",
		following: false,
	},
];

const postImages = [
	{ url: "https://images.example.com/posts/studio-a.jpg", alt: "Studio bench under a north-facing window" },
	{ url: "https://images.example.com/posts/studio-b.jpg", alt: "Close-up of a ceramic cup on grey linen" },
];

const meta = {
	title: "Screens/A2",
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
							label={postRin.createdAt}
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
							label={postKai.createdAt}
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
							label={postMio.createdAt}
							avatar={<UserAvatar author={mio} />}
							visibility={postMio.visibility}
						/>
					}
					media={<PostMedia images={postImages} />}
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
							label={postJun.createdAt}
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
							{suggestions.map((suggestion) => (
								<SuggestedUserRow
									key={suggestion.author.id}
									author={suggestion.author}
									avatar={<UserAvatar author={suggestion.author} />}
									follow={<FollowButton following={suggestion.following} onFollowToggle={noop} />}
									reason={suggestion.reason}
								/>
							))}
						</>
					}
				/>
			</>
		),
	},
};
