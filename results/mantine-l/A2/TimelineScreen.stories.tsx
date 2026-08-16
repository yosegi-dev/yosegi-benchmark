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
	displayName: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/150?img=15",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/150?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/150?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=68",
};

const post1: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline renderer today. Scroll jank is finally gone on long threads.",
	createdAt: "2026-08-17T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we measured on our side. Virtualising the list was the single biggest win.",
	createdAt: "2026-08-17T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const post3: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio window this morning. The light lasted about ten minutes.",
	createdAt: "2026-08-17T07:05:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the close friends list: the reading group moves to Thursdays from next week.",
	createdAt: "2026-08-17T06:20:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const postMedia: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/id/1015/800/600", alt: "Morning light across the studio desk" },
	{ url: "https://picsum.photos/id/1025/800/600", alt: "The same window an hour later" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TimelinePerf", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Studio light", postCount: 6220, category: "Photography" },
	{ id: "t-3", label: "Reading group", postCount: 940 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{ author: mio, reason: "Followed by @rin" },
	{ author: jun, reason: "Followed by @kai" },
	{
		author: {
			id: "u-aya",
			displayName: "Aya Mori",
			handle: "aya",
			avatarUrl: "https://i.pravatar.cc/150?img=24",
			verified: true,
		},
		reason: "New to Yosegi",
	},
];

const meta: Meta = {
	title: "Screens/TimelineScreen",
	parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value="" onQueryChange={noop} />}
					notifications={<NotificationBell unreadCount={3} />}
				/>
			}
			main={
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
								label="5h"
								avatar={<UserAvatar author={post3.author} />}
								visibility={post3.visibility}
							/>
						}
						media={<PostMedia images={postMedia} />}
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
			}
			sidebar={
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
	),
};
