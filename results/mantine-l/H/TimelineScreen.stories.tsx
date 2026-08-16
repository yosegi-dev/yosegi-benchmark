import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

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
import type { AuthorModel, FeedKind, PostModel, TrendModel, Visibility } from "~/models";

const viewer: AuthorModel = {
	id: "u-viewer",
	displayName: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://placehold.co/96x96/png?text=NK",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://placehold.co/96x96/png?text=RA",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://placehold.co/96x96/png?text=KD",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://placehold.co/96x96/png?text=MS",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://placehold.co/96x96/png?text=JI",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, no surprises, and it finally feels quiet.",
	createdAt: "2026-08-17T07:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part everyone skips: the quiet version is the hard one to build.",
	createdAt: "2026-08-17T06:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from this morning's walk along the river.",
	createdAt: "2026-08-17T05:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle only: I am rewriting the notification pipeline again and I regret nothing.",
	createdAt: "2026-08-17T04:20:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TypeScript", postCount: 18420, category: "Technology" },
	{ id: "t-2", label: "Storybook 10", postCount: 6310, category: "Technology" },
	{ id: "t-3", label: "River walk", postCount: 1240 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{ author: rin, reason: "Followed by @kai" },
	{ author: mio, reason: "Followed by @rin and 12 others" },
	{ author: jun, reason: "New to your topics" },
];

const noop = () => {};

function TimelineScreen() {
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [following, setFollowing] = useState<Record<string, boolean>>({});

	return (
		<AppShell
			density="cozy"
			header={
				<TimelineHeader
					viewer={viewer}
					search={
						<SearchField value="" placeholder="Search Yosegi" onQueryChange={noop} />
					}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
					onViewerPress={noop}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed={activeFeed} onFeedChange={setActiveFeed} />
					<PostComposer
						viewer={viewer}
						draft={draft}
						visibility={visibility}
						visibilityPicker={
							<VisibilityPicker
								visibility={visibility}
								onVisibilityChange={setVisibility}
								density="compact"
							/>
						}
						onDraftChange={setDraft}
						onSubmitPress={noop}
						submitLabel="Post"
					/>
					<PostCard
						post={postRin}
						authorLine={
							<PostAuthorLine
								author={rin}
								label="2h"
								avatar={<UserAvatar author={rin} />}
								visibility={postRin.visibility}
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
								avatar={<UserAvatar author={kai} />}
								visibility={postKai.visibility}
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
								avatar={<UserAvatar author={mio} />}
								visibility={postMio.visibility}
							/>
						}
						media={
							<PostMedia
								images={[
									{
										url: "https://placehold.co/640x480/png?text=River+1",
										alt: "Morning light on the river",
									},
									{
										url: "https://placehold.co/640x480/png?text=River+2",
										alt: "A bridge seen from the east bank",
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
								avatar={<UserAvatar author={jun} />}
								visibility={postJun.visibility}
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
						heading="Trending now"
						items={
							<>
								{trends.map((trend, index) => (
									<TrendItem key={trend.id} trend={trend} rank={index + 1} onTrendPress={noop} />
								))}
							</>
						}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={
							<>
								{suggestions.map(({ author, reason }) => (
									<SuggestedUserRow
										key={author.id}
										author={author}
										avatar={<UserAvatar author={author} density="compact" />}
										follow={
											<FollowButton
												following={following[author.id] ?? false}
												onFollowToggle={(next) =>
													setFollowing((current) => ({ ...current, [author.id]: next }))
												}
												density="compact"
											/>
										}
										reason={reason}
									/>
								))}
							</>
						}
					/>
				</>
			}
		/>
	);
}

const meta = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
