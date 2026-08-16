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
	displayName: "Nao Kubo",
	handle: "nao",
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
	body: "Shipped the new composer today. It turns out the hardest part was never the editor — it was deciding what the default audience should be.",
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
	body: "This matches what we saw in the audit. Defaults carry more weight than any settings screen.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 62,
	likedByViewer: false,
};

const post3: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio window this morning. The light only does this for about ten minutes.",
	createdAt: "45m",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 148,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle post: I am rewriting the onboarding copy for the third time and I think it is finally honest.",
	createdAt: "20m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 5320, category: "Frontend" },
	{ id: "t-3", label: "#TypeScript", postCount: 28900 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{
		author: {
			id: "u-aya",
			displayName: "Aya Nishikawa",
			handle: "aya",
			avatarUrl: "https://i.pravatar.cc/128?img=5",
			verified: true,
		},
		reason: "Followed by rin",
		following: false,
	},
	{
		author: {
			id: "u-ken",
			displayName: "Ken Tanabe",
			handle: "ken",
			avatarUrl: "https://i.pravatar.cc/128?img=6",
		},
		reason: "Followed by kai and 3 others",
		following: false,
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Hayashi",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/128?img=7",
		},
		reason: "Based on your recent likes",
		following: true,
	},
];

const post3Images = [
	{ url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800", alt: "Morning light across the studio floor" },
	{ url: "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=800", alt: "A window with the blinds half drawn" },
];

const noop = () => {};

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={5} onBellPress={noop} tone="quiet" />}
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
								label={post1.createdAt}
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
								label={post2.createdAt}
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
								label={post3.createdAt}
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
								label={post4.createdAt}
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
	);
}

const meta = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
