import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { ReactNode } from "react";

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
import type { AuthorModel, FeedKind, PostModel, TrendModel, Visibility } from "~/models";

const viewer: AuthorModel = {
	id: "u-viewer",
	displayName: "Nao Kishi",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/150?img=8",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/150?img=1",
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
	avatarUrl: "https://i.pravatar.cc/150?img=5",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=15",
};

// Post #1 is also the post quoted by post #2, so it is declared on its own.
const post1: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline renderer today. Scroll jank is finally gone on long threads.",
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
	body: "This is the fix I have been waiting on all quarter. Great work.",
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
	body: "Two shots from this morning's walk along the canal.",
	createdAt: "43m",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Reminder to the circle: the reading group moves to Thursday this week.",
	createdAt: "18m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 17,
	likedByViewer: false,
};

const post3Images: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/seed/canal-a/640/480", alt: "Morning light on the canal" },
	{ url: "https://picsum.photos/seed/canal-b/640/480", alt: "A bridge over the canal" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TimelineRewrite", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "Canal Festival", postCount: 8320, category: "Local" },
	{ id: "t-3", label: "#TypeSafeUI", postCount: 2140 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-aoi",
			displayName: "Aoi Mori",
			handle: "aoi",
			avatarUrl: "https://i.pravatar.cc/150?img=21",
			verified: true,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Hino",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/150?img=33",
		},
		reason: "Followed by kai and 3 others",
	},
	{
		author: {
			id: "u-yuki",
			displayName: "Yuki Nakano",
			handle: "yuki",
			avatarUrl: "https://i.pravatar.cc/150?img=47",
		},
		reason: "New to your topics",
	},
];

const noop = () => {};

function TimelineScreen() {
	const [feed, setFeed] = useState<FeedKind>("for-you");
	const [query, setQuery] = useState("");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [following, setFollowing] = useState<Record<string, boolean>>({});

	// PostCard renders the post body itself from `post.body`, so PostBody is not
	// passed in as a slot; only the author line, media, quote and actions are.
	const renderPost = (post: PostModel, extras: { media?: ReactNode; quoted?: ReactNode }) => (
		<PostCard
			key={post.id}
			post={post}
			authorLine={
				<PostAuthorLine
					author={post.author}
					label={post.createdAt}
					avatar={<UserAvatar author={post.author} />}
					visibility={post.visibility}
				/>
			}
			media={extras.media}
			quoted={extras.quoted}
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

	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value={query} placeholder="Search posts" onQueryChange={setQuery} />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
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
						onSubmitPress={noop}
					/>
					{renderPost(post1, {})}
					{renderPost(post2, {
						quoted: <QuotedPost post={post1} avatar={<UserAvatar author={post1.author} density="compact" />} />,
					})}
					{renderPost(post3, { media: <PostMedia images={post3Images} /> })}
					{renderPost(post4, {})}
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trends for you"
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
								avatar={<UserAvatar author={author} density="compact" />}
								reason={reason}
								follow={
									<FollowButton
										following={following[author.id] ?? false}
										onFollowToggle={(next) =>
											setFollowing((current) => ({ ...current, [author.id]: next }))
										}
										density="compact"
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

const meta: Meta<typeof TimelineScreen> = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
