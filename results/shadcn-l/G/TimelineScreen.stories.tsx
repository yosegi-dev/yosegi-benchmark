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

// Structural mirrors of the host's AuthorModel / PostModel / TrendModel. The registry
// reports the shapes but the models are not exported through a component specifier, so
// the fixtures are typed locally rather than left to inference, which would widen
// `visibility` to `string`.
type Visibility = "circle" | "public" | "followers" | "unlisted";

type Author = {
	id: string;
	displayName: string;
	handle: string;
	avatarUrl: string;
	verified?: boolean;
};

type Post = {
	id: string;
	author: Author;
	body: string;
	createdAt: string;
	visibility: Visibility;
	replyCount: number;
	repostCount: number;
	likeCount: number;
	likedByViewer: boolean;
};

type Trend = {
	id: string;
	label: string;
	postCount: number;
	category?: string;
};

const viewer: Author = {
	id: "u-viewer",
	displayName: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
};

const rin: Author = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
	verified: true,
};

const kai: Author = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
};

const mio: Author = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=45",
	verified: true,
};

const jun: Author = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=8",
};

const postOne: Post = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, one scroll position, and nothing jumps when an image finishes loading.",
	createdAt: "2026-08-17T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: Post = {
	id: "p-2",
	author: kai,
	body: "This is the part everyone skips: the layout has to hold still while the data arrives.",
	createdAt: "2026-08-17T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
};

const postThree: Post = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk, before the light went flat.",
	createdAt: "2026-08-17T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 186,
	likedByViewer: false,
};

const postFour: Post = {
	id: "p-4",
	author: jun,
	body: "Small circle question: how do you decide when a draft is done rather than merely finished?",
	createdAt: "2026-08-17T07:10:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 3,
	likeCount: 41,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{
		url: "https://images.example.com/walk-riverbank.jpg",
		alt: "A footpath along a riverbank in early morning light",
	},
	{
		url: "https://images.example.com/walk-bridge.jpg",
		alt: "A steel bridge seen from below, framed against a pale sky",
	},
];

const trends: Trend[] = [
	{ id: "t-1", label: "#designsystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9120, category: "Technology" },
	{ id: "t-3", label: "#morningwalk", postCount: 3410 },
];

const suggestions: { author: Author; reason: string }[] = [
	{ author: mio, reason: "Followed by rin" },
	{ author: jun, reason: "Followed by kai and 3 others" },
	{ author: kai, reason: "New to your circle" },
];

const noop = () => {};

const meta: Meta = {
	title: "Screens/TimelineScreen",
	parameters: {
		layout: "fullscreen",
		viewport: { defaultViewport: "desktop" },
	},
};

export default meta;

export const Default: StoryObj = {
	render: () => (
		<AppShell
			density="cozy"
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
					<FeedTabs activeFeed="for-you" onFeedChange={noop} density="cozy" />

					<PostComposer
						viewer={viewer}
						draft=""
						onDraftChange={noop}
						onSubmitPress={noop}
						visibility="public"
						submitLabel="Post"
						visibilityPicker={
							<VisibilityPicker visibility="public" onVisibilityChange={noop} density="cozy" />
						}
					/>

					<PostCard
						post={postOne}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={postOne.author}
								label="2h"
								visibility={postOne.visibility}
								avatar={<UserAvatar author={postOne.author} density="cozy" />}
							/>
						}
						actions={
							<PostActionBar
								post={postOne}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>

					<PostCard
						post={postTwo}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={postTwo.author}
								label="1h"
								visibility={postTwo.visibility}
								avatar={<UserAvatar author={postTwo.author} density="cozy" />}
							/>
						}
						quoted={
							<QuotedPost
								post={postOne}
								avatar={<UserAvatar author={postOne.author} density="compact" />}
							/>
						}
						actions={
							<PostActionBar
								post={postTwo}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>

					<PostCard
						post={postThree}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={postThree.author}
								label="45m"
								visibility={postThree.visibility}
								avatar={<UserAvatar author={postThree.author} density="cozy" />}
							/>
						}
						media={<PostMedia images={postThreeImages} density="cozy" />}
						actions={
							<PostActionBar
								post={postThree}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>

					<PostCard
						post={postFour}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={postFour.author}
								label="12m"
								visibility={postFour.visibility}
								avatar={<UserAvatar author={postFour.author} density="cozy" />}
							/>
						}
						actions={
							<PostActionBar
								post={postFour}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trends for you"
						density="cozy"
						items={
							<>
								{trends.map((trend, index) => (
									<TrendItem key={trend.id} rank={index + 1} trend={trend} onTrendPress={noop} />
								))}
							</>
						}
					/>

					<SuggestedUserPanel
						heading="Who to follow"
						density="cozy"
						rows={
							<>
								{suggestions.map((suggestion) => (
									<SuggestedUserRow
										key={suggestion.author.id}
										author={suggestion.author}
										reason={suggestion.reason}
										avatar={<UserAvatar author={suggestion.author} density="compact" />}
										follow={<FollowButton following={false} onFollowToggle={noop} density="compact" />}
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
