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
	displayName: "Nao Kuroda",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/128?img=15",
	verified: true,
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=32",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=45",
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=8",
};

const post1 = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. The whole thing is one component tree now, and it finally reads the way it looks.",
	createdAt: "2026-08-17T08:10:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p-2",
	author: kai,
	body: "This is the part nobody talks about: the tree is the design. Congrats Rin.",
	createdAt: "2026-08-17T07:40:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 62,
	likedByViewer: false,
};

const post3 = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the office. The light was doing something unusual.",
	createdAt: "2026-08-17T06:55:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const post4 = {
	id: "p-4",
	author: jun,
	body: "Small circle post: I am rewriting my notes app for the fourth time and I regret nothing.",
	createdAt: "2026-08-17T05:20:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 1,
	likeCount: 23,
	likedByViewer: false,
};

const post3Images = [
	{
		url: "https://picsum.photos/id/1015/640/480",
		alt: "A river running through a canyon at sunrise",
	},
	{
		url: "https://picsum.photos/id/1016/640/480",
		alt: "Low mist over a ridge of pine trees",
	},
];

const trends = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9120, category: "Trending" },
	{ id: "t-3", label: "#TypeScript", postCount: 42300, category: "Technology" },
];

const suggestions = [
	{ author: rin, reason: "Followed by kai" },
	{ author: mio, reason: "Followed by rin" },
	{ author: jun, reason: "New to your area" },
];

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} tone="quiet" />}
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
						submitLabel="Post"
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
						quoted={
							<QuotedPost
								post={post1}
								avatar={<UserAvatar author={post1.author} density="compact" />}
							/>
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
								{suggestions.map((suggestion) => (
									<SuggestedUserRow
										key={suggestion.author.id}
										author={suggestion.author}
										reason={suggestion.reason}
										avatar={<UserAvatar author={suggestion.author} density="compact" />}
										follow={<FollowButton following={false} onFollowToggle={noop} />}
									/>
								))}
							</>
						}
					/>
				</>
			}
		/>
	);
}

const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
	render: () => <TimelineScreen />,
};
