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
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/96?img=1",
	verified: true,
};

const rin = viewer;

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/96?img=2",
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/96?img=3",
	verified: true,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/96?img=4",
};

const post1 = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Four columns of tests, one column of nerves.",
	createdAt: "2024-05-02T09:12:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p-2",
	author: kai,
	body: "This is the release note I keep quoting to people who ask what we do.",
	createdAt: "2024-05-02T08:40:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 52,
	likedByViewer: false,
};

const post3 = {
	id: "p-3",
	author: mio,
	body: "Two photos from the studio move. The plants made it, mostly.",
	createdAt: "2024-05-02T07:55:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const post4 = {
	id: "p-4",
	author: jun,
	body: "Small circle post: the espresso machine is fixed, do not tell anyone.",
	createdAt: "2024-05-02T06:20:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 1,
	likeCount: 19,
	likedByViewer: false,
};

const post3Images = [
	{ url: "https://picsum.photos/id/1015/800/600", alt: "Studio desk by the window" },
	{ url: "https://picsum.photos/id/1025/800/600", alt: "A row of plants on a shelf" },
];

const trends = [
	{ id: "t-1", label: "#StorybookDrivenDesign", postCount: 4820, category: "Technology" },
	{ id: "t-2", label: "Type Safety", postCount: 2140, category: "Programming" },
	{ id: "t-3", label: "#MorningCoffee", postCount: 980 },
];

const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
	render: () => (
		<AppShell
			density="cozy"
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={
						<SearchField
							value=""
							onQueryChange={noop}
							density="cozy"
							placeholder="Search"
						/>
					}
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
							<VisibilityPicker
								visibility="public"
								onVisibilityChange={noop}
								density="cozy"
							/>
						}
					/>

					<PostCard
						post={post1}
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
								post={post1}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>

					<PostCard
						post={post2}
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
							<QuotedPost
								post={post1}
								avatar={<UserAvatar author={rin} density="compact" />}
							/>
						}
						actions={
							<PostActionBar
								post={post2}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>

					<PostCard
						post={post3}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={mio}
								label="5h"
								visibility="public"
								avatar={<UserAvatar author={mio} density="cozy" />}
							/>
						}
						media={<PostMedia images={post3Images} density="cozy" />}
						actions={
							<PostActionBar
								post={post3}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
								density="cozy"
							/>
						}
					/>

					<PostCard
						post={post4}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={jun}
								label="7h"
								visibility="circle"
								avatar={<UserAvatar author={jun} density="cozy" />}
							/>
						}
						actions={
							<PostActionBar
								post={post4}
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
								{trends.map((trend, index) => (
									<TrendItem
										key={trend.id}
										rank={index + 1}
										trend={trend}
										onTrendPress={noop}
									/>
								))}
							</>
						}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						density="cozy"
						rows={
							<>
								<SuggestedUserRow
									author={kai}
									reason="Followed by rin"
									avatar={<UserAvatar author={kai} density="compact" />}
									follow={
										<FollowButton
											following={false}
											onFollowToggle={noop}
											density="compact"
										/>
									}
								/>
								<SuggestedUserRow
									author={mio}
									reason="Posts about design systems"
									avatar={<UserAvatar author={mio} density="compact" />}
									follow={
										<FollowButton
											following={false}
											onFollowToggle={noop}
											density="compact"
										/>
									}
								/>
								<SuggestedUserRow
									author={jun}
									reason="New to your circle"
									avatar={<UserAvatar author={jun} density="compact" />}
									follow={
										<FollowButton
											following={true}
											onFollowToggle={noop}
											density="compact"
										/>
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
