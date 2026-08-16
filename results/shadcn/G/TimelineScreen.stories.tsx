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
	displayName: "Aoi Tanaka",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/128?u=aoi",
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?u=rin",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?u=kai",
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?u=mio",
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?u=jun",
};

// `visibility` is pinned with `as const` so each literal stays the union member
// `PostModel.visibility` expects instead of widening to `string`.
const postRin = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout today. Two columns, no surprises, and it finally survives a narrow desktop window.",
	createdAt: "2026-08-17T09:12:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai = {
	id: "p-2",
	author: kai,
	body: "This is the part everyone skips: the layout is the easy half. Keeping it readable at every density is the work.",
	createdAt: "2026-08-17T08:40:00.000Z",
	visibility: "followers" as const,
	replyCount: 5,
	repostCount: 9,
	likeCount: 64,
	likedByViewer: false,
};

const postMio = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the studio opened.",
	createdAt: "2026-08-17T07:55:00.000Z",
	visibility: "public" as const,
	replyCount: 8,
	repostCount: 21,
	likeCount: 137,
	likedByViewer: false,
};

const postJun = {
	id: "p-4",
	author: jun,
	body: "Small circle post: the review queue is finally empty. Taking the rest of the afternoon off.",
	createdAt: "2026-08-17T06:30:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const mioImages = [
	{
		url: "https://images.example.com/mio/harbour-morning.jpg",
		alt: "Empty harbour walkway just after sunrise",
	},
	{
		url: "https://images.example.com/mio/studio-window.jpg",
		alt: "Studio window with the blinds half open",
	},
];

const trends = [
	{ id: "t-1", label: "#DesignSystems", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "#TypeScript", postCount: 8320, category: "Technology" },
	{ id: "t-3", label: "Morning walks", postCount: 2140 },
];

const suggestions = [
	{
		author: {
			id: "u-sora",
			displayName: "Sora Nishi",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/128?u=sora",
			verified: true,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-hana",
			displayName: "Hana Kurose",
			handle: "hana",
			avatarUrl: "https://i.pravatar.cc/128?u=hana",
		},
		reason: "Followed by kai and 4 others",
	},
	{
		author: {
			id: "u-taku",
			displayName: "Taku Morita",
			handle: "taku",
			avatarUrl: "https://i.pravatar.cc/128?u=taku",
		},
		reason: "New to the timeline",
	},
];

const meta = {
	title: "Screens/Timeline",
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
					visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
				/>

				{/* PostCard renders `post.body` itself and exposes no body slot,
				    so the spec's PostBody node is covered by the card. */}
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
			</>
		),
		sidebar: (
			<>
				<TrendPanel
					heading="Trends for you"
					items={
						<>
							{trends.map((trend, index) => (
								<TrendItem key={trend.id} rank={index + 1} trend={trend} onTrendPress={noop} />
							))}
						</>
					}
				/>

				<SuggestedUserPanel
					heading="Who to follow"
					rows={
						<>
							{suggestions.map((suggestion) => (
								<SuggestedUserRow
									key={suggestion.author.id}
									author={suggestion.author}
									reason={suggestion.reason}
									avatar={<UserAvatar author={suggestion.author} density="compact" />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
								/>
							))}
						</>
					}
				/>
			</>
		),
	},
};
