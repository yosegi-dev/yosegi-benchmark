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
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
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
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=8",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, one shell, and every row is a\nslot — it finally reads the way the spec always described it.",
	createdAt: "2024-05-06T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underestimate: the layout was never the hard bit.",
	createdAt: "2024-05-06T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 76,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Morning walk before the release review. Two photos, no filter.",
	createdAt: "2024-05-06T07:05:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 145,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the circle: the migration is done, and nothing broke.",
	createdAt: "2024-05-06T06:20:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 3,
	likeCount: 18,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{
		url: "https://images.example.com/walk-riverside.jpg",
		alt: "A riverside path at sunrise, lined with cherry trees",
	},
	{
		url: "https://images.example.com/walk-bridge.jpg",
		alt: "A steel footbridge crossing the river, seen from below",
	},
];

const trends: TrendModel[] = [
	{
		id: "t-1",
		label: "#DesignSystems",
		postCount: 12400,
		category: "Technology",
	},
	{ id: "t-2", label: "Storybook 8", postCount: 5320, category: "Technology" },
	{ id: "t-3", label: "#MorningWalk", postCount: 890 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{ author: rin, reason: "Followed by kai" },
	{ author: mio, reason: "Followed by rin and 12 others" },
	{ author: jun, reason: "New to your network" },
];

const noop = (): void => {};

function TimelineScreen() {
	const [query, setQuery] = useState("");
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [followed, setFollowed] = useState<Record<string, boolean>>({});

	const header = (
		<TimelineHeader
			viewer={viewer}
			search={
				<SearchField
					value={query}
					placeholder="Search"
					onQueryChange={setQuery}
				/>
			}
			notifications={<NotificationBell unreadCount={3} tone="quiet" />}
			onViewerPress={noop}
		/>
	);

	const main = (
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
				onSubmitPress={noop}
				submitLabel="Post"
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
						label="3h"
						avatar={<UserAvatar author={postTwo.author} />}
						visibility={postTwo.visibility}
					/>
				}
				actions={
					<PostActionBar
						post={postTwo}
						onReplyPress={noop}
						onRepostPress={noop}
						onLikePress={noop}
					/>
				}
				quoted={
					<QuotedPost
						post={postOne}
						avatar={<UserAvatar author={postOne.author} density="compact" />}
					/>
				}
			/>
			<PostCard
				post={postThree}
				authorLine={
					<PostAuthorLine
						author={postThree.author}
						label="5h"
						avatar={<UserAvatar author={postThree.author} />}
						visibility={postThree.visibility}
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
				media={<PostMedia images={postThreeImages} />}
			/>
			<PostCard
				post={postFour}
				authorLine={
					<PostAuthorLine
						author={postFour.author}
						label="7h"
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
	);

	const sidebar = (
		<>
			<TrendPanel
				heading="Trends for you"
				items={
					<>
						{trends.map((trend, index) => (
							<TrendItem
								key={trend.id}
								trend={trend}
								rank={index + 1}
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
						{suggestions.map(({ author, reason }) => (
							<SuggestedUserRow
								key={author.id}
								author={author}
								avatar={<UserAvatar author={author} density="compact" />}
								follow={
									<FollowButton
										following={followed[author.id] ?? false}
										onFollowToggle={(next) => {
											setFollowed((current) => ({
												...current,
												[author.id]: next,
											}));
										}}
									/>
								}
								reason={reason}
							/>
						))}
					</>
				}
			/>
		</>
	);

	return (
		<AppShell header={header} main={main} sidebar={sidebar} density="cozy" />
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
