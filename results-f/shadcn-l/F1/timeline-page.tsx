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
	id: "u-viewer",
	displayName: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/150?img=12",
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
	avatarUrl: "https://i.pravatar.cc/150?img=15",
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
	avatarUrl: "https://i.pravatar.cc/150?img=8",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, one scroll position, and finally no layout shift when the sidebar loads.",
	createdAt: "2026-08-13T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underrate: the layout shift was never a CSS problem, it was a data-loading problem.",
	createdAt: "2026-08-13T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Morning walk before the review meeting. The light on the river was worth the early alarm.",
	createdAt: "2026-08-13T07:05:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: how many of you actually read the release notes before updating?",
	createdAt: "2026-08-13T06:20:00.000Z",
	visibility: "circle",
	replyCount: 18,
	repostCount: 2,
	likeCount: 37,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{
		url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
		alt: "A river at sunrise seen from a footpath",
	},
	{
		url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
		alt: "Sunlight through the trees along the same path",
	},
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "Layout Shift", postCount: 3820, category: "Web" },
	{ id: "t-3", label: "#MorningWalk", postCount: 941, category: "Lifestyle" },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by kai", following: false },
	{ author: mio, reason: "Followed by rin and 4 others", following: false },
	{ author: jun, reason: "New to your circle", following: true },
];

/** Only the like fields change at runtime, so the posts themselves stay constant. */
interface LikeState {
	likedByViewer: boolean;
	likeCount: number;
}

const initialLikes: Record<string, LikeState> = {
	[postOne.id]: { likedByViewer: postOne.likedByViewer, likeCount: postOne.likeCount },
	[postTwo.id]: { likedByViewer: postTwo.likedByViewer, likeCount: postTwo.likeCount },
	[postThree.id]: { likedByViewer: postThree.likedByViewer, likeCount: postThree.likeCount },
	[postFour.id]: { likedByViewer: postFour.likedByViewer, likeCount: postFour.likeCount },
};

const initialFollowing: Record<string, boolean> = Object.fromEntries(
	suggestions.map((suggestion) => [suggestion.author.id, suggestion.following]),
);

export function TimelinePage() {
	const [query, setQuery] = useState("");
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [likes, setLikes] = useState<Record<string, LikeState>>(initialLikes);
	const [following, setFollowing] = useState<Record<string, boolean>>(initialFollowing);

	const withLikes = (post: PostModel): PostModel => ({ ...post, ...likes[post.id] });

	const toggleLike = (id: string) => {
		setLikes((current) => {
			const like = current[id];
			return {
				...current,
				[id]: {
					likedByViewer: !like.likedByViewer,
					likeCount: like.likeCount + (like.likedByViewer ? -1 : 1),
				},
			};
		});
	};

	const postOneState = withLikes(postOne);
	const postTwoState = withLikes(postTwo);
	const postThreeState = withLikes(postThree);
	const postFourState = withLikes(postFour);

	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={
						<SearchField value={query} onQueryChange={setQuery} placeholder="Search" />
					}
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
							<VisibilityPicker
								visibility={visibility}
								onVisibilityChange={setVisibility}
							/>
						}
					/>
					<PostCard
						post={postOneState}
						authorLine={
							<PostAuthorLine
								author={postOneState.author}
								label="2h"
								visibility={postOneState.visibility}
								avatar={<UserAvatar author={postOneState.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={postOneState}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(postOne.id)}
							/>
						}
					/>
					<PostCard
						post={postTwoState}
						authorLine={
							<PostAuthorLine
								author={postTwoState.author}
								label="3h"
								visibility={postTwoState.visibility}
								avatar={<UserAvatar author={postTwoState.author} />}
							/>
						}
						quoted={
							<QuotedPost
								post={postOneState}
								avatar={<UserAvatar author={postOneState.author} density="compact" />}
							/>
						}
						actions={
							<PostActionBar
								post={postTwoState}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(postTwo.id)}
							/>
						}
					/>
					<PostCard
						post={postThreeState}
						authorLine={
							<PostAuthorLine
								author={postThreeState.author}
								label="5h"
								visibility={postThreeState.visibility}
								avatar={<UserAvatar author={postThreeState.author} />}
							/>
						}
						media={<PostMedia images={postThreeImages} />}
						actions={
							<PostActionBar
								post={postThreeState}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(postThree.id)}
							/>
						}
					/>
					<PostCard
						post={postFourState}
						authorLine={
							<PostAuthorLine
								author={postFourState.author}
								label="6h"
								visibility={postFourState.visibility}
								avatar={<UserAvatar author={postFourState.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={postFourState}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(postFour.id)}
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
								trend={trend}
								rank={index + 1}
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
										following={following[suggestion.author.id]}
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
