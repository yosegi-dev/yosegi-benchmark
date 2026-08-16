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
	displayName: "Aya Kurose",
	handle: "aya",
	avatarUrl: "https://i.pravatar.cc/160?img=47",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=5",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
};

const post1: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline renderer this morning. Scroll jank is finally gone on the low-end test devices.",
	createdAt: "2026-08-15T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the fix I kept putting off for a year. Worth reading the notes before you touch the scroll container.",
	createdAt: "2026-08-15T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 76,
	likedByViewer: false,
};

const post3: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from the studio session. Same lens, ten minutes apart.",
	createdAt: "2026-08-15T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 164,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the small circle: the offsite is moving to the last week of the month.",
	createdAt: "2026-08-15T06:20:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TypeScript", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 6200, category: "Design systems" },
	{ id: "t-3", label: "#nowplaying", postCount: 45100 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by kai", following: false },
	{ author: mio, reason: "Followed by rin and 3 others", following: false },
	{ author: jun, reason: "New to the timeline", following: true },
];

const header = (
	<TimelineHeader
		viewer={viewer}
		search={
			<SearchField value="" placeholder="Search" onQueryChange={noop} />
		}
		notifications={<NotificationBell unreadCount={3} tone="quiet" onBellPress={noop} />}
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
			post={post1}
			authorLine={
				<PostAuthorLine
					author={post1.author}
					label="2h"
					avatar={<UserAvatar author={post1.author} />}
					visibility={post1.visibility}
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
					avatar={<UserAvatar author={post2.author} />}
					visibility={post2.visibility}
				/>
			}
			quoted={<QuotedPost post={post1} avatar={<UserAvatar author={post1.author} />} />}
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
					avatar={<UserAvatar author={post3.author} />}
					visibility={post3.visibility}
				/>
			}
			media={
				<PostMedia
					images={[
						{
							url: "https://images.example.com/studio-a.jpg",
							alt: "A studio portrait lit from the left",
						},
						{
							url: "https://images.example.com/studio-b.jpg",
							alt: "The same setup ten minutes later, lit from above",
						},
					]}
				/>
			}
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
					avatar={<UserAvatar author={post4.author} />}
					visibility={post4.visibility}
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
					{suggestions.map((suggestion) => (
						<SuggestedUserRow
							key={suggestion.author.id}
							author={suggestion.author}
							avatar={<UserAvatar author={suggestion.author} />}
							follow={
								<FollowButton
									following={suggestion.following}
									onFollowToggle={noop}
								/>
							}
							reason={suggestion.reason}
						/>
					))}
				</>
			}
		/>
	</>
);

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		header,
		main,
		sidebar,
		density: "cozy",
	},
};
