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
	id: "u-aoi",
	displayName: "Aoi Kimura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/128?img=15",
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
	avatarUrl: "https://i.pravatar.cc/128?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=68",
	verified: false,
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new type-driven component registry this morning. Turns out the hardest part was not the parser, it was naming the props so nobody has to guess.",
	createdAt: "2026-08-13T07:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This matches what we saw last quarter. Good naming removes a whole class of review comments.",
	createdAt: "2026-08-13T06:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio rebuild. The light in the afternoon is finally doing what we wanted.",
	createdAt: "2026-08-13T05:15:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the small circle: the migration window moves to next Tuesday. Nothing else changes.",
	createdAt: "2026-08-13T04:02:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 18,
	likedByViewer: false,
};

const trends: TrendModel[] = [
	{ id: "t-1", label: "#TypeSafeUI", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 10", postCount: 9120, category: "Technology" },
	{ id: "t-3", label: "Afternoon light", postCount: 3260 },
];

const suggestions: { author: AuthorModel; reason: string; following: boolean }[] = [
	{
		author: {
			id: "u-nao",
			displayName: "Nao Fujita",
			handle: "nao",
			avatarUrl: "https://i.pravatar.cc/128?img=5",
			verified: true,
		},
		reason: "Followed by @rin",
		following: false,
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Nakai",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/128?img=22",
		},
		reason: "Followed by @kai and 3 others",
		following: false,
	},
	{
		author: {
			id: "u-haru",
			displayName: "Haru Kondo",
			handle: "haru",
			avatarUrl: "https://i.pravatar.cc/128?img=56",
		},
		reason: "Posts about design systems",
		following: true,
	},
];

const noop = () => {};

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
				onViewerPress={noop}
				search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
				notifications={<NotificationBell unreadCount={5} onBellPress={noop} tone="quiet" />}
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
					submitLabel="Post"
					visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
				/>

				<PostCard
					post={postRin}
					authorLine={
						<PostAuthorLine
							author={rin}
							label="2h"
							visibility={postRin.visibility}
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
							visibility={postKai.visibility}
							avatar={<UserAvatar author={kai} />}
						/>
					}
					quoted={<QuotedPost post={postRin} avatar={<UserAvatar author={rin} density="compact" />} />}
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
							visibility={postMio.visibility}
							avatar={<UserAvatar author={mio} />}
						/>
					}
					media={
						<PostMedia
							images={[
								{
									url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
									alt: "Studio corner with afternoon light across the desk",
								},
								{
									url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
									alt: "Empty studio bench beside a tall window",
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
							visibility={postJun.visibility}
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
		),
		sidebar: (
			<>
				<TrendPanel
					heading="Trending now"
					items={
						<>
							{trends.map((trend, index) => (
								<TrendItem key={trend.id} rank={index + 1} trend={trend} onTrendPress={noop} />
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
									follow={<FollowButton following={suggestion.following} onFollowToggle={noop} />}
								/>
							))}
						</>
					}
				/>
			</>
		),
	},
};
