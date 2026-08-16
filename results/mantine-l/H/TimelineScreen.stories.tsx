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
	displayName: "Haru Kimura",
	handle: "haru",
	avatarUrl: "https://placehold.co/96x96/png?text=HK",
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
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://placehold.co/96x96/png?text=JI",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline today. Two columns, no surprises, and the sidebar finally stops fighting the main feed.",
	createdAt: "2026-08-14T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the layout I kept trying to describe in review. Seeing it running makes the argument for me.",
	createdAt: "2026-08-14T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 57,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio wall this morning. Same paint, completely different light an hour apart.",
	createdAt: "2026-08-14T07:05:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 122,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet one for the close friends: the rewrite is done, and I slept eight hours for the first time in a month.",
	createdAt: "2026-08-14T05:30:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 38,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TimelineRedesign", postCount: 8420, category: "Technology" },
	{ id: "t-2", label: "Studio light", postCount: 3110, category: "Photography" },
	{ id: "t-3", label: "#TypeSafeUI", postCount: 1265 },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{ author: rin, reason: "Followed by @kai" },
	{ author: mio, reason: "Followed by @rin and 12 others" },
	{ author: jun, reason: "New to your area" },
];

const mediaImages = [
	{ url: "https://placehold.co/800x600/png?text=Studio+wall+at+dawn", alt: "Studio wall at dawn" },
	{ url: "https://placehold.co/800x600/png?text=Studio+wall+at+noon", alt: "The same wall at noon" },
];

const meta: Meta = {
	title: "Screens/Timeline",
	parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const Timeline: Story = {
	render: () => (
		<AppShell
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
								author={postOne.author}
								label="2h"
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
								label="3h"
								avatar={<UserAvatar author={postTwo.author} />}
								visibility={postTwo.visibility}
							/>
						}
						quoted={
							<QuotedPost post={postOne} avatar={<UserAvatar author={postOne.author} />} />
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
								label="5h"
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
								label="7h"
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
				</>
			}
			sidebar={
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
								{suggestions.map(({ author, reason }) => (
									<SuggestedUserRow
										key={author.id}
										author={author}
										avatar={<UserAvatar author={author} />}
										follow={<FollowButton following={false} onFollowToggle={noop} />}
										reason={reason}
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
