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
	avatarUrl: "https://i.pravatar.cc/128?img=15",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=1",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=2",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=3",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=4",
};

const post1: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout today. Two columns, sticky header, and a composer that finally feels quick.",
	createdAt: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underestimate — the sticky header is what makes the whole thing feel fast.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const post3: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the studio opened.",
	createdAt: "45m",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: what do you actually keep in your read-later list for more than a week?",
	createdAt: "20m",
	visibility: "circle",
	replyCount: 21,
	repostCount: 2,
	likeCount: 44,
	likedByViewer: false,
};

const post3Images: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/seed/timeline-a/800/800", alt: "Empty street at sunrise" },
	{ url: "https://picsum.photos/seed/timeline-b/800/800", alt: "Coffee cup on a studio desk" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9120, category: "Frontend" },
	{ id: "t-3", label: "#MorningWalk", postCount: 3260 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by kai", following: false },
	{ author: mio, reason: "Followed by rin and 3 others", following: false },
	{ author: jun, reason: "New to your circle", following: true },
];

const noop = () => {};

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value="" onQueryChange={noop} />}
					notifications={<NotificationBell unreadCount={5} tone="reply" onBellPress={noop} />}
					onViewerPress={noop}
				/>
			}
			main={
				<div style={{ display: "grid", gap: "1rem" }}>
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
					/>
					<PostCard
						post={post1}
						authorLine={
							<PostAuthorLine
								author={post1.author}
								label={post1.createdAt}
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
								label={post2.createdAt}
								avatar={<UserAvatar author={post2.author} />}
								visibility={post2.visibility}
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
								label={post3.createdAt}
								avatar={<UserAvatar author={post3.author} />}
								visibility={post3.visibility}
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
								label={post4.createdAt}
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
				</div>
			}
			sidebar={
				<div>
					<TrendPanel
						heading="Trends for you"
						items={trends.map((trend, index) => (
							<TrendItem key={trend.id} trend={trend} rank={index + 1} onTrendPress={noop} />
						))}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={suggestions.map((suggestion) => (
							<SuggestedUserRow
								key={suggestion.author.id}
								author={suggestion.author}
								avatar={<UserAvatar author={suggestion.author} />}
								reason={suggestion.reason}
								follow={<FollowButton following={suggestion.following} onFollowToggle={noop} />}
							/>
						))}
					/>
				</div>
			}
		/>
	);
}

const meta = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
