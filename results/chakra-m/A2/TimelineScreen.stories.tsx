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
	displayName: "Aya Kurose",
	handle: "aya",
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
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=59",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline renderer today. Scroll jank is finally gone on low-end phones.",
	createdAt: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part everyone underestimates — the win was in the measurement, not the patch.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from this morning's walk before the studio opened.",
	createdAt: "45m",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 148,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the circle: the migration window moves to Thursday night.",
	createdAt: "20m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/seed/timeline-a/640/640", alt: "Empty street at sunrise" },
	{ url: "https://picsum.photos/seed/timeline-b/640/640", alt: "Coffee cup on a studio bench" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TypeScript", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9120, category: "Frontend" },
	{ id: "t-3", label: "#DesignSystems", postCount: 4380 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by kai", following: false },
	{ author: mio, reason: "Followed by rin and 3 others", following: true },
	{ author: jun, reason: "New to your circle", following: false },
];

function TimelineScreen() {
	return (
		<AppShell
			density="cozy"
			header={
				<TimelineHeader
					viewer={viewer}
					search={
						<SearchField
							value=""
							placeholder="Search posts and people"
							density="cozy"
							onQueryChange={noop}
						/>
					}
					notifications={<NotificationBell unreadCount={5} tone="quiet" onBellPress={noop} />}
					onViewerPress={noop}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed="for-you" density="cozy" onFeedChange={noop} />
					<PostComposer
						viewer={viewer}
						draft=""
						visibility="public"
						visibilityPicker={
							<VisibilityPicker visibility="public" density="cozy" onVisibilityChange={noop} />
						}
						onDraftChange={noop}
						onSubmitPress={noop}
						submitLabel="Post"
					/>
					<PostCard
						post={postOne}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={postOne.author}
								label={postOne.createdAt}
								avatar={<UserAvatar author={postOne.author} density="cozy" />}
								visibility={postOne.visibility}
							/>
						}
						actions={
							<PostActionBar
								post={postOne}
								density="cozy"
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postTwo}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={postTwo.author}
								label={postTwo.createdAt}
								avatar={<UserAvatar author={postTwo.author} density="cozy" />}
								visibility={postTwo.visibility}
							/>
						}
						quoted={
							<QuotedPost
								post={postOne}
								avatar={<UserAvatar author={postOne.author} density="compact" />}
							/>
						}
						actions={
							<PostActionBar
								post={postTwo}
								density="cozy"
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postThree}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={postThree.author}
								label={postThree.createdAt}
								avatar={<UserAvatar author={postThree.author} density="cozy" />}
								visibility={postThree.visibility}
							/>
						}
						media={<PostMedia images={postThreeImages} density="cozy" />}
						actions={
							<PostActionBar
								post={postThree}
								density="cozy"
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postFour}
						density="cozy"
						authorLine={
							<PostAuthorLine
								author={postFour.author}
								label={postFour.createdAt}
								avatar={<UserAvatar author={postFour.author} density="cozy" />}
								visibility={postFour.visibility}
							/>
						}
						actions={
							<PostActionBar
								post={postFour}
								density="cozy"
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
						density="cozy"
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
						density="cozy"
						rows={
							<>
								{suggestions.map((suggestion) => (
									<SuggestedUserRow
										key={suggestion.author.id}
										author={suggestion.author}
										reason={suggestion.reason}
										avatar={<UserAvatar author={suggestion.author} density="cozy" />}
										follow={
											<FollowButton
												following={suggestion.following}
												density="cozy"
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
