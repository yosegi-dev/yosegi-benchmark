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
	handle: "@aoi",
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
	avatarUrl: "https://i.pravatar.cc/160?img=8",
};

const post1: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout this morning. Two columns, sticky header, and it finally feels fast on a cold load.",
	createdAt: "2026-08-15T08:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underrate: the cold load is what everyone actually measures.",
	createdAt: "2026-08-15T07:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const post3: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from the shoot in Onomichi. Late light, no edits.",
	createdAt: "2026-08-15T06:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the circle: taking next week off, back on the 24th.",
	createdAt: "2026-08-15T05:20:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const post3Images: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/seed/onomichi-1/800/600", alt: "Harbour at dusk, seen from a hillside" },
	{ url: "https://picsum.photos/seed/onomichi-2/800/600", alt: "A narrow stairway between two houses" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TimelineRedesign", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "Onomichi", postCount: 8300, category: "Travel" },
	{ id: "t-3", label: "#TypeSafeUI", postCount: 5120 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by Kai", following: false },
	{ author: mio, reason: "Followed by Rin", following: true },
	{ author: jun, reason: "New to your area", following: false },
];

// Typed as `Meta<typeof AppShell>` rather than with `satisfies`: AppShell's slots are
// required props, and the `StoryObj<typeof meta>` form would then demand `args` on a story
// that supplies the whole tree through `render`.
const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: { layout: "fullscreen" },
};

export default meta;

export const Timeline: StoryObj<typeof AppShell> = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
				/>
			}
			main={
				<>
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
						post={post1}
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
							/>
						}
					/>
					<PostCard
						post={post2}
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
							/>
						}
					/>
					<PostCard
						post={post3}
						authorLine={
							<PostAuthorLine
								author={post3.author}
								label="4h"
								visibility={post3.visibility}
								avatar={<UserAvatar author={post3.author} />}
							/>
						}
						media={<PostMedia images={post3Images} />}
						actions={
							<PostActionBar
								post={post3}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={post4}
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
							/>
						}
					/>
				</>
			}
			sidebar={
				<>
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
								avatar={<UserAvatar author={suggestion.author} density="compact" />}
								follow={<FollowButton following={suggestion.following} onFollowToggle={noop} />}
							/>
						))}
					/>
				</>
			}
		/>
	),
};
