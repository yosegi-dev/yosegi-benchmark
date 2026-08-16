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
	id: "u-viewer",
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/128?img=47",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=25",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=68",
};

// `createdAt` is rendered verbatim by QuotedPost, so it holds an already-formatted
// relative label rather than an ISO timestamp.
const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Rebuilt the timeline on top of the design tokens today. Every card now picks up density from one prop instead of five.",
	createdAt: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part everyone underestimates. Density as a prop sounds small until you delete the third copy of the spacing table.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 5,
	repostCount: 9,
	likeCount: 64,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Shot the studio again now that the light is back. Two frames from this morning.",
	createdAt: "38m",
	visibility: "public",
	replyCount: 3,
	repostCount: 17,
	likeCount: 128,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the circle: the migration is done and nothing broke. Sleeping properly tonight.",
	createdAt: "12m",
	visibility: "circle",
	replyCount: 1,
	repostCount: 2,
	likeCount: 21,
	likedByViewer: false,
};

const mioMedia: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/id/1015/800/800", alt: "Morning light across the studio desk" },
	{ url: "https://picsum.photos/id/1025/800/800", alt: "Close-up of the camera on the windowsill" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignTokens", postCount: 18420, category: "Design" },
	{ id: "t-2", label: "Storybook 9", postCount: 9310, category: "Trending in Tech" },
	{ id: "t-3", label: "#TypeScript", postCount: 42875 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by kai", following: false },
	{ author: mio, reason: "Followed by rin and 12 others", following: false },
	{ author: jun, reason: "Based on your recent likes", following: true },
];

const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value="" onQueryChange={noop} />}
					notifications={<NotificationBell unreadCount={7} tone="reply" onBellPress={noop} />}
					onViewerPress={noop}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed="for-you" onFeedChange={noop} />
					<PostComposer
						viewer={viewer}
						draft=""
						visibility="public"
						visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
						onDraftChange={noop}
						onSubmitPress={noop}
					/>
					<PostCard
						post={postRin}
						authorLine={
							<PostAuthorLine
								author={postRin.author}
								label={postRin.createdAt}
								avatar={<UserAvatar author={postRin.author} />}
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
								author={postKai.author}
								label={postKai.createdAt}
								avatar={<UserAvatar author={postKai.author} />}
								visibility={postKai.visibility}
							/>
						}
						quoted={
							<QuotedPost
								post={postRin}
								avatar={<UserAvatar author={postRin.author} density="compact" />}
							/>
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
								author={postMio.author}
								label={postMio.createdAt}
								avatar={<UserAvatar author={postMio.author} />}
								visibility={postMio.visibility}
							/>
						}
						media={<PostMedia images={mioMedia} />}
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
								author={postJun.author}
								label={postJun.createdAt}
								avatar={<UserAvatar author={postJun.author} />}
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
						heading="Trends for you"
						items={
							<>
								{trends.map((trend, index) => (
									<TrendItem
										key={trend.id}
										trend={trend}
										rank={index + 1}
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
										avatar={<UserAvatar author={suggestion.author} />}
										follow={
											<FollowButton
												following={suggestion.following}
												onFollowToggle={noop}
											/>
										}
									/>
								))}
							</>
						}
					/>
				</>
			}
		/>
	),
};
