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
	displayName: "Nao Kishi",
	handle: "nao",
	avatarUrl: "https://cdn.example.com/avatars/nao.png",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://cdn.example.com/avatars/rin.png",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://cdn.example.com/avatars/kai.png",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://cdn.example.com/avatars/mio.png",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://cdn.example.com/avatars/jun.png",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout this morning. Two columns, one scroll, nothing else to think about.",
	createdAt: "2026-08-13T08:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the version I kept asking for. Reading it on a wide screen finally feels calm.",
	createdAt: "2026-08-13T07:35:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 72,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from the walk back home. The light lasted about four minutes.",
	createdAt: "2026-08-13T06:50:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 164,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: does anyone still keep a paper notebook for review notes?",
	createdAt: "2026-08-13T06:05:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TimelineRedesign", postCount: 8420, category: "Design" },
	{ id: "t-2", label: "Storybook 9", postCount: 3110, category: "Technology" },
	{ id: "t-3", label: "#SundayPhoto", postCount: 1290 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{ author: rin, reason: "Followed by kai" },
	{ author: mio, reason: "Posts about photography" },
	{ author: jun, reason: "New to your circle" },
];

const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
	args: {
		density: "cozy",
		header: (
			<TimelineHeader
				viewer={viewer}
				onViewerPress={noop}
				search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
				notifications={<NotificationBell unreadCount={5} onBellPress={noop} />}
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
					visibilityPicker={
						<VisibilityPicker visibility="public" onVisibilityChange={noop} />
					}
				/>
				<PostCard
					post={postRin}
					authorLine={
						<PostAuthorLine
							author={postRin.author}
							label="2h"
							visibility={postRin.visibility}
							avatar={<UserAvatar author={postRin.author} />}
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
							label="1h"
							visibility={postKai.visibility}
							avatar={<UserAvatar author={postKai.author} />}
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
							label="45m"
							visibility={postMio.visibility}
							avatar={<UserAvatar author={postMio.author} />}
						/>
					}
					media={
						<PostMedia
							images={[
								{
									url: "https://cdn.example.com/media/mio-golden-hour-1.jpg",
									alt: "A narrow street lit by low orange sunlight",
								},
								{
									url: "https://cdn.example.com/media/mio-golden-hour-2.jpg",
									alt: "The same street a few minutes later, in blue shade",
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
							author={postJun.author}
							label="20m"
							visibility={postJun.visibility}
							avatar={<UserAvatar author={postJun.author} />}
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
					rows={suggestions.map(({ author, reason }) => (
						<SuggestedUserRow
							key={author.id}
							author={author}
							reason={reason}
							avatar={<UserAvatar author={author} density="compact" />}
							follow={<FollowButton following={false} onFollowToggle={noop} />}
						/>
					))}
				/>
			</>
		),
	},
};
