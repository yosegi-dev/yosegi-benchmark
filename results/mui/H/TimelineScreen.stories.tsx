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
import type { AuthorModel, Density, PostModel, TrendModel } from "~/models";

const density: Density = "cozy";

const noop = () => {};

const viewer: AuthorModel = {
	id: "u-viewer",
	displayName: "Yui Nakamura",
	handle: "yui",
	avatarUrl: "https://placehold.co/96x96/png?text=Yui",
	verified: false,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://placehold.co/96x96/png?text=Rin",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://placehold.co/96x96/png?text=Kai",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://placehold.co/96x96/png?text=Mio",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://placehold.co/96x96/png?text=Jun",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout this morning. Two columns, and the sidebar finally stops fighting the main feed.",
	createdAt: "2026-08-17T07:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part nobody notices until it is wrong. Nice work.",
	createdAt: "2026-08-17T06:40:00.000Z",
	visibility: "followers",
	replyCount: 3,
	repostCount: 9,
	likeCount: 64,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio wall we repainted over the weekend.",
	createdAt: "2026-08-17T05:15:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 145,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: how are you all handling relative timestamps past a week?",
	createdAt: "2026-08-16T22:05:00.000Z",
	visibility: "circle",
	replyCount: 5,
	repostCount: 2,
	likeCount: 38,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 4820, category: "Technology" },
	{ id: "t-2", label: "#TypeScript", postCount: 12400, category: "Technology" },
	{ id: "t-3", label: "Studio Repaint", postCount: 930 },
];

const suggested: { author: AuthorModel; reason: string; following: boolean }[] = [
	{ author: rin, reason: "Followed by Kai", following: true },
	{ author: mio, reason: "Followed by Rin", following: false },
	{ author: jun, reason: "New to your circle", following: false },
];

const header = (
	<TimelineHeader
		viewer={viewer}
		search={
			<SearchField
				value=""
				placeholder="Search"
				density={density}
				onQueryChange={noop}
			/>
		}
		notifications={<NotificationBell unreadCount={5} tone="quiet" onBellPress={noop} />}
		onViewerPress={noop}
	/>
);

const main = (
	<>
		<FeedTabs activeFeed="for-you" onFeedChange={noop} density={density} />
		<PostComposer
			viewer={viewer}
			draft=""
			visibility="public"
			visibilityPicker={
				<VisibilityPicker
					visibility="public"
					onVisibilityChange={noop}
					density={density}
				/>
			}
			onDraftChange={noop}
			onSubmitPress={noop}
			submitLabel="Post"
		/>
		<PostCard
			post={postOne}
			density={density}
			authorLine={
				<PostAuthorLine
					author={postOne.author}
					label="2h"
					avatar={<UserAvatar author={postOne.author} density={density} />}
					visibility={postOne.visibility}
				/>
			}
			actions={
				<PostActionBar
					post={postOne}
					onReplyPress={noop}
					onRepostPress={noop}
					onLikePress={noop}
					density={density}
				/>
			}
		/>
		<PostCard
			post={postTwo}
			density={density}
			authorLine={
				<PostAuthorLine
					author={postTwo.author}
					label="3h"
					avatar={<UserAvatar author={postTwo.author} density={density} />}
					visibility={postTwo.visibility}
				/>
			}
			quoted={
				<QuotedPost
					post={postOne}
					avatar={<UserAvatar author={postOne.author} density={density} />}
				/>
			}
			actions={
				<PostActionBar
					post={postTwo}
					onReplyPress={noop}
					onRepostPress={noop}
					onLikePress={noop}
					density={density}
				/>
			}
		/>
		<PostCard
			post={postThree}
			density={density}
			authorLine={
				<PostAuthorLine
					author={postThree.author}
					label="5h"
					avatar={<UserAvatar author={postThree.author} density={density} />}
					visibility={postThree.visibility}
				/>
			}
			media={
				<PostMedia
					density={density}
					images={[
						{
							url: "https://placehold.co/640x360/png?text=Studio+1",
							alt: "The studio wall before the repaint",
						},
						{
							url: "https://placehold.co/640x360/png?text=Studio+2",
							alt: "The same wall after the repaint",
						},
					]}
				/>
			}
			actions={
				<PostActionBar
					post={postThree}
					onReplyPress={noop}
					onRepostPress={noop}
					onLikePress={noop}
					density={density}
				/>
			}
		/>
		<PostCard
			post={postFour}
			density={density}
			authorLine={
				<PostAuthorLine
					author={postFour.author}
					label="12h"
					avatar={<UserAvatar author={postFour.author} density={density} />}
					visibility={postFour.visibility}
				/>
			}
			actions={
				<PostActionBar
					post={postFour}
					onReplyPress={noop}
					onRepostPress={noop}
					onLikePress={noop}
					density={density}
				/>
			}
		/>
	</>
);

const sidebar = (
	<>
		<TrendPanel
			heading="Trending now"
			density={density}
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
			density={density}
			rows={
				<>
					{suggested.map((entry) => (
						<SuggestedUserRow
							key={entry.author.id}
							author={entry.author}
							reason={entry.reason}
							avatar={<UserAvatar author={entry.author} density={density} />}
							follow={
								<FollowButton
									following={entry.following}
									onFollowToggle={noop}
									density={density}
								/>
							}
						/>
					))}
				</>
			}
		/>
	</>
);

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		header,
		main,
		sidebar,
		density,
	},
};
