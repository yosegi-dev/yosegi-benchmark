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

function noop(): void {}

function ignore(_value: unknown): void {}

const viewer: AuthorModel = {
	id: "u-sora",
	displayName: "Sora Kimura",
	handle: "sora",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
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

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline renderer today. Scroll jank is finally gone on the low-end test devices.",
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
	body: "This matches what we measured last sprint. Virtualising the list was the single biggest win.",
	createdAt: "2026-08-15T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 62,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio build week. The wall of sticky notes is now a real roadmap.",
	createdAt: "2026-08-15T07:05:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: does anyone still rely on the legacy export endpoint? Planning to retire it.",
	createdAt: "2026-08-15T06:30:00.000Z",
	visibility: "circle",
	replyCount: 3,
	repostCount: 2,
	likeCount: 18,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/seed/studio-wall/640/480", alt: "A wall covered in sticky notes" },
	{ url: "https://picsum.photos/seed/studio-desk/640/480", alt: "A desk with two laptops and sketches" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TimelinePerf", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "Design systems", postCount: 8210, category: "Design" },
	{ id: "t-3", label: "#BuildWeek", postCount: 3120 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{
		author: {
			id: "u-aoi",
			displayName: "Aoi Nakamura",
			handle: "aoi",
			avatarUrl: "https://i.pravatar.cc/160?img=24",
			verified: true,
		},
		reason: "Followed by @rin",
		following: false,
	},
	{
		author: {
			id: "u-haru",
			displayName: "Haru Fujita",
			handle: "haru",
			avatarUrl: "https://i.pravatar.cc/160?img=54",
		},
		reason: "Followed by @kai and 3 others",
		following: false,
	},
	{
		author: {
			id: "u-nao",
			displayName: "Nao Ishikawa",
			handle: "nao",
			avatarUrl: "https://i.pravatar.cc/160?img=61",
		},
		reason: "Based on your activity",
		following: true,
	},
];

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: { layout: "fullscreen" },
	args: {
		header: (
			<TimelineHeader
				viewer={viewer}
				search={<SearchField value="" onQueryChange={ignore} />}
				notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
				onViewerPress={noop}
			/>
		),
		main: (
			<>
				<FeedTabs activeFeed="for-you" onFeedChange={ignore} />
				<PostComposer
					viewer={viewer}
					draft=""
					visibility="public"
					visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={ignore} />}
					onDraftChange={ignore}
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
					quoted={<QuotedPost post={postOne} avatar={<UserAvatar author={postOne.author} density="compact" />} />}
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
							label="5h"
							avatar={<UserAvatar author={postThree.author} />}
							visibility={postThree.visibility}
						/>
					}
					media={<PostMedia images={postThreeImages} />}
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
			</>
		),
		sidebar: (
			<>
				<TrendPanel
					heading="Trending now"
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
									avatar={<UserAvatar author={suggestion.author} density="compact" />}
									follow={<FollowButton following={suggestion.following} onFollowToggle={ignore} />}
									reason={suggestion.reason}
								/>
							))}
						</>
					}
				/>
			</>
		),
	},
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
