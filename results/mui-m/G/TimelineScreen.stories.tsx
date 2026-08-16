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
	displayName: "Aoi Mori",
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
	verified: false,
};

const post1 = {
	id: "p-1",
	author: rin,
	body: "Rewrote the sync layer over the weekend and the timeline finally loads in one pass. Turns out the slow part was never the network.",
	createdAt: "2026-08-13T07:40:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last quarter. Measure before you optimise, every single time.",
	createdAt: "2026-08-13T08:05:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 62,
	likedByViewer: false,
};

const post3 = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk along the river. The light was doing something unusual.",
	createdAt: "2026-08-13T08:30:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 21,
	likeCount: 148,
	likedByViewer: false,
};

const post4 = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the small circle: taking next week off. Back with the prototype after that.",
	createdAt: "2026-08-13T09:15:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 1,
	likeCount: 27,
	likedByViewer: false,
};

const post3Images = [
	{
		url: "https://images.example.com/river-morning-01.jpg",
		alt: "Sunlight breaking across a river at dawn",
	},
	{
		url: "https://images.example.com/river-morning-02.jpg",
		alt: "A footbridge over the same river, seen from the bank",
	},
];

const trend1 = {
	id: "t-1",
	label: "#DesignSystems",
	postCount: 18400,
	category: "Technology",
};

const trend2 = {
	id: "t-2",
	label: "Morning Light",
	postCount: 9320,
	category: "Photography",
};

const trend3 = {
	id: "t-3",
	label: "#WeekendBuilds",
	postCount: 4210,
	category: "Trending",
};

const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Timeline: Story = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search Yosegi" />}
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
						quoted={
							<QuotedPost post={post1} avatar={<UserAvatar author={rin} density="compact" />} />
						}
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
								<TrendItem rank={1} trend={trend1} onTrendPress={noop} />
								<TrendItem rank={2} trend={trend2} onTrendPress={noop} />
								<TrendItem rank={3} trend={trend3} onTrendPress={noop} />
							</>
						}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={
							<>
								<SuggestedUserRow
									author={rin}
									reason="Followed by Kai Doi"
									avatar={<UserAvatar author={rin} density="compact" />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
								/>
								<SuggestedUserRow
									author={mio}
									reason="Posts about photography"
									avatar={<UserAvatar author={mio} density="compact" />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
								/>
								<SuggestedUserRow
									author={jun}
									reason="Followed by Rin Amano"
									avatar={<UserAvatar author={jun} density="compact" />}
									follow={<FollowButton following onFollowToggle={noop} />}
								/>
							</>
						}
					/>
				</>
			}
		/>
	),
};
