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
	id: "u-viewer",
	displayName: "Aoi Nakagawa",
	handle: "aoi",
	avatarUrl: "https://images.example.com/avatars/aoi.png",
	verified: false,
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://images.example.com/avatars/rin.png",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://images.example.com/avatars/kai.png",
	verified: false,
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://images.example.com/avatars/mio.png",
	verified: false,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://images.example.com/avatars/jun.png",
	verified: false,
};

const haru = {
	id: "u-haru",
	displayName: "Haru Kimura",
	handle: "haru",
	avatarUrl: "https://images.example.com/avatars/haru.png",
	verified: false,
};

const nao = {
	id: "u-nao",
	displayName: "Nao Fujita",
	handle: "nao",
	avatarUrl: "https://images.example.com/avatars/nao.png",
	verified: true,
};

const sora = {
	id: "u-sora",
	displayName: "Sora Miyake",
	handle: "sora",
	avatarUrl: "https://images.example.com/avatars/sora.png",
	verified: false,
};

const postRin = {
	id: "p-1",
	author: rin,
	body: "Spent the morning rewriting the layout pass. Half the code went away and the result is faster.",
	createdAt: "2026-05-02T09:12:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last quarter. Deleting code really is the fastest optimisation.",
	createdAt: "2026-05-02T08:40:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postMio = {
	id: "p-3",
	author: mio,
	body: "Two frames from this morning's walk along the river.",
	createdAt: "2026-05-02T07:55:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun = {
	id: "p-4",
	author: jun,
	body: "Small circle question: what are you all using for local type checking on large monorepos?",
	createdAt: "2026-05-02T06:30:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const mioImages = [
	{
		url: "https://images.example.com/posts/river-morning.jpg",
		alt: "Mist rising off a river at sunrise",
	},
	{
		url: "https://images.example.com/posts/river-bridge.jpg",
		alt: "A steel footbridge crossing the same river",
	},
];

const trendDesignTokens = {
	id: "t-1",
	label: "#DesignTokens",
	postCount: 4820,
	category: "Technology",
};

const trendTypeScript = {
	id: "t-2",
	label: "TypeScript 6.0",
	postCount: 12400,
	category: "Programming",
};

const trendRiverWalk = {
	id: "t-3",
	label: "#RiverWalk",
	postCount: 930,
	category: "Photography",
};

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
} satisfies Meta<typeof AppShell>;

export default meta;

export const Timeline: StoryObj<typeof AppShell> = {
	render: () => (
		<AppShell
			density="cozy"
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} tone="quiet" />}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed="for-you" onFeedChange={noop} density="cozy" />
					<PostComposer
						draft=""
						onDraftChange={noop}
						onSubmitPress={noop}
						viewer={viewer}
						visibility="public"
						submitLabel="Post"
						visibilityPicker={
							<VisibilityPicker visibility="public" onVisibilityChange={noop} density="cozy" />
						}
					/>
					<PostCard
						post={postRin}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={rin}
								label="2h"
								visibility="public"
								avatar={<UserAvatar author={rin} density="cozy" />}
							/>
						}
						actions={
							<PostActionBar
								post={postRin}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>
					<PostCard
						post={postKai}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={kai}
								label="3h"
								visibility="followers"
								avatar={<UserAvatar author={kai} density="cozy" />}
							/>
						}
						quoted={
							<QuotedPost post={postRin} avatar={<UserAvatar author={rin} density="compact" />} />
						}
						actions={
							<PostActionBar
								post={postKai}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>
					<PostCard
						post={postMio}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={mio}
								label="4h"
								visibility="public"
								avatar={<UserAvatar author={mio} density="cozy" />}
							/>
						}
						media={<PostMedia images={mioImages} density="cozy" />}
						actions={
							<PostActionBar
								post={postMio}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>
					<PostCard
						post={postJun}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={jun}
								label="5h"
								visibility="circle"
								avatar={<UserAvatar author={jun} density="cozy" />}
							/>
						}
						actions={
							<PostActionBar
								post={postJun}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trends for you"
						density="cozy"
						items={
							<>
								<TrendItem rank={1} trend={trendTypeScript} onTrendPress={noop} />
								<TrendItem rank={2} trend={trendDesignTokens} onTrendPress={noop} />
								<TrendItem rank={3} trend={trendRiverWalk} onTrendPress={noop} />
							</>
						}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						density="cozy"
						rows={
							<>
								<SuggestedUserRow
									author={haru}
									reason="Followed by rin"
									avatar={<UserAvatar author={haru} density="cozy" />}
									follow={<FollowButton following={false} onFollowToggle={noop} density="cozy" />}
								/>
								<SuggestedUserRow
									author={nao}
									reason="Followed by kai and 2 others"
									avatar={<UserAvatar author={nao} density="cozy" />}
									follow={<FollowButton following={false} onFollowToggle={noop} density="cozy" />}
								/>
								<SuggestedUserRow
									author={sora}
									reason="New to the timeline"
									avatar={<UserAvatar author={sora} density="cozy" />}
									follow={<FollowButton following={false} onFollowToggle={noop} density="cozy" />}
								/>
							</>
						}
					/>
				</>
			}
		/>
	),
};
