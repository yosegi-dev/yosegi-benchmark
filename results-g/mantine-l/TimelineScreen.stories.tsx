import type { Meta, StoryObj } from "@storybook/react";

import { AppShell } from "~/components/app-shell";
import { FeedTabs } from "~/components/feed-tabs";
import { FollowButton } from "~/components/follow-button";
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
import { NotificationBell } from "~/components/notification-bell";

const noop = () => {};

const viewer = {
	id: "u-aoi",
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
	verified: false,
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
	avatarUrl: "https://i.pravatar.cc/160?img=15",
	verified: false,
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=26",
	verified: true,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=33",
	verified: false,
};

// The card reads its text from `post.body` — PostCard exposes no body slot.
const postRin = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline renderer this morning. Scroll jank is finally gone on the long threads.",
	createdAt: "2026-08-13T09:12:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai = {
	id: "p-2",
	author: kai,
	body: "This matches what we measured on the staging build. Worth reading the whole thread.",
	createdAt: "2026-08-13T08:40:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postMio = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio window this week. Same frame, very different light.",
	createdAt: "2026-08-13T07:05:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun = {
	id: "p-4",
	author: jun,
	body: "Small circle question: how are you all handling migrations that need a backfill mid-deploy?",
	createdAt: "2026-08-13T06:20:00.000Z",
	visibility: "circle" as const,
	replyCount: 18,
	repostCount: 3,
	likeCount: 42,
	likedByViewer: false,
};

const mioImages = [
	{
		url: "https://images.example.com/studio-morning.jpg",
		alt: "Studio window in flat morning light",
	},
	{
		url: "https://images.example.com/studio-evening.jpg",
		alt: "The same studio window at sunset",
	},
];

const trends = [
	{
		id: "t-1",
		label: "#TypeScript",
		postCount: 18400,
		category: "Technology",
	},
	{
		id: "t-2",
		label: "Design systems",
		postCount: 9120,
		category: "Design",
	},
	{
		id: "t-3",
		label: "#NightPhotography",
		postCount: 4370,
		category: "Photography",
	},
];

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		header: (
			<TimelineHeader
				viewer={viewer}
				onViewerPress={noop}
				search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
				notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
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
					quoted={<QuotedPost post={postRin} avatar={<UserAvatar author={rin} />} />}
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
							<TrendItem rank={1} trend={trends[0]} onTrendPress={noop} />
							<TrendItem rank={2} trend={trends[1]} onTrendPress={noop} />
							<TrendItem rank={3} trend={trends[2]} onTrendPress={noop} />
						</>
					}
				/>
				<SuggestedUserPanel
					heading="Who to follow"
					rows={
						<>
							<SuggestedUserRow
								author={rin}
								reason="Followed by @kai"
								avatar={<UserAvatar author={rin} />}
								follow={<FollowButton following={false} onFollowToggle={noop} />}
							/>
							<SuggestedUserRow
								author={mio}
								reason="Posts about photography"
								avatar={<UserAvatar author={mio} />}
								follow={<FollowButton following={false} onFollowToggle={noop} />}
							/>
							<SuggestedUserRow
								author={jun}
								reason="Followed by @rin"
								avatar={<UserAvatar author={jun} />}
								follow={<FollowButton following={true} onFollowToggle={noop} />}
							/>
						</>
					}
				/>
			</>
		),
	},
};
