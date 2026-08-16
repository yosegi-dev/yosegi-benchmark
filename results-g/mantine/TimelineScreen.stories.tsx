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

/**
 * Declared locally so the fixture literals below carry the union type rather
 * than widening to `string`; structurally identical to the host's `Visibility`.
 */
type Visibility = "public" | "followers" | "circle" | "unlisted";

const noop = (): void => {};

const viewer = {
	id: "u-sora",
	displayName: "Sora Kishi",
	handle: "sora",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
	verified: false,
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
	verified: true,
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
	verified: false,
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=45",
	verified: false,
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=51",
	verified: true,
};

const nao = {
	id: "u-nao",
	displayName: "Nao Fujita",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/160?img=5",
	verified: false,
};

const haru = {
	id: "u-haru",
	displayName: "Haru Okada",
	handle: "haru",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
	verified: true,
};

const emi = {
	id: "u-emi",
	displayName: "Emi Nakagawa",
	handle: "emi",
	avatarUrl: "https://i.pravatar.cc/160?img=25",
	verified: false,
};

const postOne = {
	id: "p-1",
	author: rin,
	body: "Spent the morning rewriting the onboarding copy. Turns out most of it was explaining a screen nobody looks at twice.",
	createdAt: "2026-08-13T07:10:00.000Z",
	visibility: "public" as Visibility,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo = {
	id: "p-2",
	author: kai,
	body: "This is the part everyone skips, and then wonders why the funnel drops off in week two.",
	createdAt: "2026-08-13T08:25:00.000Z",
	visibility: "followers" as Visibility,
	replyCount: 3,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postThree = {
	id: "p-3",
	author: mio,
	body: "Two from the walk home. The light only does this for about ten minutes.",
	createdAt: "2026-08-13T08:40:00.000Z",
	visibility: "public" as Visibility,
	replyCount: 5,
	repostCount: 17,
	likeCount: 128,
	likedByViewer: false,
};

const postFour = {
	id: "p-4",
	author: jun,
	body: "Notes from tonight's reading group, mostly so I remember them tomorrow: three chapters, one very long argument about a footnote.",
	createdAt: "2026-08-13T09:05:00.000Z",
	visibility: "circle" as Visibility,
	replyCount: 2,
	repostCount: 4,
	likeCount: 33,
	likedByViewer: false,
};

const postThreeImages = [
	{
		url: "https://picsum.photos/seed/yosegi-walk-1/800/600",
		alt: "A narrow street at dusk, lit from one side",
	},
	{
		url: "https://picsum.photos/seed/yosegi-walk-2/800/600",
		alt: "Low sun behind a row of power lines",
	},
];

const trends = [
	{
		id: "t-1",
		label: "#TypeSafeUI",
		postCount: 18400,
		category: "Technology",
	},
	{
		id: "t-2",
		label: "Design tokens",
		postCount: 9210,
		category: "Design",
	},
	{
		id: "t-3",
		label: "Reading group",
		postCount: 3480,
	},
];

const meta: Meta = {
	title: "Screens/TimelineScreen",
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj;

export const Timeline: Story = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={4} onBellPress={noop} />}
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
						submitLabel="Post"
						visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
					/>
					<PostCard
						post={postOne}
						authorLine={
							<PostAuthorLine
								author={postOne.author}
								label="2h"
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
								label="45m"
								visibility={postTwo.visibility}
								avatar={<UserAvatar author={postTwo.author} />}
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
								label="30m"
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
								label="8m"
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
						heading="Trending now"
						items={
							<>
								<TrendItem rank={1} trend={trends[0]} onTrendPress={noop} />
								<TrendItem rank={2} trend={trends[1]} onTrendPress={noop} />
								<TrendItem rank={3} trend={trends[2]} onTrendPress={noop} />
							</>
						}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={
							<>
								<SuggestedUserRow
									author={nao}
									reason="Followed by @rin"
									avatar={<UserAvatar author={nao} />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
								/>
								<SuggestedUserRow
									author={haru}
									reason="Followed by @kai and 3 others"
									avatar={<UserAvatar author={haru} />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
								/>
								<SuggestedUserRow
									author={emi}
									reason="Based on your recent likes"
									avatar={<UserAvatar author={emi} />}
									follow={<FollowButton following={true} onFollowToggle={noop} />}
								/>
							</>
						}
					/>
				</>
			}
		/>
	),
};
