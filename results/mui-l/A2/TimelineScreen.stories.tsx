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

const noop = () => {};

const viewer: AuthorModel = {
	id: "user-viewer",
	displayName: "Nao Kubo",
	handle: "@nao",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
};

const rin: AuthorModel = {
	id: "user-rin",
	displayName: "Rin Amano",
	handle: "@rin",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "user-kai",
	displayName: "Kai Doi",
	handle: "@kai",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
};

const mio: AuthorModel = {
	id: "user-mio",
	displayName: "Mio Sato",
	handle: "@mio",
	avatarUrl: "https://i.pravatar.cc/160?img=45",
	verified: true,
};

const jun: AuthorModel = {
	id: "user-jun",
	displayName: "Jun Ito",
	handle: "@jun",
	avatarUrl: "https://i.pravatar.cc/160?img=53",
};

const postOne: PostModel = {
	id: "post-1",
	author: rin,
	body: "Shipped the new timeline layout this morning. Two columns, sticky header, and the sidebar finally stops fighting the feed on narrow desktops.",
	createdAt: "2026-08-13T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "post-2",
	author: kai,
	body: "This matches what we measured last sprint. Sticky sidebars are the single biggest win on wide screens.",
	createdAt: "2026-08-13T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "post-3",
	author: mio,
	body: "Two frames from this morning's walk. The fog burned off about ten minutes after the second one.",
	createdAt: "2026-08-13T07:55:00.000Z",
	visibility: "public",
	replyCount: 8,
	repostCount: 21,
	likeCount: 164,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "post-4",
	author: jun,
	body: "Quiet note for the close circle: taking Friday off. Ping me only if the deploy pipeline is on fire.",
	createdAt: "2026-08-13T06:30:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 33,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/seed/timeline-fog/800/600", alt: "Fog settling over a quiet river path" },
	{ url: "https://picsum.photos/seed/timeline-bridge/800/600", alt: "A footbridge half hidden by morning haze" },
];

const trends: TrendModel[] = [
	{ id: "trend-1", label: "#DesignSystems", postCount: 18240, category: "Technology" },
	{ id: "trend-2", label: "Storybook 9", postCount: 9612, category: "Frontend" },
	{ id: "trend-3", label: "#MorningWalk", postCount: 4380 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "user-aki",
			displayName: "Aki Nakano",
			handle: "@aki",
			avatarUrl: "https://i.pravatar.cc/160?img=21",
			verified: true,
		},
		reason: "Followed by Rin Amano",
	},
	{
		author: {
			id: "user-sora",
			displayName: "Sora Hayashi",
			handle: "@sora",
			avatarUrl: "https://i.pravatar.cc/160?img=64",
		},
		reason: "Followed by Kai Doi and 3 others",
	},
	{
		author: {
			id: "user-yui",
			displayName: "Yui Morita",
			handle: "@yui",
			avatarUrl: "https://i.pravatar.cc/160?img=47",
		},
		reason: "New to Yosegi",
	},
];

function TimelineScreen() {
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [query, setQuery] = useState("");
	const [following, setFollowing] = useState<Record<string, boolean>>({});

	const header = (
		<TimelineHeader
			viewer={viewer}
			search={<SearchField value={query} onQueryChange={setQuery} placeholder="Search Yosegi" />}
			notifications={<NotificationBell unreadCount={7} />}
			onViewerPress={noop}
		/>
	);

	const main = (
		<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
			<FeedTabs activeFeed={activeFeed} onFeedChange={setActiveFeed} />
			<PostComposer
				viewer={viewer}
				draft={draft}
				visibility={visibility}
				visibilityPicker={<VisibilityPicker visibility={visibility} onVisibilityChange={setVisibility} />}
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
						label="3h"
						avatar={<UserAvatar author={postTwo.author} />}
						visibility={postTwo.visibility}
					/>
				}
				quoted={<QuotedPost post={postOne} avatar={<UserAvatar author={postOne.author} density="compact" />} />}
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
						label="4h"
						avatar={<UserAvatar author={postThree.author} />}
						visibility={postThree.visibility}
					/>
				}
				media={<PostMedia images={postThreeImages} />}
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
						label="6h"
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
		</div>
	);

	const sidebar = (
		<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
			<TrendPanel
				heading="Trending now"
				items={trends.map((trend, index) => (
					<TrendItem key={trend.id} trend={trend} rank={index + 1} onTrendPress={noop} />
				))}
			/>
			<SuggestedUserPanel
				heading="Who to follow"
				rows={suggestions.map((suggestion) => (
					<SuggestedUserRow
						key={suggestion.author.id}
						author={suggestion.author}
						reason={suggestion.reason}
						avatar={<UserAvatar author={suggestion.author} density="compact" />}
						follow={
							<FollowButton
								following={following[suggestion.author.id] ?? false}
								onFollowToggle={(next) =>
									setFollowing((current) => ({ ...current, [suggestion.author.id]: next }))
								}
								density="compact"
							/>
						}
					/>
				))}
			/>
		</div>
	);

	return <AppShell header={header} main={main} sidebar={sidebar} />;
}

const meta: Meta<typeof TimelineScreen> = {
	title: "Screens/Timeline",
	component: TimelineScreen,
	parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
