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
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
	verified: false,
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
	avatarUrl: "https://i.pravatar.cc/160?img=68",
};

const postRin = {
	id: "p-1",
	author: rin,
	body: "Spent the morning rewriting the onboarding flow from scratch. Three screens became one, and nothing was lost.",
	createdAt: "2026-08-13T07:10:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai = {
	id: "p-2",
	author: kai,
	body: "This is the part people skip: deleting two screens is harder than designing them.",
	createdAt: "2026-08-13T08:05:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 76,
	likedByViewer: false,
};

const postMio = {
	id: "p-3",
	author: mio,
	body: "Two takes on the same palette. The left one ships.",
	createdAt: "2026-08-13T08:25:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the small circle: the migration finished at 3am and nobody noticed. That is the goal.",
	createdAt: "2026-08-13T08:50:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 1,
	likeCount: 33,
	likedByViewer: false,
};

const mioImages = [
	{
		url: "https://picsum.photos/seed/palette-a/640/420",
		alt: "Palette A, warm neutrals with a single accent",
	},
	{
		url: "https://picsum.photos/seed/palette-b/640/420",
		alt: "Palette B, cool neutrals with a green accent",
	},
];

const trends = [
	{ id: "t-1", label: "Design systems", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "TypeScript 6", postCount: 8300, category: "Technology" },
	{ id: "t-3", label: "Kyoto in August", postCount: 4100, category: "Travel" },
];

const suggestions = [
	{ author: rin, reason: "Followed by Kai Doi" },
	{ author: mio, reason: "Followed by Rin Amano" },
	{ author: jun, reason: "New to the timeline" },
];

const columnStyle = {
	display: "flex",
	flexDirection: "column" as const,
	gap: 16,
};

const meta: Meta = {
	title: "Screens/TimelineScreen",
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

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
				<div style={columnStyle}>
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
								label="1h"
								visibility="followers"
								avatar={<UserAvatar author={kai} />}
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
							/>
						}
					/>

					<PostCard
						post={postMio}
						authorLine={
							<PostAuthorLine
								author={mio}
								label="45m"
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
								label="20m"
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
				</div>
			}
			sidebar={
				<div style={columnStyle}>
					<TrendPanel
						heading="Trending now"
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
						rows={
							<>
								{suggestions.map((suggestion) => (
									<SuggestedUserRow
										key={suggestion.author.id}
										author={suggestion.author}
										reason={suggestion.reason}
										avatar={<UserAvatar author={suggestion.author} density="compact" />}
										follow={<FollowButton following={false} onFollowToggle={noop} density="compact" />}
									/>
								))}
							</>
						}
					/>
				</div>
			}
		/>
	),
};
