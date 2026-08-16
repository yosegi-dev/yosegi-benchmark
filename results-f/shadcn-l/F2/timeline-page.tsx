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
	displayName: "Nao Kimura",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/150?img=15",
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
	avatarUrl: "https://i.pravatar.cc/150?img=2",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?img=3",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=4",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Rebuilt the timeline layout this morning and the two-column grid finally holds up at every breakpoint.",
	createdAt: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last sprint. Sharing with the team channel.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio session yesterday.",
	createdAt: "45m",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: does anyone still run the nightly export by hand?",
	createdAt: "20m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{
		url: "https://images.example.com/studio-wide.jpg",
		alt: "Wide view of the studio with the lighting rig set up",
	},
	{
		url: "https://images.example.com/studio-desk.jpg",
		alt: "Close-up of the mixing desk during the session",
	},
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9210, category: "Trending" },
	{ id: "t-3", label: "#TypeScript", postCount: 5340 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: mio, reason: "Followed by rin", following: false },
	{ author: kai, reason: "Followed by jun", following: true },
	{ author: jun, reason: "New to your circle", following: false },
];

const noop = () => {};

/**
 * The like button reports the toggle, not the next state, so the count has to move
 * with the flag rather than be recomputed from the server.
 */
function toggleLike(post: PostModel): PostModel {
	return {
		...post,
		likedByViewer: !post.likedByViewer,
		likeCount: post.likeCount + (post.likedByViewer ? -1 : 1),
	};
}

export function TimelinePage() {
	const [query, setQuery] = useState("");
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [firstPost, setFirstPost] = useState<PostModel>(postOne);
	const [secondPost, setSecondPost] = useState<PostModel>(postTwo);
	const [thirdPost, setThirdPost] = useState<PostModel>(postThree);
	const [fourthPost, setFourthPost] = useState<PostModel>(postFour);
	const [suggestedUsers, setSuggestedUsers] = useState(suggestions);

	const handleSubmit = () => {
		setDraft("");
	};

	const handleFollowToggle = (authorId: string, following: boolean) => {
		setSuggestedUsers((current) =>
			current.map((suggestion) =>
				suggestion.author.id === authorId ? { ...suggestion, following } : suggestion,
			),
		);
	};

	return (
		<AppShell
			density="cozy"
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
						onSubmitPress={handleSubmit}
						visibilityPicker={
							<VisibilityPicker
								visibility={visibility}
								onVisibilityChange={setVisibility}
							/>
						}
					/>
					<PostCard
						post={firstPost}
						authorLine={
							<PostAuthorLine
								author={firstPost.author}
								label={firstPost.createdAt}
								visibility={firstPost.visibility}
								avatar={<UserAvatar author={firstPost.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={firstPost}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => setFirstPost(toggleLike)}
							/>
						}
					/>
					<PostCard
						post={secondPost}
						authorLine={
							<PostAuthorLine
								author={secondPost.author}
								label={secondPost.createdAt}
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
								onLikePress={() => setSecondPost(toggleLike)}
							/>
						}
					/>
					<PostCard
						post={thirdPost}
						authorLine={
							<PostAuthorLine
								author={thirdPost.author}
								label={thirdPost.createdAt}
								visibility={thirdPost.visibility}
								avatar={<UserAvatar author={thirdPost.author} />}
							/>
						}
						media={<PostMedia images={postThreeImages} />}
						actions={
							<PostActionBar
								post={thirdPost}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => setThirdPost(toggleLike)}
							/>
						}
					/>
					<PostCard
						post={fourthPost}
						authorLine={
							<PostAuthorLine
								author={fourthPost.author}
								label={fourthPost.createdAt}
								visibility={fourthPost.visibility}
								avatar={<UserAvatar author={fourthPost.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={fourthPost}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => setFourthPost(toggleLike)}
							/>
						}
					/>
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
								{suggestedUsers.map((suggestion) => (
									<SuggestedUserRow
										key={suggestion.author.id}
										author={suggestion.author}
										reason={suggestion.reason}
										avatar={<UserAvatar author={suggestion.author} />}
										follow={
											<FollowButton
												following={suggestion.following}
												onFollowToggle={(following) =>
													handleFollowToggle(suggestion.author.id, following)
												}
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
