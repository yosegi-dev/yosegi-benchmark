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

const initialPosts: PostModel[] = [postOne, postTwo, postThree, postFour];

export function TimelinePage() {
	const [query, setQuery] = useState("");
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [posts, setPosts] = useState<PostModel[]>(initialPosts);
	const [suggested, setSuggested] = useState(suggestions);

	// The like button reports intent, not the next value, so the count moves with the flag.
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

	const setFollowing = (authorId: string, following: boolean) => {
		setSuggested((current) =>
			current.map((suggestion) =>
				suggestion.author.id === authorId ? { ...suggestion, following } : suggestion,
			),
		);
	};

	const [firstPost, secondPost, thirdPost, fourthPost] = posts;

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
						onSubmitPress={() => setDraft("")}
						visibilityPicker={
							<VisibilityPicker visibility={visibility} onVisibilityChange={setVisibility} />
						}
					/>
					<PostCard
						post={firstPost}
						authorLine={
							<PostAuthorLine
								author={firstPost.author}
								label="2h"
								visibility={firstPost.visibility}
								avatar={<UserAvatar author={firstPost.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={firstPost}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(firstPost.id)}
							/>
						}
					/>
					<PostCard
						post={secondPost}
						authorLine={
							<PostAuthorLine
								author={secondPost.author}
								label="3h"
								visibility={secondPost.visibility}
								avatar={<UserAvatar author={secondPost.author} />}
							/>
						}
						quoted={
							<QuotedPost
								post={firstPost}
								avatar={<UserAvatar author={firstPost.author} density="compact" />}
							/>
						}
						actions={
							<PostActionBar
								post={secondPost}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(secondPost.id)}
							/>
						}
					/>
					<PostCard
						post={thirdPost}
						authorLine={
							<PostAuthorLine
								author={thirdPost.author}
								label="4h"
								visibility={thirdPost.visibility}
								avatar={<UserAvatar author={thirdPost.author} />}
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
								post={thirdPost}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(thirdPost.id)}
							/>
						}
					/>
					<PostCard
						post={fourthPost}
						authorLine={
							<PostAuthorLine
								author={fourthPost.author}
								label="6h"
								visibility={fourthPost.visibility}
								avatar={<UserAvatar author={fourthPost.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={fourthPost}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(fourthPost.id)}
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
						rows={suggested.map((suggestion) => (
							<SuggestedUserRow
								key={suggestion.author.id}
								author={suggestion.author}
								reason={suggestion.reason}
								avatar={<UserAvatar author={suggestion.author} density="compact" />}
								follow={
									<FollowButton
										following={suggestion.following}
										onFollowToggle={(following) => setFollowing(suggestion.author.id, following)}
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
