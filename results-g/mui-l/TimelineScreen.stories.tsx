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

const viewer = {
	id: "u-viewer",
	displayName: "Nao Kurata",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
	verified: true,
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=1",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=2",
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=3",
	verified: false,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=4",
};

const post1 = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout this morning. Two columns, no surprises, and it finally survives a 1440px window without a single scrollbar in the wrong place.",
	createdAt: "2026-08-17T07:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
} as const;

const post2 = {
	id: "p-2",
	author: kai,
	body: "This matches what we measured last week. Sharing with the design channel before standup.",
	createdAt: "2026-08-17T06:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
} as const;

const post3 = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio session. Natural light only, no retouching.",
	createdAt: "2026-08-17T05:25:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 184,
	likedByViewer: false,
} as const;

const post4 = {
	id: "p-4",
	author: jun,
	body: "Small circle question: does anyone still keep a paper notebook for release checklists?",
	createdAt: "2026-08-17T04:05:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 33,
	likedByViewer: false,
} as const;

const noop = () => {};

const meta: Meta = {
	title: "Screens/TimelineScreen",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
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
					<FeedTabs activeFeed="for-you" onFeedChange={noop} />
					<PostComposer
						draft=""
						onDraftChange={noop}
						onSubmitPress={noop}
						viewer={viewer}
						visibility="public"
						submitLabel="Post"
						visibilityPicker={
							<VisibilityPicker visibility="public" onVisibilityChange={noop} />
						}
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
								label="3h"
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
								label="4h"
								visibility="public"
								avatar={<UserAvatar author={mio} />}
							/>
						}
						media={
							<PostMedia
								images={[
									{
										url: "https://picsum.photos/id/1015/800/600",
										alt: "Studio table lit from a side window",
									},
									{
										url: "https://picsum.photos/id/1025/800/600",
										alt: "Close-up of the same setup from above",
									},
								]}
							/>
						}
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
								label="6h"
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
								<TrendItem
									rank={1}
									trend={{
										id: "t-1",
										label: "#DesignSystems",
										postCount: 12400,
										category: "Technology",
									}}
									onTrendPress={noop}
								/>
								<TrendItem
									rank={2}
									trend={{
										id: "t-2",
										label: "#TypeScript",
										postCount: 8300,
										category: "Programming",
									}}
									onTrendPress={noop}
								/>
								<TrendItem
									rank={3}
									trend={{ id: "t-3", label: "#StudioLight", postCount: 2150 }}
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
									author={{
										id: "u-aya",
										displayName: "Aya Morita",
										handle: "aya",
										avatarUrl: "https://i.pravatar.cc/160?img=5",
										verified: true,
									}}
									reason="Followed by Rin"
									avatar={
										<UserAvatar
											author={{
												id: "u-aya",
												displayName: "Aya Morita",
												handle: "aya",
												avatarUrl: "https://i.pravatar.cc/160?img=5",
												verified: true,
											}}
											density="compact"
										/>
									}
									follow={<FollowButton following={false} onFollowToggle={noop} density="compact" />}
								/>
								<SuggestedUserRow
									author={{
										id: "u-sho",
										displayName: "Sho Nakai",
										handle: "sho",
										avatarUrl: "https://i.pravatar.cc/160?img=6",
									}}
									reason="Followed by Kai and 3 others"
									avatar={
										<UserAvatar
											author={{
												id: "u-sho",
												displayName: "Sho Nakai",
												handle: "sho",
												avatarUrl: "https://i.pravatar.cc/160?img=6",
											}}
											density="compact"
										/>
									}
									follow={<FollowButton following={false} onFollowToggle={noop} density="compact" />}
								/>
								<SuggestedUserRow
									author={{
										id: "u-emi",
										displayName: "Emi Tachibana",
										handle: "emi",
										avatarUrl: "https://i.pravatar.cc/160?img=7",
										verified: false,
									}}
									reason="New to the studio channel"
									avatar={
										<UserAvatar
											author={{
												id: "u-emi",
												displayName: "Emi Tachibana",
												handle: "emi",
												avatarUrl: "https://i.pravatar.cc/160?img=7",
												verified: false,
											}}
											density="compact"
										/>
									}
									follow={<FollowButton following={true} onFollowToggle={noop} density="compact" />}
								/>
							</>
						}
					/>
				</>
			}
		/>
	),
};
