import type { Meta, StoryObj } from "@storybook/react";

import { AppShell } from "~/components/app-shell";
import { FeedTabs } from "~/components/feed-tabs";
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

const viewer = {
	id: "u-viewer",
	name: "Aoi Kimura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/150?img=15",
};

const rin = {
	id: "u-rin",
	name: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/150?img=1",
};

const kai = {
	id: "u-kai",
	name: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/150?img=12",
};

const mio = {
	id: "u-mio",
	name: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?img=5",
};

const jun = {
	id: "u-jun",
	name: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=8",
};

const trends = [
	{
		id: "t-1",
		category: "Technology",
		topic: "TypeScript 6.0",
		postCount: 18400,
	},
	{
		id: "t-2",
		category: "Design",
		topic: "Design Tokens",
		postCount: 7320,
	},
	{
		id: "t-3",
		category: "Trending in Japan",
		topic: "夏フェス",
		postCount: 42100,
	},
];

const suggested = [
	{
		id: "u-haru",
		name: "Haru Nakamura",
		handle: "haru",
		avatarUrl: "https://i.pravatar.cc/150?img=21",
	},
	{
		id: "u-yui",
		name: "Yui Tanaka",
		handle: "yui",
		avatarUrl: "https://i.pravatar.cc/150?img=32",
	},
	{
		id: "u-sora",
		name: "Sora Fujii",
		handle: "sora",
		avatarUrl: "https://i.pravatar.cc/150?img=47",
	},
];

const noop = () => {};

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					user={viewer}
					notificationCount={3}
					searchValue=""
					onSearchChange={noop}
				/>
			}
			sidebar={
				<>
					<TrendPanel title="Trends for you">
						{trends.map((trend) => (
							<TrendItem key={trend.id} trend={trend} />
						))}
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						{suggested.map((user) => (
							<SuggestedUserRow
								key={user.id}
								user={user}
								following={false}
								onToggleFollow={noop}
							/>
						))}
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
			/>

			<PostCard visibility="public">
				<PostAuthorLine author={rin} timestamp="2h" />
				<PostBody text="Shipped the new timeline layout today. Two columns, no surprises, everything where you expect it." />
				<PostActionBar
					replyCount={12}
					repostCount={48}
					likeCount={310}
					liked
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard visibility="followers">
				<PostAuthorLine author={kai} timestamp="1h" />
				<PostBody text="This is the part everyone skips and then regrets. Good call." />
				<QuotedPost
					author={rin}
					timestamp="2h"
					text="Shipped the new timeline layout today. Two columns, no surprises, everything where you expect it."
				/>
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
				<PostAuthorLine author={mio} timestamp="34m" />
				<PostBody text="Two shots from the studio window this morning. The light lasted about four minutes." />
				<PostMedia
					images={[
						{
							src: "https://picsum.photos/seed/timeline-a/800/600",
							alt: "Morning light across a studio desk",
						},
						{
							src: "https://picsum.photos/seed/timeline-b/800/600",
							alt: "A window frame casting long shadows",
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
				<PostAuthorLine author={jun} timestamp="12m" />
				<PostBody text="Small circle post: the migration is done and nothing broke. Telling you first." />
				<PostActionBar
					replyCount={2}
					repostCount={3}
					likeCount={28}
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
