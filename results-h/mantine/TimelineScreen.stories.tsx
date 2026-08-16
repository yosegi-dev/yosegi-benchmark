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
	verified: true,
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Rewrote the whole sync layer this morning and the diff is smaller than the bug report. Some days the code just cooperates.",
	createdAt: "2026-08-15T08:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part nobody writes up afterwards: the fix that ends up shorter than the ticket describing it.",
	createdAt: "2026-08-15T07:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Walked the long way to the studio and the light was doing something worth stopping for. Two frames from the detour.",
	createdAt: "2026-08-15T06:05:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 184,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: does anyone still keep a paper notebook for architecture sketches, or has everyone moved on?",
	createdAt: "2026-08-14T22:18:00.000Z",
	visibility: "circle",
	replyCount: 19,
	repostCount: 2,
	likeCount: 41,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{
		id: "t-1",
		label: "#TypeSafety",
		postCount: 18400,
		category: "Technology",
	},
	{ id: "t-2", label: "Design tokens", postCount: 7320, category: "Design" },
	{ id: "t-3", label: "#MorningLight", postCount: 2150 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{ author: rin, reason: "Followed by @kai" },
	{ author: mio, reason: "Followed by @rin and 12 others" },
	{ author: jun, reason: "New to your circle" },
];

const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Timeline: Story = {
	args: {
		density: "cozy",
		header: (
			<TimelineHeader
				viewer={viewer}
				search={
					<SearchField
						value=""
						placeholder="Search Yosegi"
						onQueryChange={noop}
					/>
				}
				notifications={<NotificationBell unreadCount={3} />}
				onViewerPress={noop}
			/>
		),
		main: (
			<>
				<FeedTabs activeFeed="for-you" onFeedChange={noop} />
				<PostComposer
					viewer={viewer}
					draft=""
					visibility="public"
					visibilityPicker={
						<VisibilityPicker visibility="public" onVisibilityChange={noop} />
					}
					onDraftChange={noop}
					onSubmitPress={noop}
					submitLabel="Post"
				/>
				<PostCard
					post={postOne}
					authorLine={
						<PostAuthorLine
							author={rin}
							label="2h"
							avatar={<UserAvatar author={rin} />}
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
							author={kai}
							label="3h"
							avatar={<UserAvatar author={kai} />}
							visibility={postTwo.visibility}
						/>
					}
					quoted={
						<QuotedPost post={postOne} avatar={<UserAvatar author={rin} />} />
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
							author={mio}
							label="5h"
							avatar={<UserAvatar author={mio} />}
							visibility={postThree.visibility}
						/>
					}
					media={
						<PostMedia
							images={[
								{
									url: "https://images.example.com/detour-01.jpg",
									alt: "Low morning sun across an empty crossing",
								},
								{
									url: "https://images.example.com/detour-02.jpg",
									alt: "Shadows of railings stretched over pale concrete",
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
						/>
					}
				/>
				<PostCard
					post={postFour}
					authorLine={
						<PostAuthorLine
							author={jun}
							label="13h"
							avatar={<UserAvatar author={jun} />}
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
			</>
		),
		sidebar: (
			<>
				<TrendPanel
					heading="Trending now"
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
									avatar={<UserAvatar author={suggestion.author} />}
									follow={
										<FollowButton following={false} onFollowToggle={noop} />
									}
									reason={suggestion.reason}
								/>
							))}
						</>
					}
				/>
			</>
		),
	},
};
