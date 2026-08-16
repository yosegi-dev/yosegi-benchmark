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
	id: "u-viewer",
	displayName: "Nao Fujita",
	handle: "@nao",
	avatarUrl: "/avatars/nao.png",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "@rin",
	avatarUrl: "/avatars/rin.png",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "@kai",
	avatarUrl: "/avatars/kai.png",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "@mio",
	avatarUrl: "/avatars/mio.png",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "@jun",
	avatarUrl: "/avatars/jun.png",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Rewrote the export pipeline over the weekend and it finally streams instead of buffering the whole file. Memory is flat now.",
	createdAt: "2026-02-10T07:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw on the ingest side. Streaming was the whole fix.",
	createdAt: "2026-02-10T08:05:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from the same balcony, six hours apart. The light does all the work.",
	createdAt: "2026-02-10T08:40:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 134,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: does anyone still keep a paper notebook for standups, or is that just me?",
	createdAt: "2026-02-10T09:02:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 5,
	likeCount: 38,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#StreamingExports", postCount: 4210, category: "Technology" },
	{ id: "t-2", label: "#BalconyLight", postCount: 1875, category: "Photography" },
	{ id: "t-3", label: "#StandupRituals", postCount: 940 },
];

const suggestions: AuthorModel[] = [
	{
		id: "u-aoi",
		displayName: "Aoi Nakai",
		handle: "@aoi",
		avatarUrl: "/avatars/aoi.png",
		verified: true,
	},
	{ id: "u-sora", displayName: "Sora Kimura", handle: "@sora", avatarUrl: "/avatars/sora.png" },
	{ id: "u-haru", displayName: "Haru Yamada", handle: "@haru", avatarUrl: "/avatars/haru.png" },
];

const suggestionReasons: Record<string, string> = {
	"u-aoi": "Followed by Rin Amano",
	"u-sora": "Followed by Kai Doi",
	"u-haru": "New to your circle",
};

const noop = (): void => {};

function TimelineScreen() {
	const [query, setQuery] = useState("");
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [followed, setFollowed] = useState<Record<string, boolean>>({});

	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={
						<SearchField value={query} placeholder="Search posts" onQueryChange={setQuery} />
					}
					notifications={<NotificationBell unreadCount={3} tone="quiet" onBellPress={noop} />}
					onViewerPress={noop}
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
							<VisibilityPicker visibility={visibility} onVisibilityChange={setVisibility} />
						}
						onDraftChange={setDraft}
						onSubmitPress={noop}
					/>

					<PostCard
						post={postOne}
						authorLine={
							<PostAuthorLine
								author={postOne.author}
								label="2h"
								avatar={<UserAvatar author={postOne.author} />}
								visibility={postOne.visibility}
							/>
						}
						actions={
							<PostActionBar
								post={postOne}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>

					<PostCard
						post={postTwo}
						authorLine={
							<PostAuthorLine
								author={postTwo.author}
								label="1h"
								avatar={<UserAvatar author={postTwo.author} />}
								visibility={postTwo.visibility}
							/>
						}
						quoted={<QuotedPost post={postOne} avatar={<UserAvatar author={postOne.author} />} />}
						actions={
							<PostActionBar
								post={postTwo}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>

					<PostCard
						post={postThree}
						authorLine={
							<PostAuthorLine
								author={postThree.author}
								label="45m"
								avatar={<UserAvatar author={postThree.author} />}
								visibility={postThree.visibility}
							/>
						}
						media={
							<PostMedia
								images={[
									{ url: "/media/balcony-morning.jpg", alt: "A balcony railing in flat morning light" },
									{ url: "/media/balcony-evening.jpg", alt: "The same balcony at sunset" },
								]}
							/>
						}
						actions={
							<PostActionBar
								post={postThree}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>

					<PostCard
						post={postFour}
						authorLine={
							<PostAuthorLine
								author={postFour.author}
								label="20m"
								avatar={<UserAvatar author={postFour.author} />}
								visibility={postFour.visibility}
							/>
						}
						actions={
							<PostActionBar
								post={postFour}
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
								{suggestions.map((author) => (
									<SuggestedUserRow
										key={author.id}
										author={author}
										avatar={<UserAvatar author={author} />}
										follow={
											<FollowButton
												following={followed[author.id] ?? false}
												onFollowToggle={(next) =>
													setFollowed((current) => ({ ...current, [author.id]: next }))
												}
											/>
										}
										reason={suggestionReasons[author.id]}
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

const meta = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
