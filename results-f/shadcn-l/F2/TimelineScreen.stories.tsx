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

const viewer: AuthorModel = {
	id: "u-viewer",
	displayName: "Nao Kimura",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/150?img=15",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/150?img=1",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/150?img=2",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?img=3",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=4",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Rebuilt the timeline layout this morning and the two-column grid finally holds up at every breakpoint.",
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
	body: "This matches what we saw last sprint. Sharing with the team channel.",
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
	body: "Two shots from the studio session yesterday.",
	createdAt: "45m",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: does anyone still run the nightly export by hand?",
	createdAt: "20m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{
		url: "https://images.example.com/studio-wide.jpg",
		alt: "Wide view of the studio with the lighting rig set up",
	},
	{
		url: "https://images.example.com/studio-desk.jpg",
		alt: "Close-up of the mixing desk during the session",
	},
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9210, category: "Trending" },
	{ id: "t-3", label: "#TypeScript", postCount: 5340 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: mio, reason: "Followed by rin", following: false },
	{ author: kai, reason: "Followed by jun", following: true },
	{ author: jun, reason: "New to your circle", following: false },
];

const noop = () => {};

function TimelineScreen() {
	return (
		<AppShell
			density="cozy"
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} />}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed="for-you" onFeedChange={noop} />
					<PostComposer
						viewer={viewer}
						draft=""
						visibility="public"
						onDraftChange={noop}
						onSubmitPress={noop}
						visibilityPicker={
							<VisibilityPicker visibility="public" onVisibilityChange={noop} />
						}
					/>
					<PostCard
						post={postOne}
						authorLine={
							<PostAuthorLine
								author={postOne.author}
								label={postOne.createdAt}
								visibility={postOne.visibility}
								avatar={<UserAvatar author={postOne.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={postOne}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postTwo}
						authorLine={
							<PostAuthorLine
								author={postTwo.author}
								label={postTwo.createdAt}
								visibility={postTwo.visibility}
								avatar={<UserAvatar author={postTwo.author} />}
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
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postThree}
						authorLine={
							<PostAuthorLine
								author={postThree.author}
								label={postThree.createdAt}
								visibility={postThree.visibility}
								avatar={<UserAvatar author={postThree.author} />}
							/>
						}
						media={<PostMedia images={postThreeImages} />}
						actions={
							<PostActionBar
								post={postThree}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postFour}
						authorLine={
							<PostAuthorLine
								author={postFour.author}
								label={postFour.createdAt}
								visibility={postFour.visibility}
								avatar={<UserAvatar author={postFour.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={postFour}
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
	);
}

const meta: Meta = {
	title: "Screens/TimelineScreen",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => <TimelineScreen />,
};
