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
import type { AuthorModel, FeedKind, PostModel, TrendModel, Visibility } from "~/models";

const viewer: AuthorModel = {
	id: "u-aoi",
	displayName: "Aoi Nakamura",
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
	avatarUrl: "https://i.pravatar.cc/128?img=57",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new type-driven registry today. Turns out the hardest part was never the codegen — it was agreeing on what a component actually is.",
	createdAt: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last quarter. The naming argument is the design work.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two screenshots from the studio window this morning. The light lasted about four minutes.",
	createdAt: "42m",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the circle: taking Friday off to finish the migration doc. Ping me only if the build is red.",
	createdAt: "18m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 27,
	likedByViewer: false,
};

const POSTS: PostModel[] = [postRin, postKai, postMio, postJun];

const MIO_IMAGES: { url: string; alt: string }[] = [
	{
		url: "https://picsum.photos/seed/studio-window/640/480",
		alt: "Morning light across a studio window sill",
	},
	{
		url: "https://picsum.photos/seed/studio-desk/640/480",
		alt: "A desk lit by the same low morning sun",
	},
];

const TRENDS: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18420, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9310, category: "Trending in Tech" },
	{ id: "t-3", label: "Type-safe UI", postCount: 4127 },
];

const SUGGESTIONS: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-hana",
			displayName: "Hana Kubo",
			handle: "hana",
			avatarUrl: "https://i.pravatar.cc/128?img=24",
			verified: true,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-taro",
			displayName: "Taro Nishi",
			handle: "taro",
			avatarUrl: "https://i.pravatar.cc/128?img=68",
		},
		reason: "Followed by kai and 3 others",
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Miyake",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/128?img=5",
		},
		reason: "New to your topics",
	},
];

function TimelineScreen() {
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState<string>("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [query, setQuery] = useState<string>("");
	const [posts, setPosts] = useState<PostModel[]>(POSTS);
	const [following, setFollowing] = useState<Record<string, boolean>>({});

	const toggleLike = (id: string) => {
		setPosts((current) =>
			current.map((post) =>
				post.id === id
					? {
							...post,
							likedByViewer: !post.likedByViewer,
							likeCount: post.likedByViewer ? post.likeCount - 1 : post.likeCount + 1,
						}
					: post,
			),
		);
	};

	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={
						<SearchField
							value={query}
							placeholder="Search posts"
							onQueryChange={setQuery}
						/>
					}
					notifications={<NotificationBell unreadCount={3} />}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed={activeFeed} onFeedChange={setActiveFeed} />
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
					/>
					{posts.map((post) => (
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
							media={
								post.id === postMio.id ? <PostMedia images={MIO_IMAGES} /> : null
							}
							quoted={
								post.id === postKai.id ? (
									<QuotedPost
										post={postRin}
										avatar={<UserAvatar author={postRin.author} density="compact" />}
									/>
								) : null
							}
							actions={
								<PostActionBar
									post={post}
									onReplyPress={() => undefined}
									onRepostPress={() => undefined}
									onLikePress={() => toggleLike(post.id)}
								/>
							}
						/>
					))}
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trends for you"
						items={TRENDS.map((trend, index) => (
							<TrendItem key={trend.id} trend={trend} rank={index + 1} />
						))}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={SUGGESTIONS.map((suggestion) => (
							<SuggestedUserRow
								key={suggestion.author.id}
								author={suggestion.author}
								avatar={<UserAvatar author={suggestion.author} />}
								reason={suggestion.reason}
								follow={
									<FollowButton
										following={following[suggestion.author.id] ?? false}
										density="compact"
										onFollowToggle={(next) =>
											setFollowing((current) => ({
												...current,
												[suggestion.author.id]: next,
											}))
										}
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

export const Default: StoryObj<typeof meta> = {};
