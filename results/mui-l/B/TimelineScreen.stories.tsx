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
	displayName: "Aoi Kubo",
	handle: "@aoi",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
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
	avatarUrl: "https://i.pravatar.cc/160?img=15",
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
	avatarUrl: "https://i.pravatar.cc/160?img=58",
};

const post1: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline renderer today. Scroll jank is finally gone on low-end phones.",
	createdAt: "2026-08-17T09:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the write-up I keep sending to people who ask how we measure scroll performance.",
	createdAt: "2026-08-17T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const post3: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio window this morning. The fog burned off in about ten minutes.",
	createdAt: "2026-08-17T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 184,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle only: I am moving the weekly sync to Thursday starting next week.",
	createdAt: "2026-08-17T06:30:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const post3Images: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/id/1015/800/600", alt: "Fog rolling over a river valley" },
	{ url: "https://picsum.photos/id/1016/800/600", alt: "Sunlit ridge above the fog line" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#WebPerf", postCount: 18420, category: "Technology" },
	{ id: "t-2", label: "Design Systems", postCount: 9310, category: "Design" },
	{ id: "t-3", label: "#MorningFog", postCount: 2740 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by Kai Doi", following: false },
	{ author: mio, reason: "Posts about photography", following: false },
	{ author: jun, reason: "New to your circle", following: true },
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
		density: "cozy",
		header: (
			<TimelineHeader
				viewer={viewer}
				onViewerPress={noop}
				search={<SearchField value="" onQueryChange={noop} placeholder="Search Timeline" />}
				notifications={<NotificationBell unreadCount={5} onBellPress={noop} tone="quiet" />}
			/>
		),
		main: (
			<div style={{ display: "grid", gap: 16 }}>
				<FeedTabs activeFeed="for-you" onFeedChange={noop} density="cozy" />
				<PostComposer
					viewer={viewer}
					draft=""
					visibility="public"
					onDraftChange={noop}
					onSubmitPress={noop}
					submitLabel="Post"
					visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} density="cozy" />}
				/>
				<PostCard
					post={post1}
					density="cozy"
					authorLine={
						<PostAuthorLine
							author={post1.author}
							label="2h"
							visibility={post1.visibility}
							avatar={<UserAvatar author={post1.author} />}
						/>
					}
					actions={
						<PostActionBar
							post={post1}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
							density="cozy"
						/>
					}
				/>
				<PostCard
					post={post2}
					density="cozy"
					authorLine={
						<PostAuthorLine
							author={post2.author}
							label="3h"
							visibility={post2.visibility}
							avatar={<UserAvatar author={post2.author} />}
						/>
					}
					quoted={<QuotedPost post={post1} avatar={<UserAvatar author={post1.author} density="compact" />} />}
					actions={
						<PostActionBar
							post={post2}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
							density="cozy"
						/>
					}
				/>
				<PostCard
					post={post3}
					density="cozy"
					authorLine={
						<PostAuthorLine
							author={post3.author}
							label="4h"
							visibility={post3.visibility}
							avatar={<UserAvatar author={post3.author} />}
						/>
					}
					media={<PostMedia images={post3Images} density="cozy" />}
					actions={
						<PostActionBar
							post={post3}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
							density="cozy"
						/>
					}
				/>
				<PostCard
					post={post4}
					density="cozy"
					authorLine={
						<PostAuthorLine
							author={post4.author}
							label="6h"
							visibility={post4.visibility}
							avatar={<UserAvatar author={post4.author} />}
						/>
					}
					actions={
						<PostActionBar
							post={post4}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
							density="cozy"
						/>
					}
				/>
			</div>
		),
		sidebar: (
			<div style={{ display: "grid", gap: 16 }}>
				<TrendPanel
					heading="Trending now"
					density="cozy"
					items={trends.map((trend, index) => (
						<TrendItem key={trend.id} trend={trend} rank={index + 1} onTrendPress={noop} />
					))}
				/>
				<SuggestedUserPanel
					heading="Who to follow"
					density="cozy"
					rows={suggestions.map((suggestion) => (
						<SuggestedUserRow
							key={suggestion.author.id}
							author={suggestion.author}
							reason={suggestion.reason}
							avatar={<UserAvatar author={suggestion.author} density="compact" />}
							follow={
								<FollowButton
									following={suggestion.following}
									onFollowToggle={noop}
									density="compact"
								/>
							}
						/>
					))}
				/>
			</div>
		),
	},
};
