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
	displayName: "Aoi Kimura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=15",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=68",
};

const post1: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new registry today. Turns out most of the work was deciding what not to expose.",
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
	body: "This matches what we saw last quarter. The hard part is never the code.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
};

const post3: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio rebuild. Natural light finally reaches the back wall.",
	createdAt: "45m",
	visibility: "public",
	replyCount: 8,
	repostCount: 21,
	likeCount: 140,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet week. Reading more, posting less.",
	createdAt: "20m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 5,
	likeCount: 33,
	likedByViewer: false,
};

const post3Images = [
	{ url: "https://placehold.co/600x600/e2e8f0/1a202c?text=Studio+1", alt: "Studio, wide view" },
	{ url: "https://placehold.co/600x600/cbd5e0/1a202c?text=Studio+2", alt: "Studio, back wall" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9120, category: "Frontend" },
	{ id: "t-3", label: "#TypeScript", postCount: 42300 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{
		author: {
			id: "u-nao",
			displayName: "Nao Fujita",
			handle: "nao",
			avatarUrl: "https://i.pravatar.cc/128?img=5",
			verified: true,
		},
		reason: "Followed by rin",
		following: false,
	},
	{
		author: {
			id: "u-hina",
			displayName: "Hina Mori",
			handle: "hina",
			avatarUrl: "https://i.pravatar.cc/128?img=24",
		},
		reason: "Followed by kai and 3 others",
		following: false,
	},
	{
		author: {
			id: "u-taro",
			displayName: "Taro Nishi",
			handle: "taro",
			avatarUrl: "https://i.pravatar.cc/128?img=52",
		},
		reason: "New to your topics",
		following: true,
	},
];

function postCard(post: PostModel, extras?: { media?: boolean; quoted?: PostModel }) {
	return (
		<PostCard
			post={post}
			authorLine={
				<PostAuthorLine
					author={post.author}
					label={post.createdAt}
					visibility={post.visibility}
					avatar={<UserAvatar author={post.author} />}
				/>
			}
			media={extras?.media ? <PostMedia images={post3Images} /> : undefined}
			quoted={
				extras?.quoted ? (
					<QuotedPost
						post={extras.quoted}
						avatar={<UserAvatar author={extras.quoted.author} density="compact" />}
					/>
				) : undefined
			}
			actions={
				<PostActionBar
					post={post}
					onReplyPress={noop}
					onRepostPress={noop}
					onLikePress={noop}
				/>
			}
		/>
	);
}

function TimelineScreen() {
	return (
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
					{postCard(post1)}
					{postCard(post2, { quoted: post1 })}
					{postCard(post3, { media: true })}
					{postCard(post4)}
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
										rank={index + 1}
										trend={trend}
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
										avatar={<UserAvatar author={suggestion.author} />}
										follow={
											<FollowButton
												following={suggestion.following}
												onFollowToggle={noop}
											/>
										}
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
