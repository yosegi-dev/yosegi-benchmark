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

const noop = () => {};

const viewer: AuthorModel = {
	id: "u-viewer",
	displayName: "Nao Kurata",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
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
	avatarUrl: "https://i.pravatar.cc/160?img=45",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
};

const post1: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new type-driven registry today. Every prop the editor offers now comes straight from the source types, so nothing can drift out of sync.",
	createdAt: "2026-08-13T09:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underestimate. Generating the UI is easy; keeping it honest against the real component contracts is the hard bit.",
	createdAt: "2026-08-13T08:05:00.000Z",
	visibility: "followers",
	replyCount: 5,
	repostCount: 21,
	likeCount: 94,
	likedByViewer: false,
};

const post3: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the studio opened. The light on the canal only lasts about ten minutes.",
	createdAt: "2026-08-13T07:20:00.000Z",
	visibility: "public",
	replyCount: 8,
	repostCount: 16,
	likeCount: 187,
	likedByViewer: false,
};

const post4: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: what is the smallest change you made this month that ended up saving you the most time?",
	createdAt: "2026-08-12T22:45:00.000Z",
	visibility: "circle",
	replyCount: 31,
	repostCount: 4,
	likeCount: 62,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{
		id: "t-1",
		label: "#TypeDrivenUI",
		postCount: 18400,
		category: "Technology",
	},
	{ id: "t-2", label: "Storybook 9", postCount: 9320, category: "Technology" },
	{ id: "t-3", label: "Canal light", postCount: 2140 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] =
	[
		{ author: rin, reason: "Followed by @kai and 12 others", following: false },
		{ author: mio, reason: "Based on your recent likes", following: false },
		{ author: jun, reason: "Followed by @rin", following: true },
	];

export function TimelinePage() {
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [query, setQuery] = useState("");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [posts, setPosts] = useState<PostModel[]>([post1, post2, post3, post4]);
	const [suggestionRows, setSuggestionRows] = useState(suggestions);

	// The cards are laid out individually rather than mapped, so name the four
	// entries the way the Story did; the array only exists to hold like state.
	const [feedPost1, feedPost2, feedPost3, feedPost4] = posts;

	const toggleLike = (id: string) => {
		setPosts((current) =>
			current.map((post) =>
				post.id === id
					? {
							...post,
							likedByViewer: !post.likedByViewer,
							likeCount: post.likedByViewer
								? post.likeCount - 1
								: post.likeCount + 1,
						}
					: post,
			),
		);
	};

	// FollowButton reports the state it is moving to, not the current one.
	const setFollowing = (authorId: string, following: boolean) => {
		setSuggestionRows((current) =>
			current.map((suggestion) =>
				suggestion.author.id === authorId
					? { ...suggestion, following }
					: suggestion,
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
						<SearchField
							value={query}
							onQueryChange={setQuery}
							placeholder="Search Yosegi"
							density="cozy"
						/>
					}
					notifications={
						<NotificationBell unreadCount={7} onBellPress={noop} tone="quiet" />
					}
				/>
			}
			main={
				<>
					<FeedTabs
						activeFeed={activeFeed}
						onFeedChange={setActiveFeed}
						density="cozy"
					/>
					<PostComposer
						draft={draft}
						onDraftChange={setDraft}
						onSubmitPress={() => setDraft("")}
						viewer={viewer}
						visibility={visibility}
						submitLabel="Post"
						visibilityPicker={
							<VisibilityPicker
								visibility={visibility}
								onVisibilityChange={setVisibility}
								density="cozy"
							/>
						}
					/>

					<PostCard
						post={feedPost1}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={feedPost1.author}
								label="2h"
								visibility={feedPost1.visibility}
								avatar={<UserAvatar author={feedPost1.author} density="cozy" />}
							/>
						}
						actions={
							<PostActionBar
								post={feedPost1}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(feedPost1.id)}
								density="cozy"
							/>
						}
					/>

					<PostCard
						post={feedPost2}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={feedPost2.author}
								label="3h"
								visibility={feedPost2.visibility}
								avatar={<UserAvatar author={feedPost2.author} density="cozy" />}
							/>
						}
						quoted={
							<QuotedPost
								post={feedPost1}
								avatar={
									<UserAvatar author={feedPost1.author} density="compact" />
								}
							/>
						}
						actions={
							<PostActionBar
								post={feedPost2}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(feedPost2.id)}
								density="cozy"
							/>
						}
					/>

					<PostCard
						post={feedPost3}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={feedPost3.author}
								label="5h"
								visibility={feedPost3.visibility}
								avatar={<UserAvatar author={feedPost3.author} density="cozy" />}
							/>
						}
						media={
							<PostMedia
								images={[
									{
										url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800",
										alt: "Morning light across a still canal",
									},
									{
										url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
										alt: "Low fog over the water by the studio",
									},
								]}
								density="cozy"
							/>
						}
						actions={
							<PostActionBar
								post={feedPost3}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(feedPost3.id)}
								density="cozy"
							/>
						}
					/>

					<PostCard
						post={feedPost4}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={feedPost4.author}
								label="14h"
								visibility={feedPost4.visibility}
								avatar={<UserAvatar author={feedPost4.author} density="cozy" />}
							/>
						}
						actions={
							<PostActionBar
								post={feedPost4}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={() => toggleLike(feedPost4.id)}
								density="cozy"
							/>
						}
					/>
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trending now"
						density="cozy"
						items={trends.map((trend, index) => (
							<TrendItem
								key={trend.id}
								rank={index + 1}
								trend={trend}
								onTrendPress={noop}
							/>
						))}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						density="cozy"
						rows={suggestionRows.map((suggestion) => (
							<SuggestedUserRow
								key={suggestion.author.id}
								author={suggestion.author}
								reason={suggestion.reason}
								avatar={
									<UserAvatar author={suggestion.author} density="compact" />
								}
								follow={
									<FollowButton
										following={suggestion.following}
										onFollowToggle={(following) =>
											setFollowing(suggestion.author.id, following)
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
