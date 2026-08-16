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
	displayName: "Nao Kimura",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/128?img=15",
	verified: false,
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=1",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
	verified: false,
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=5",
	verified: false,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=33",
	verified: false,
};

const aoi = {
	id: "u-aoi",
	displayName: "Aoi Mori",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/128?img=20",
	verified: false,
};

const haru = {
	id: "u-haru",
	displayName: "Haru Kondo",
	handle: "haru",
	avatarUrl: "https://i.pravatar.cc/128?img=24",
	verified: true,
};

const sora = {
	id: "u-sora",
	displayName: "Sora Nishi",
	handle: "sora",
	avatarUrl: "https://i.pravatar.cc/128?img=28",
	verified: false,
};

const post1 = {
	id: "p-1",
	author: rin,
	body: "Rebuilt the timeline on top of the shared component set this week. Nothing bespoke left in the feed column.",
	createdAt: "2026-08-14T09:12:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p-2",
	author: kai,
	body: "This is the part people underestimate: the hard work is deciding what the components own, not writing them.",
	createdAt: "2026-08-14T08:40:00.000Z",
	visibility: "followers" as const,
	replyCount: 5,
	repostCount: 21,
	likeCount: 96,
	likedByViewer: false,
};

const post3 = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio wall this morning. The light only does this for about ten minutes.",
	createdAt: "2026-08-14T07:55:00.000Z",
	visibility: "public" as const,
	replyCount: 8,
	repostCount: 14,
	likeCount: 187,
	likedByViewer: false,
};

const post4 = {
	id: "p-4",
	author: jun,
	body: "Quiet week. Reading more than I am shipping, and that is fine for now.",
	createdAt: "2026-08-14T06:30:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 3,
	likeCount: 41,
	likedByViewer: false,
};

const noop = () => {};

const meta: Meta = {
	title: "Screens/TimelineScreen",
};

export default meta;

type Story = StoryObj;

export const Timeline: Story = {
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
						post={post1}
						authorLine={
							<PostAuthorLine
								author={rin}
								label="2h"
								visibility={post1.visibility}
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
								visibility={post2.visibility}
								avatar={<UserAvatar author={kai} />}
							/>
						}
						quoted={<QuotedPost post={post1} avatar={<UserAvatar author={rin} />} />}
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
								visibility={post3.visibility}
								avatar={<UserAvatar author={mio} />}
							/>
						}
						media={
							<PostMedia
								images={[
									{
										url: "https://images.example.com/studio-wall-morning.jpg",
										alt: "Morning light falling across a bare studio wall",
									},
									{
										url: "https://images.example.com/studio-wall-detail.jpg",
										alt: "Close detail of the same wall, showing the plaster texture",
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
								visibility={post4.visibility}
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
										postCount: 18420,
										category: "Technology",
									}}
									onTrendPress={noop}
								/>
								<TrendItem
									rank={2}
									trend={{
										id: "t-2",
										label: "#Storybook",
										postCount: 9310,
										category: "Technology",
									}}
									onTrendPress={noop}
								/>
								<TrendItem
									rank={3}
									trend={{
										id: "t-3",
										label: "#TypeScript",
										postCount: 7645,
										category: "Programming",
									}}
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
									author={aoi}
									reason="Followed by Rin"
									avatar={<UserAvatar author={aoi} />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
								/>
								<SuggestedUserRow
									author={haru}
									reason="Followed by Kai and 4 others"
									avatar={<UserAvatar author={haru} />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
								/>
								<SuggestedUserRow
									author={sora}
									reason="New to the timeline"
									avatar={<UserAvatar author={sora} />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
								/>
							</>
						}
					/>
				</>
			}
		/>
	),
};
