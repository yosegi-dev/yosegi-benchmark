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
	displayName: "Yui Nakamura",
	handle: "yui",
	avatarUrl: "https://i.pravatar.cc/160?img=47",
	verified: true,
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=5",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
};

const haru = {
	id: "u-haru",
	displayName: "Haru Kimura",
	handle: "haru",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
};

const nao = {
	id: "u-nao",
	displayName: "Nao Fujita",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/160?img=24",
	verified: true,
};

const sora = {
	id: "u-sora",
	displayName: "Sora Kubo",
	handle: "sora",
	avatarUrl: "https://i.pravatar.cc/160?img=56",
};

const postRin = {
	id: "p-1",
	author: rin,
	body: "Shipped the new build pipeline this morning. Cold builds went from nine minutes to just under two.",
	createdAt: "2024-05-14T09:12:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last quarter. Caching the type graph is where almost all of it comes from.",
	createdAt: "2024-05-14T08:40:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
};

const postMio = {
	id: "p-3",
	author: mio,
	body: "Two frames from the studio window this week. Same corner, completely different light.",
	createdAt: "2024-05-14T07:55:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 21,
	likeCount: 164,
	likedByViewer: false,
};

const postJun = {
	id: "p-4",
	author: jun,
	body: "Reading week notes: three papers on incremental compilation, one very long walk, no conclusions yet.",
	createdAt: "2024-05-14T07:20:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 5,
	likeCount: 38,
	likedByViewer: false,
};

const mioImages = [
	{
		url: "https://images.example.com/studio-window-morning.jpg",
		alt: "Studio window at sunrise, warm light across the desk",
	},
	{
		url: "https://images.example.com/studio-window-evening.jpg",
		alt: "The same studio window at dusk, blue light and long shadows",
	},
];

const trendCompilers = {
	id: "t-1",
	label: "#compilers",
	postCount: 18400,
	category: "Technology",
};

const trendTypeScript = {
	id: "t-2",
	label: "TypeScript 6",
	postCount: 9120,
	category: "Technology",
};

const trendGoldenWeek = {
	id: "t-3",
	label: "Golden Week",
	postCount: 62300,
};

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Timeline: Story = {
	args: {
		density: "cozy",
		header: (
			<TimelineHeader
				viewer={viewer}
				onViewerPress={noop}
				search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
				notifications={<NotificationBell unreadCount={3} onBellPress={noop} tone="quiet" />}
			/>
		),
		main: (
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
					post={postRin}
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
							post={postRin}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
						/>
					}
				/>
				<PostCard
					post={postKai}
					authorLine={
						<PostAuthorLine
							author={kai}
							label="3h"
							visibility="followers"
							avatar={<UserAvatar author={kai} />}
						/>
					}
					quoted={<QuotedPost post={postRin} avatar={<UserAvatar author={rin} density="compact" />} />}
					actions={
						<PostActionBar
							post={postKai}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
						/>
					}
				/>
				<PostCard
					post={postMio}
					authorLine={
						<PostAuthorLine
							author={mio}
							label="4h"
							visibility="public"
							avatar={<UserAvatar author={mio} />}
						/>
					}
					media={<PostMedia images={mioImages} />}
					actions={
						<PostActionBar
							post={postMio}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
						/>
					}
				/>
				<PostCard
					post={postJun}
					authorLine={
						<PostAuthorLine
							author={jun}
							label="5h"
							visibility="circle"
							avatar={<UserAvatar author={jun} />}
						/>
					}
					actions={
						<PostActionBar
							post={postJun}
							onReplyPress={noop}
							onRepostPress={noop}
							onLikePress={noop}
						/>
					}
				/>
			</>
		),
		sidebar: (
			<>
				<TrendPanel
					heading="Trending now"
					items={
						<>
							<TrendItem rank={1} trend={trendCompilers} onTrendPress={noop} />
							<TrendItem rank={2} trend={trendTypeScript} onTrendPress={noop} />
							<TrendItem rank={3} trend={trendGoldenWeek} onTrendPress={noop} />
						</>
					}
				/>
				<SuggestedUserPanel
					heading="Who to follow"
					rows={
						<>
							<SuggestedUserRow
								author={haru}
								reason="Followed by Rin"
								avatar={<UserAvatar author={haru} density="compact" />}
								follow={<FollowButton following={false} onFollowToggle={noop} density="compact" />}
							/>
							<SuggestedUserRow
								author={nao}
								reason="Followed by Kai and 8 others"
								avatar={<UserAvatar author={nao} density="compact" />}
								follow={<FollowButton following={false} onFollowToggle={noop} density="compact" />}
							/>
							<SuggestedUserRow
								author={sora}
								reason="New to your topics"
								avatar={<UserAvatar author={sora} density="compact" />}
								follow={<FollowButton following={true} onFollowToggle={noop} density="compact" />}
							/>
						</>
					}
				/>
			</>
		),
	},
};
