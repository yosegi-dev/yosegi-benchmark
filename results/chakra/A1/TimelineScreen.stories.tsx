import type { Meta, StoryObj } from "@storybook/react";

import { AppShell } from "~/components/app-shell";
import { FeedTabs } from "~/components/feed-tabs";
import { FollowButton } from "~/components/follow-button";
import { NotificationBell } from "~/components/notification-bell";
import { PostActionBar } from "~/components/post-action-bar";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostBody } from "~/components/post-body";
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

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/96?img=1",
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/96?img=2",
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/96?img=3",
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/96?img=4",
};

const viewer = {
	id: "u-viewer",
	displayName: "You",
	handle: "you",
	avatarUrl: "https://i.pravatar.cc/96?img=5",
};

const quotedPost = {
	id: "p-1",
	author: rin,
	text: "Shipped the new indexer this morning. It reads the whole registry in one pass now.",
	visibility: "public" as const,
	createdAt: "2026-08-15T09:12:00.000Z",
	relativeTime: "2h",
};

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
		viewport: { defaultViewport: "desktop" },
	},
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					avatar={<UserAvatar name={viewer.displayName} src={viewer.avatarUrl} size="sm" />}
					search={<SearchField value="" placeholder="Search" onChange={() => {}} />}
					notifications={<NotificationBell count={3} onClick={() => {}} />}
				/>
			}
			sidebar={
				<>
					<TrendPanel title="Trends for you">
						<TrendItem
							trend={{
								id: "t-1",
								category: "Technology",
								label: "#TypeScript",
								postCount: 12400,
							}}
						/>
						<TrendItem
							trend={{
								id: "t-2",
								category: "Design",
								label: "#DesignSystems",
								postCount: 8210,
							}}
						/>
						<TrendItem
							trend={{
								id: "t-3",
								category: "Trending in Japan",
								label: "#Storybook",
								postCount: 3450,
							}}
						/>
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						<SuggestedUserRow
							user={rin}
							action={<FollowButton following={false} onToggle={() => {}} />}
						/>
						<SuggestedUserRow
							user={mio}
							action={<FollowButton following={true} onToggle={() => {}} />}
						/>
						<SuggestedUserRow
							user={jun}
							action={<FollowButton following={false} onToggle={() => {}} />}
						/>
					</SuggestedUserPanel>
				</>
			}
		>
			<FeedTabs value="for-you" onChange={() => {}} />
			<PostComposer
				value=""
				placeholder="What's happening?"
				visibility="public"
				avatar={<UserAvatar name={viewer.displayName} src={viewer.avatarUrl} size="sm" />}
				onChange={() => {}}
				onVisibilityChange={() => {}}
				onSubmit={() => {}}
			/>
			<PostCard visibility="public">
				<PostAuthorLine author={rin} relativeTime="2h" />
				<PostBody text="Shipped the new indexer this morning. It reads the whole registry in one pass now." />
				<PostActionBar
					replyCount={12}
					repostCount={48}
					likeCount={310}
					liked={true}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>
			<PostCard visibility="followers">
				<PostAuthorLine author={kai} relativeTime="1h" />
				<PostBody text="One pass is the part that matters. The old one walked it three times." />
				<QuotedPost post={quotedPost} />
				<PostActionBar
					replyCount={4}
					repostCount={9}
					likeCount={57}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>
			<PostCard visibility="public">
				<PostAuthorLine author={mio} relativeTime="35m" />
				<PostBody text="Two shots from the studio wall today. Same paint, different light." />
				<PostMedia
					images={[
						{
							src: "https://picsum.photos/seed/mio-a/640/480",
							alt: "A studio wall in morning light",
						},
						{
							src: "https://picsum.photos/seed/mio-b/640/480",
							alt: "The same wall in the afternoon",
						},
					]}
				/>
				<PostActionBar
					replyCount={7}
					repostCount={21}
					likeCount={188}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>
			<PostCard visibility="circle">
				<PostAuthorLine author={jun} relativeTime="12m" />
				<PostBody text="Keeping this one to the circle: the migration lands Friday, not Wednesday." />
				<PostActionBar
					replyCount={2}
					repostCount={0}
					likeCount={16}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>
		</AppShell>
	),
};
