import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

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
import type {
	AuthorModel,
	FeedKind,
	PostModel,
	TrendModel,
	Visibility,
} from "~/models";

const viewer: AuthorModel = {
	id: "u-viewer",
	displayName: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=1",
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
	avatarUrl: "https://i.pravatar.cc/160?img=5",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=33",
	verified: true,
};

const post1: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, one scroll position, and\nnothing that jumps when the images finish loading.",
	createdAt: "2026-08-14T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part everyone skips: the layout is easy, holding the scroll is not.",
	createdAt: "2026-08-14T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const post3: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from this morning's walk along the river.",
	createdAt: "2026-08-14T07:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle post: the reading list for this quarter is mostly compiler papers.",
	createdAt: "2026-08-14T06:30:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 24,
	likedByViewer: false,
};

/**
 * `PostCard` renders `post.body` itself and exposes slots only for the author
 * line, the actions, the quote and the media, so the per-post extras are
 * carried here rather than as children.
 */
interface TimelineEntry {
	post: PostModel;
	/** Already-formatted relative time for `PostAuthorLine`. */
	label: string;
	quoted?: PostModel;
	images?: { url: string; alt: string }[];
}

const entries: TimelineEntry[] = [
	{ post: post1, label: "2h" },
	{ post: post2, label: "3h", quoted: post1 },
	{
		post: post3,
		label: "4h",
		images: [
			{
				url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
				alt: "Mist over the river at sunrise",
			},
			{
				url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
				alt: "A footbridge seen from the far bank",
			},
		],
	},
	{ post: post4, label: "6h" },
];

const trends: TrendModel[] = [
	{
		id: "t-1",
		label: "#TypeScript",
		postCount: 18420,
		category: "Technology",
	},
	{ id: "t-2", label: "#DesignSystems", postCount: 9310, category: "Design" },
	{ id: "t-3", label: "Storybook 9", postCount: 4275, category: "Technology" },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{ author: mio, reason: "Followed by Rin Amano" },
	{ author: jun, reason: "Followed by Kai Doi" },
	{
		author: {
			id: "u-aki",
			displayName: "Aki Mori",
			handle: "aki",
			avatarUrl: "https://i.pravatar.cc/160?img=24",
		},
		reason: "Based on your recent likes",
	},
];

const noop = () => {};

function TimelineScreen() {
	const [query, setQuery] = useState("");
	const [feed, setFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [following, setFollowing] = useState<string[]>([]);

	const toggleFollow = (id: string, next: boolean) => {
		setFollowing((current) =>
			next ? [...current, id] : current.filter((entry) => entry !== id),
		);
	};

	return (
		<AppShell
			density="cozy"
			header={
				<TimelineHeader
					viewer={viewer}
					search={
						<SearchField
							value={query}
							placeholder="Search"
							onQueryChange={setQuery}
						/>
					}
					notifications={<NotificationBell unreadCount={3} />}
					onViewerPress={noop}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed={feed} onFeedChange={setFeed} />
					<PostComposer
						viewer={viewer}
						draft={draft}
						visibility={visibility}
						visibilityPicker={
							<VisibilityPicker
								visibility={visibility}
								onVisibilityChange={setVisibility}
							/>
						}
						onDraftChange={setDraft}
						onSubmitPress={() => setDraft("")}
						submitLabel="Post"
					/>
					{entries.map(({ post, label, quoted, images }) => (
						<PostCard
							key={post.id}
							post={post}
							authorLine={
								<PostAuthorLine
									author={post.author}
									label={label}
									avatar={<UserAvatar author={post.author} />}
									visibility={post.visibility}
								/>
							}
							quoted={
								quoted ? (
									<QuotedPost
										post={quoted}
										avatar={<UserAvatar author={quoted.author} density="compact" />}
									/>
								) : undefined
							}
							media={images ? <PostMedia images={images} /> : undefined}
							actions={
								<PostActionBar
									post={post}
									onReplyPress={noop}
									onRepostPress={noop}
									onLikePress={noop}
								/>
							}
						/>
					))}
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trending now"
						items={trends.map((trend, index) => (
							<TrendItem
								key={trend.id}
								trend={trend}
								rank={index + 1}
								onTrendPress={noop}
							/>
						))}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={suggestions.map(({ author, reason }) => (
							<SuggestedUserRow
								key={author.id}
								author={author}
								avatar={<UserAvatar author={author} />}
								follow={
									<FollowButton
										following={following.includes(author.id)}
										onFollowToggle={(next) => toggleFollow(author.id, next)}
									/>
								}
								reason={reason}
							/>
						))}
					/>
				</>
			}
		/>
	);
}

const meta: Meta<typeof TimelineScreen> = {
	title: "Screens/Timeline",
	component: TimelineScreen,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
