import type { Meta, StoryObj } from "@storybook/react";
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

const noop = () => {};

const viewer = {
	id: "u-aoi",
	displayName: "Aoi Nakamura",
	handle: "@aoi",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
	verified: false,
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "@rin",
	avatarUrl: "https://i.pravatar.cc/128?img=32",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "@kai",
	avatarUrl: "https://i.pravatar.cc/128?img=15",
	verified: false,
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "@mio",
	avatarUrl: "https://i.pravatar.cc/128?img=45",
	verified: false,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "@jun",
	avatarUrl: "https://i.pravatar.cc/128?img=68",
	verified: true,
};

const haruka = {
	id: "u-haruka",
	displayName: "Haruka Ono",
	handle: "@haruka",
	avatarUrl: "https://i.pravatar.cc/128?img=24",
	verified: false,
};

const sora = {
	id: "u-sora",
	displayName: "Sora Kishi",
	handle: "@sora",
	avatarUrl: "https://i.pravatar.cc/128?img=51",
	verified: true,
};

const nao = {
	id: "u-nao",
	displayName: "Nao Fujii",
	handle: "@nao",
	avatarUrl: "https://i.pravatar.cc/128?img=7",
	verified: false,
};

const post1 = {
	id: "p-1",
	author: rin,
	body: "Rewrote the whole export pipeline over the weekend and it finally streams instead of buffering the entire file. 40x less memory on the big inputs.",
	createdAt: "2026-08-17T04:10:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p-2",
	author: kai,
	body: "This is the fix I kept putting off for a year. Streaming was never the hard part — it was admitting the buffer had to go.",
	createdAt: "2026-08-17T05:02:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
};

const post3 = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk. The fog burned off in about ten minutes and I only got these.",
	createdAt: "2026-08-17T05:40:00.000Z",
	visibility: "public" as const,
	replyCount: 8,
	repostCount: 21,
	likeCount: 134,
	likedByViewer: false,
};

const post4 = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the small circle: I'm taking next week off. Ping me only if something is actually on fire.",
	createdAt: "2026-08-17T06:15:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 5,
	likeCount: 33,
	likedByViewer: false,
};

const post3Images = [
	{
		url: "https://images.example.com/fog-ridge.jpg",
		alt: "Fog lifting off a ridge line just after sunrise",
	},
	{
		url: "https://images.example.com/fog-river.jpg",
		alt: "A river valley still filled with low morning fog",
	},
];

const trendDesignSystems = {
	id: "t-1",
	label: "#DesignSystems",
	postCount: 18400,
	category: "Technology",
};

const trendStreaming = {
	id: "t-2",
	label: "#Streaming",
	postCount: 9120,
	category: "Technology",
};

const trendMorningFog = {
	id: "t-3",
	label: "#MorningFog",
	postCount: 3480,
	category: "Photography",
};

const TimelineScreen = () => (
	<AppShell
		density="cozy"
		header={
			<TimelineHeader
				viewer={viewer}
				onViewerPress={noop}
				notifications={<NotificationBell unreadCount={3} onBellPress={noop} tone="quiet" />}
				search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
			/>
		}
		main={
			<>
				<FeedTabs activeFeed="for-you" onFeedChange={noop} />
				<PostComposer
					draft=""
					onDraftChange={noop}
					onSubmitPress={noop}
					viewer={viewer}
					visibility="public"
					submitLabel="Post"
					visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
				/>
				<PostCard
					post={post1}
					authorLine={
						<PostAuthorLine
							author={rin}
							label="2h"
							visibility="public"
							avatar={<UserAvatar author={rin} />}
						/>
					}
					actions={
						<PostActionBar
							post={post1}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
						/>
					}
				/>
				<PostCard
					post={post2}
					authorLine={
						<PostAuthorLine
							author={kai}
							label="1h"
							visibility="followers"
							avatar={<UserAvatar author={kai} />}
						/>
					}
					quoted={<QuotedPost post={post1} avatar={<UserAvatar author={rin} density="compact" />} />}
					actions={
						<PostActionBar
							post={post2}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
						/>
					}
				/>
				<PostCard
					post={post3}
					authorLine={
						<PostAuthorLine
							author={mio}
							label="45m"
							visibility="public"
							avatar={<UserAvatar author={mio} />}
						/>
					}
					media={<PostMedia images={post3Images} />}
					actions={
						<PostActionBar
							post={post3}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
						/>
					}
				/>
				<PostCard
					post={post4}
					authorLine={
						<PostAuthorLine
							author={jun}
							label="20m"
							visibility="circle"
							avatar={<UserAvatar author={jun} />}
						/>
					}
					actions={
						<PostActionBar
							post={post4}
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
							<TrendItem rank={1} trend={trendDesignSystems} onTrendPress={noop} />
							<TrendItem rank={2} trend={trendStreaming} onTrendPress={noop} />
							<TrendItem rank={3} trend={trendMorningFog} onTrendPress={noop} />
						</>
					}
				/>
				<SuggestedUserPanel
					heading="Who to follow"
					rows={
						<>
							<SuggestedUserRow
								author={haruka}
								reason="Followed by Rin"
								avatar={<UserAvatar author={haruka} density="compact" />}
								follow={<FollowButton following={false} onFollowToggle={noop} />}
							/>
							<SuggestedUserRow
								author={sora}
								reason="Followed by Kai and 4 others"
								avatar={<UserAvatar author={sora} density="compact" />}
								follow={<FollowButton following={false} onFollowToggle={noop} />}
							/>
							<SuggestedUserRow
								author={nao}
								reason="New to the timeline"
								avatar={<UserAvatar author={nao} density="compact" />}
								follow={<FollowButton following={true} onFollowToggle={noop} />}
							/>
						</>
					}
				/>
			</>
		}
	/>
);

const meta: Meta<typeof TimelineScreen> = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof TimelineScreen>;

export const Default: Story = {};
