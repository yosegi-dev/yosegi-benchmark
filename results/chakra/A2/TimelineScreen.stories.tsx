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
	displayName: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
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
	avatarUrl: "https://i.pravatar.cc/128?img=54",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=68",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Rebuilt the release checklist this morning. Ten steps became four, and the two that were only there out of habit are gone for good.",
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
	body: "This matches what we found last quarter. Most checklist steps survive because nobody wants to be the one who deletes them.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 5,
	repostCount: 14,
	likeCount: 96,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from this morning's walk along the river. The fog burned off about a minute apart.",
	createdAt: "38m",
	visibility: "public",
	replyCount: 8,
	repostCount: 21,
	likeCount: 187,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: how do you decide when a prototype is finished enough to show someone?",
	createdAt: "12m",
	visibility: "circle",
	replyCount: 3,
	repostCount: 2,
	likeCount: 27,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#ReleaseNotes", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Morning fog", postCount: 6220, category: "Photography" },
	{ id: "t-3", label: "#DesignReview", postCount: 3150 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-aoi",
			displayName: "Aoi Nakamura",
			handle: "aoi",
			avatarUrl: "https://i.pravatar.cc/128?img=24",
			verified: true,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Hayashi",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/128?img=7",
		},
		reason: "Followed by kai and 3 others",
	},
	{
		author: {
			id: "u-hana",
			displayName: "Hana Okada",
			handle: "hana",
			avatarUrl: "https://i.pravatar.cc/128?img=41",
		},
		reason: "New to your timeline",
	},
];

const mediaImages = [
	{ url: "https://images.example.com/river-fog-01.jpg", alt: "River bank under thick morning fog" },
	{ url: "https://images.example.com/river-fog-02.jpg", alt: "The same river bank after the fog lifted" },
];

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value="" onQueryChange={noop} />}
					notifications={<NotificationBell unreadCount={5} onBellPress={noop} />}
					onViewerPress={noop}
				/>
			}
			main={
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
						post={postOne}
						authorLine={
							<PostAuthorLine
								author={postOne.author}
								label={postOne.createdAt}
								avatar={<UserAvatar author={postOne.author} />}
								visibility={postOne.visibility}
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
								avatar={<UserAvatar author={postTwo.author} />}
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
								avatar={<UserAvatar author={postThree.author} />}
								visibility={postThree.visibility}
							/>
						}
						media={<PostMedia images={mediaImages} />}
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
								avatar={<UserAvatar author={postFour.author} />}
								visibility={postFour.visibility}
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
				</div>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trends for you"
						items={trends.map((trend, index) => (
							<TrendItem key={trend.id} trend={trend} rank={index + 1} onTrendPress={noop} />
						))}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={suggestions.map((suggestion) => (
							<SuggestedUserRow
								key={suggestion.author.id}
								author={suggestion.author}
								avatar={<UserAvatar author={suggestion.author} />}
								follow={<FollowButton following={false} onFollowToggle={noop} />}
								reason={suggestion.reason}
							/>
						))}
					/>
				</>
			}
		/>
	);
}

const meta: Meta<typeof TimelineScreen> = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
