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
	id: "u-sora",
	displayName: "Sora Kimura",
	handle: "sora",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=45",
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
};

const postRin = {
	id: "p-1",
	author: rin,
	body: "Rewrote the timeline in one sitting. The trick was letting each card own its own slots instead of threading everything through one giant prop.",
	createdAt: "2026-03-02T09:12:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai = {
	id: "p-2",
	author: kai,
	body: "This matches what we landed on last quarter. Slots first, props second.",
	createdAt: "2026-03-02T08:40:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
};

const postMio = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the office. The light near the river was unreasonably good.",
	createdAt: "2026-03-02T07:05:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 21,
	likeCount: 164,
	likedByViewer: false,
};

const postJun = {
	id: "p-4",
	author: jun,
	body: "Small circle post: I am finally happy with the migration plan. Details on Thursday.",
	createdAt: "2026-03-02T06:22:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 3,
	likeCount: 28,
	likedByViewer: false,
};

const trendYosegi = {
	id: "t-1",
	label: "#YosegiCon",
	postCount: 12400,
	category: "Technology",
};

const trendSakura = {
	id: "t-2",
	label: "Sakura forecast",
	postCount: 8300,
	category: "Trending now",
};

const trendDesignSystems = {
	id: "t-3",
	label: "#DesignSystems",
	postCount: 5100,
	category: "Design",
};

const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
	component: AppShell,
};

export default meta;

type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
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
						visibilityPicker={
							<VisibilityPicker visibility="public" onVisibilityChange={noop} />
						}
					/>
					<PostCard
						post={postRin}
						authorLine={
							<PostAuthorLine
								author={rin}
								label="2h"
								visibility={postRin.visibility}
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
								visibility={postKai.visibility}
								avatar={<UserAvatar author={kai} />}
							/>
						}
						quoted={
							<QuotedPost post={postRin} avatar={<UserAvatar author={rin} />} />
						}
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
								label="5h"
								visibility={postMio.visibility}
								avatar={<UserAvatar author={mio} />}
							/>
						}
						media={
							<PostMedia
								images={[
									{
										url: "https://images.example.com/riverside-morning.jpg",
										alt: "Morning light on the riverside path",
									},
									{
										url: "https://images.example.com/bridge-shadow.jpg",
										alt: "Shadow of a bridge across still water",
									},
								]}
							/>
						}
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
								label="6h"
								visibility={postJun.visibility}
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
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trends for you"
						items={
							<>
								<TrendItem rank={1} trend={trendYosegi} onTrendPress={noop} />
								<TrendItem rank={2} trend={trendSakura} onTrendPress={noop} />
								<TrendItem
									rank={3}
									trend={trendDesignSystems}
									onTrendPress={noop}
								/>
							</>
						}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={
							<>
								<SuggestedUserRow
									author={rin}
									reason="Followed by kai"
									avatar={<UserAvatar author={rin} />}
									follow={
										<FollowButton following={false} onFollowToggle={noop} />
									}
								/>
								<SuggestedUserRow
									author={mio}
									reason="Posts you might like"
									avatar={<UserAvatar author={mio} />}
									follow={
										<FollowButton following={false} onFollowToggle={noop} />
									}
								/>
								<SuggestedUserRow
									author={jun}
									reason="Followed by rin"
									avatar={<UserAvatar author={jun} />}
									follow={
										<FollowButton following={false} onFollowToggle={noop} />
									}
								/>
							</>
						}
					/>
				</>
			}
		/>
	),
};
