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

// Controls the Story wired to inert handlers, and which this page has no state for yet.
const noop = () => {};

const viewer: AuthorModel = {
	id: "u-aoi",
	displayName: "Aoi Mori",
	handle: "aoi",
	avatarUrl: "https://placehold.co/96x96/png?text=A",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://placehold.co/96x96/png?text=R",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://placehold.co/96x96/png?text=K",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://placehold.co/96x96/png?text=M",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://placehold.co/96x96/png?text=J",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout today. Two columns, one main feed, and the sidebar finally stops fighting the content.",
	createdAt: "2024-05-02T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underrate: the sidebar is a layout problem, not a content problem.",
	createdAt: "2024-05-02T08:40:00.000Z",
	visibility: "followers",
	replyCount: 5,
	repostCount: 17,
	likeCount: 94,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the rain came in.",
	createdAt: "2024-05-02T07:55:00.000Z",
	visibility: "public",
	replyCount: 8,
	repostCount: 23,
	likeCount: 176,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle post: still not convinced that infinite scroll beats a plain paginated feed.",
	createdAt: "2024-05-02T06:30:00.000Z",
	visibility: "circle",
	replyCount: 3,
	repostCount: 6,
	likeCount: 41,
	likedByViewer: false,
};

const initialPosts: PostModel[] = [postOne, postTwo, postThree, postFour];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9120, category: "Technology" },
	{ id: "t-3", label: "Morning walks", postCount: 3480 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by @kai", following: false },
	{ author: mio, reason: "Followed by @rin and 4 others", following: false },
	{ author: jun, reason: "New to your circle", following: true },
];

export function TimelinePage() {
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [query, setQuery] = useState("");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [posts, setPosts] = useState<PostModel[]>(initialPosts);
	const [suggestedUsers, setSuggestedUsers] = useState(suggestions);

	// The feed is a fixed four-post list, so the cards stay written out one by one as the Story
	// has them: each carries its own timestamp label and its own optional media/quote slot.
	const [feedPostOne, feedPostTwo, feedPostThree, feedPostFour] = posts;

	const toggleLike = (postId: string) => {
		setPosts((current) =>
			current.map((post) =>
				post.id === postId
					? {
							...post,
							likedByViewer: !post.likedByViewer,
							likeCount: post.likeCount + (post.likedByViewer ? -1 : 1),
						}
					: post,
			),
		);
	};

	const toggleFollow = (authorId: string, following: boolean) => {
		setSuggestedUsers((current) =>
			current.map((suggestion) =>
				suggestion.author.id === authorId ? { ...suggestion, following } : suggestion,
			),
		);
	};

	const submitDraft = () => {
		setDraft("");
	};

	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value={query} onQueryChange={setQuery} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed={activeFeed} onFeedChange={setActiveFeed} />
					<PostComposer
						viewer={viewer}
						draft={draft}
						visibility={visibility}
						onDraftChange={setDraft}
						onSubmitPress={submitDraft}
						visibilityPicker={
							<VisibilityPicker visibility={visibility} onVisibilityChange={setVisibility} />
						}
					/>
					<PostCard
						post={feedPostOne}
						authorLine={
							<PostAuthorLine
								author={feedPostOne.author}
								label="2h"
								visibility={feedPostOne.visibility}
								avatar={<UserAvatar author={feedPostOne.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={feedPostOne}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(feedPostOne.id)}
							/>
						}
					/>
					<PostCard
						post={feedPostTwo}
						authorLine={
							<PostAuthorLine
								author={feedPostTwo.author}
								label="3h"
								visibility={feedPostTwo.visibility}
								avatar={<UserAvatar author={feedPostTwo.author} />}
							/>
						}
						quoted={
							<QuotedPost
								post={feedPostOne}
								avatar={<UserAvatar author={feedPostOne.author} density="compact" />}
							/>
						}
						actions={
							<PostActionBar
								post={feedPostTwo}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(feedPostTwo.id)}
							/>
						}
					/>
					<PostCard
						post={feedPostThree}
						authorLine={
							<PostAuthorLine
								author={feedPostThree.author}
								label="4h"
								visibility={feedPostThree.visibility}
								avatar={<UserAvatar author={feedPostThree.author} />}
							/>
						}
						media={
							<PostMedia
								images={[
									{
										url: "https://placehold.co/640x360/png?text=Riverside",
										alt: "A riverside path under grey morning cloud",
									},
									{
										url: "https://placehold.co/640x360/png?text=Bridge",
										alt: "A steel footbridge with rain starting to fall",
									},
								]}
							/>
						}
						actions={
							<PostActionBar
								post={feedPostThree}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(feedPostThree.id)}
							/>
						}
					/>
					<PostCard
						post={feedPostFour}
						authorLine={
							<PostAuthorLine
								author={feedPostFour.author}
								label="6h"
								visibility={feedPostFour.visibility}
								avatar={<UserAvatar author={feedPostFour.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={feedPostFour}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(feedPostFour.id)}
							/>
						}
					/>
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trending now"
						items={trends.map((trend, index) => (
							<TrendItem key={trend.id} rank={index + 1} trend={trend} onTrendPress={noop} />
						))}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={suggestedUsers.map((suggestion) => (
							<SuggestedUserRow
								key={suggestion.author.id}
								author={suggestion.author}
								reason={suggestion.reason}
								avatar={<UserAvatar author={suggestion.author} density="compact" />}
								follow={
									<FollowButton
										following={suggestion.following}
										onFollowToggle={(following) => toggleFollow(suggestion.author.id, following)}
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
