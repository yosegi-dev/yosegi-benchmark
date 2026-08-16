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

const noop = () => {};

const viewer = {
	id: "u_aoi",
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
	verified: false,
};

const rin = {
	id: "u_rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=47",
	verified: true,
};

const kai = {
	id: "u_kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=33",
	verified: false,
};

const mio = {
	id: "u_mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=26",
	verified: false,
};

const jun = {
	id: "u_jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=59",
	verified: false,
};

const post1 = {
	id: "p_1",
	author: rin,
	body: "Shipped the new type registry today. Turns out the hardest part was never the parsing — it was deciding what not to expose.",
	createdAt: "2026-08-13T07:40:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const post2 = {
	id: "p_2",
	author: kai,
	body: "This matches what we found last quarter. A smaller surface made the migration boring, which is exactly what you want.",
	createdAt: "2026-08-13T08:05:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 62,
	likedByViewer: false,
};

const post3 = {
	id: "p_3",
	author: mio,
	body: "Two frames from this morning's walk along the canal. The light only does this for about ten minutes.",
	createdAt: "2026-08-13T08:52:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 21,
	likeCount: 184,
	likedByViewer: false,
};

const post4 = {
	id: "p_4",
	author: jun,
	body: "Small circle question: does anyone still run their own mail server, or have we all quietly given up?",
	createdAt: "2026-08-13T09:18:00.000Z",
	visibility: "circle" as const,
	replyCount: 3,
	repostCount: 1,
	likeCount: 27,
	likedByViewer: false,
};

const post3Images = [
	{
		url: "https://picsum.photos/seed/canal-a/640/480",
		alt: "Morning light on a canal, seen from a low bridge",
	},
	{
		url: "https://picsum.photos/seed/canal-b/640/480",
		alt: "A row of moored boats with mist above the water",
	},
];

const trends = [
	{
		id: "t_1",
		label: "#TypeRegistry",
		postCount: 18400,
		category: "Technology",
	},
	{
		id: "t_2",
		label: "Canal Walk",
		postCount: 6120,
		category: "Photography",
	},
	{
		id: "t_3",
		label: "#SelfHosting",
		postCount: 3480,
		category: "Trending in your area",
	},
];

const suggestions = [
	{ author: rin, reason: "Followed by kai" },
	{ author: mio, reason: "Followed by rin and 3 others" },
	{ author: jun, reason: "New to your timeline" },
];

const meta: Meta = {
	title: "Screens/TimelineScreen",
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} />}
					notifications={<NotificationBell unreadCount={5} onBellPress={noop} />}
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
						visibilityPicker={
							<VisibilityPicker visibility="public" onVisibilityChange={noop} />
						}
					/>
					<PostCard
						post={post1}
						authorLine={
							<PostAuthorLine
								author={post1.author}
								label="2h"
								visibility={post1.visibility}
								avatar={<UserAvatar author={post1.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={post1}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={post2}
						authorLine={
							<PostAuthorLine
								author={post2.author}
								label="1h"
								visibility={post2.visibility}
								avatar={<UserAvatar author={post2.author} />}
							/>
						}
						quoted={
							<QuotedPost
								post={post1}
								avatar={<UserAvatar author={post1.author} density="compact" />}
							/>
						}
						actions={
							<PostActionBar
								post={post2}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={post3}
						authorLine={
							<PostAuthorLine
								author={post3.author}
								label="34m"
								visibility={post3.visibility}
								avatar={<UserAvatar author={post3.author} />}
							/>
						}
						media={<PostMedia images={post3Images} />}
						actions={
							<PostActionBar
								post={post3}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={post4}
						authorLine={
							<PostAuthorLine
								author={post4.author}
								label="8m"
								visibility={post4.visibility}
								avatar={<UserAvatar author={post4.author} />}
							/>
						}
						actions={
							<PostActionBar
								post={post4}
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
										avatar={
											<UserAvatar author={suggestion.author} density="compact" />
										}
										follow={
											<FollowButton following={false} onFollowToggle={noop} />
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
