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

const noop = () => {};

const viewer = {
	id: "u-viewer",
	displayName: "Nao Kimura",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/128?img=15",
	verified: true,
} as const;

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=1",
	verified: true,
} as const;

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
} as const;

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=5",
} as const;

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=33",
} as const;

const post1 = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, no surprises, and it finally feels fast on a cold load.",
	createdAt: "2026-08-14T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
} as const;

const post2 = {
	id: "p-2",
	author: kai,
	body: "This matches what we measured last week. Cold load was the whole problem.",
	createdAt: "2026-08-14T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
} as const;

const post3 = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the office. The light lasted about ten minutes.",
	createdAt: "2026-08-14T07:05:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 164,
	likedByViewer: false,
} as const;

const post4 = {
	id: "p-4",
	author: jun,
	body: "Small circle question: what do you actually keep in your read-later list for more than a week?",
	createdAt: "2026-08-14T06:20:00.000Z",
	visibility: "circle",
	replyCount: 18,
	repostCount: 2,
	likeCount: 41,
	likedByViewer: false,
} as const;

const post3Images = [
	{
		url: "https://picsum.photos/id/1015/800/600",
		alt: "A river running between two rock faces at sunrise",
	},
	{
		url: "https://picsum.photos/id/1025/800/600",
		alt: "A dog resting on a wooden floor in morning light",
	},
];

const trends = [
	{ id: "t-1", label: "#TimelineRewrite", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "Cold start", postCount: 8300, category: "Trending in Japan" },
	{ id: "t-3", label: "#MorningWalk", postCount: 5120, category: "Lifestyle" },
];

const suggestions = [
	{ author: rin, reason: "Followed by kai", following: false },
	{ author: mio, reason: "Followed by rin and 3 others", following: true },
	{ author: jun, reason: "Based on accounts you follow", following: false },
];

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
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed="for-you" onFeedChange={noop} />
					<PostComposer
						draft=""
						onDraftChange={noop}
						onSubmitPress={noop}
						viewer={viewer}
						visibility="public"
						visibilityPicker={
							<VisibilityPicker visibility="public" onVisibilityChange={noop} />
						}
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
						quoted={
							<QuotedPost post={post1} avatar={<UserAvatar author={post1.author} />} />
						}
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
								label="5h"
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
						heading="Trends for you"
						items={trends.map((trend, index) => (
							<TrendItem
								key={trend.id}
								rank={index + 1}
								trend={trend}
								onTrendPress={noop}
							/>
						))}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={suggestions.map((suggestion) => (
							<SuggestedUserRow
								key={suggestion.author.id}
								author={suggestion.author}
								reason={suggestion.reason}
								avatar={<UserAvatar author={suggestion.author} />}
								follow={
									<FollowButton
										following={suggestion.following}
										onFollowToggle={noop}
									/>
								}
							/>
						))}
					/>
				</>
			}
		/>
	),
};
