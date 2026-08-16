import type { Meta, StoryObj } from "@storybook/react";

import { AppShell } from "~/components/app-shell";
import { FeedTabs } from "~/components/feed-tabs";
import { FollowButton } from "~/components/follow-button";
import { PostActionBar } from "~/components/post-action-bar";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostBody } from "~/components/post-body";
import { PostCard } from "~/components/post-card";
import { PostComposer } from "~/components/post-composer";
import { PostMedia } from "~/components/post-media";
import { QuotedPost } from "~/components/quoted-post";
import { SuggestedUserPanel } from "~/components/suggested-user-panel";
import { SuggestedUserRow } from "~/components/suggested-user-row";
import { TimelineHeader } from "~/components/timeline-header";
import { TrendItem } from "~/components/trend-item";
import { TrendPanel } from "~/components/trend-panel";

const noop = () => {};

const viewer = {
	id: "u-viewer",
	displayName: "You",
	handle: "you",
	avatarUrl: "https://i.pravatar.cc/150?img=68",
} as const;

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/150?img=5",
} as const;

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/150?img=12",
} as const;

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?img=32",
} as const;

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=45",
} as const;

const quotedPost = {
	id: "post-1",
	author: rin,
	text: "Shipped the new timeline today. It finally feels fast on a cold start.",
	createdAt: "2026-08-15T09:00:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	liked: true,
} as const;

const trendKeywords = {
	id: "trend-1",
	label: "Design systems",
	category: "Technology",
	postCount: 12400,
} as const;

const trendRelease = {
	id: "trend-2",
	label: "Mantine v9",
	category: "Frontend",
	postCount: 8300,
} as const;

const trendConf = {
	id: "trend-3",
	label: "TokyoConf",
	category: "Events",
	postCount: 5100,
} as const;

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					user={viewer}
					searchValue=""
					onSearchChange={noop}
					searchPlaceholder="Search"
					notificationCount={3}
					onNotificationClick={noop}
				/>
			}
			sidebar={
				<>
					<TrendPanel title="Trends for you">
						<TrendItem trend={trendKeywords} rank={1} onClick={noop} />
						<TrendItem trend={trendRelease} rank={2} onClick={noop} />
						<TrendItem trend={trendConf} rank={3} onClick={noop} />
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						<SuggestedUserRow user={rin} reason="Follows you">
							<FollowButton following={false} onToggle={noop} />
						</SuggestedUserRow>
						<SuggestedUserRow user={mio} reason="Popular in Design">
							<FollowButton following={false} onToggle={noop} />
						</SuggestedUserRow>
						<SuggestedUserRow user={jun} reason="Based on your likes">
							<FollowButton following={true} onToggle={noop} />
						</SuggestedUserRow>
					</SuggestedUserPanel>
				</>
			}
		>
			<FeedTabs value="for-you" onChange={noop} />

			<PostComposer
				value=""
				onChange={noop}
				visibility="public"
				onVisibilityChange={noop}
				onSubmit={noop}
				placeholder="What's happening?"
				author={viewer}
			/>

			<PostCard visibility="public">
				<PostAuthorLine author={rin} time="2h" />
				<PostBody text="Shipped the new timeline today. It finally feels fast on a cold start." />
				<PostActionBar
					replyCount={12}
					repostCount={48}
					likeCount={310}
					liked={true}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard visibility="followers">
				<PostAuthorLine author={kai} time="1h" />
				<PostBody text="This is the part everyone underestimates. Cold start is the whole product." />
				<QuotedPost post={quotedPost} />
				<PostActionBar
					replyCount={4}
					repostCount={9}
					likeCount={57}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard visibility="public">
				<PostAuthorLine author={mio} time="45m" />
				<PostBody text="Two shots from the studio wall this morning." />
				<PostMedia
					images={[
						{
							id: "media-1",
							src: "https://picsum.photos/id/1015/800/600",
							alt: "Studio wall, morning light",
						},
						{
							id: "media-2",
							src: "https://picsum.photos/id/1025/800/600",
							alt: "Close-up of the pinned prints",
						},
					]}
				/>
				<PostActionBar
					replyCount={7}
					repostCount={21}
					likeCount={143}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard visibility="circle">
				<PostAuthorLine author={jun} time="20m" />
				<PostBody text="Small circle only: the migration plan is ready for review tomorrow." />
				<PostActionBar
					replyCount={2}
					repostCount={1}
					likeCount={18}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>
		</AppShell>
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
