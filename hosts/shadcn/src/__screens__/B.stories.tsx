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
import type { AuthorModel, PostModel, TrendModel } from "~/models";

const noop = () => {};

const viewer: AuthorModel = {
	id: "u-nao",
	displayName: "Nao Kimura",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new type-driven registry today. The whole thing is derived from the source, so it can never drift from what the components actually accept.",
	createdAt: "2026-08-13T09:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underestimate. Deriving the contract beats writing it down twice.",
	createdAt: "2026-08-13T08:35:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 62,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from this morning's walk before the rain came in.",
	createdAt: "2026-08-13T07:50:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the small circle: the rewrite landed and nothing broke. Sleeping well tonight.",
	createdAt: "2026-08-13T06:20:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 23,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TypeScript", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 6120, category: "Frontend" },
	{ id: "t-3", label: "#DesignSystems", postCount: 3980 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by kai", following: false },
	{ author: mio, reason: "Followed by rin and 3 others", following: true },
	{ author: jun, reason: "New to your timeline", following: false },
];

function TimelineScreen() {
	return (
		<AppShell
			density="cozy"
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={5} onBellPress={noop} tone="quiet" />}
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
						media={
							<PostMedia
								images={[
									{
										url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
										alt: "Sunlight through a stand of tall trees",
									},
									{
										url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
										alt: "Low cloud rolling over a green hillside",
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
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trends for you"
						items={trends.map((trend, index) => (
							<TrendItem
								key={trend.id}
								rank={index + 1}
								trend={trend}
								onTrendPress={noop}
							/>
						))}
					/>

					<SuggestedUserPanel
						heading="Who to follow"
						rows={suggestions.map((suggestion) => (
							<SuggestedUserRow
								key={suggestion.author.id}
								author={suggestion.author}
								reason={suggestion.reason}
								avatar={<UserAvatar author={suggestion.author} />}
								follow={
									<FollowButton
										following={suggestion.following}
										onFollowToggle={noop}
									/>
								}
							/>
						))}
					/>
				</>
			}
		/>
	);
}

const meta = {
	title: "Screens/B",
	component: TimelineScreen,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
