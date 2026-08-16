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
	displayName: "Nao Kimura",
	handle: "nao",
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
	verified: true,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=8",
};

const postRin = {
	id: "p-1",
	author: rin,
	body: "Spent the morning rewriting the sync layer and it finally fits in one screen. Small code, small bugs.",
	createdAt: "2026-08-13T08:10:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai = {
	id: "p-2",
	author: kai,
	body: "This is the part everyone skips and then pays for later. Worth reading twice.",
	createdAt: "2026-08-13T07:35:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
};

const postMio = {
	id: "p-3",
	author: mio,
	body: "Two frames from the walk home. The light lasted about four minutes.",
	createdAt: "2026-08-13T06:50:00.000Z",
	visibility: "public" as const,
	replyCount: 8,
	repostCount: 21,
	likeCount: 143,
	likedByViewer: false,
};

const postJun = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the people who were there: the prototype works end to end now.",
	createdAt: "2026-08-13T05:20:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 5,
	likeCount: 33,
	likedByViewer: false,
};

const mioImages = [
	{ url: "https://picsum.photos/seed/mio-a/800/800", alt: "Rooftops under an orange sky" },
	{ url: "https://picsum.photos/seed/mio-b/800/800", alt: "A crossing lit by street lamps" },
];

const trends = [
	{ id: "t-1", label: "#TypeScript", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Design systems", postCount: 9210, category: "Design" },
	{ id: "t-3", label: "#nightphoto", postCount: 4380, category: "Photography" },
];

const suggestions = [
	{ author: rin, reason: "Followed by kai" },
	{ author: mio, reason: "Posts you often like" },
	{ author: jun, reason: "New to your circle" },
];

const columnStyle = {
	display: "flex",
	flexDirection: "column" as const,
	gap: "1rem",
};

const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof AppShell>;

export const Timeline: Story = {
	args: {
		density: "cozy",
		header: (
			<TimelineHeader
				viewer={viewer}
				onViewerPress={noop}
				search={<SearchField value="" onQueryChange={noop} placeholder="Search Yosegi" />}
				notifications={<NotificationBell unreadCount={3} onBellPress={noop} tone="quiet" />}
			/>
		),
		main: (
			<div style={columnStyle}>
				<FeedTabs activeFeed="for-you" onFeedChange={noop} />
				<PostComposer
					viewer={viewer}
					draft=""
					visibility="public"
					onDraftChange={noop}
					onSubmitPress={noop}
					visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
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
							visibility={postMio.visibility}
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
			</div>
		),
		sidebar: (
			<div style={columnStyle}>
				<TrendPanel
					heading="Trends for you"
					items={trends.map((trend, index) => (
						<TrendItem key={trend.id} rank={index + 1} trend={trend} onTrendPress={noop} />
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
							follow={<FollowButton following={false} onFollowToggle={noop} />}
						/>
					))}
				/>
			</div>
		),
	},
};
