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
import type { AuthorModel, TrendModel } from "~/models";

const viewer: AuthorModel = {
	id: "u-viewer",
	displayName: "Aoi Kurosawa",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/96?img=12",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/96?img=5",
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/96?img=8",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/96?img=24",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/96?img=33",
};

const trends: TrendModel[] = [
	{
		id: "t-1",
		category: "Technology",
		label: "TypeScript 6",
		postCount: 18400,
	},
	{
		id: "t-2",
		category: "Design",
		label: "Design Tokens",
		postCount: 9120,
	},
	{
		id: "t-3",
		category: "Trending in Japan",
		label: "花見",
		postCount: 42300,
	},
];

const suggestedUsers: AuthorModel[] = [
	{
		id: "u-hana",
		displayName: "Hana Kobayashi",
		handle: "hana",
		avatarUrl: "https://i.pravatar.cc/96?img=45",
	},
	{
		id: "u-sora",
		displayName: "Sora Nakamura",
		handle: "sora",
		avatarUrl: "https://i.pravatar.cc/96?img=52",
	},
	{
		id: "u-yuki",
		displayName: "Yuki Tanaka",
		handle: "yuki",
		avatarUrl: "https://i.pravatar.cc/96?img=60",
	},
];

const noop = () => {};

const meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Timeline: Story = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					user={viewer}
					searchValue=""
					onSearchChange={noop}
					notificationCount={3}
					onNotificationClick={noop}
				/>
			}
			sidebar={
				<>
					<TrendPanel title="Trends for you">
						{trends.map((trend) => (
							<TrendItem key={trend.id} trend={trend} onSelect={noop} />
						))}
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						{suggestedUsers.map((user) => (
							<SuggestedUserRow
								key={user.id}
								user={user}
								action={<FollowButton following={false} onToggle={noop} />}
							/>
						))}
					</SuggestedUserPanel>
				</>
			}
		>
			<FeedTabs value="for-you" onChange={noop} />

			<PostComposer
				author={viewer}
				value=""
				onChange={noop}
				visibility="public"
				onVisibilityChange={noop}
				onSubmit={noop}
			/>

			<PostCard visibility="public">
				<PostAuthorLine author={rin} timestamp="2h" />
				<PostBody text="Shipped the new registry pipeline today. It reads the host's types straight from source, so the component list finally stays honest." />
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
				<PostBody text="This matches what we saw last sprint. Reading the types beats maintaining a hand-written manifest." />
				<QuotedPost
					author={rin}
					text="Shipped the new registry pipeline today. It reads the host's types straight from source, so the component list finally stays honest."
					timestamp="2h"
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
				<PostAuthorLine author={mio} timestamp="45m" />
				<PostBody text="Two shots from this morning's walk before the rain came in." />
				<PostMedia
					images={[
						{
							id: "m-1",
							src: "https://picsum.photos/id/1015/800/600",
							alt: "A river running through a pine forest",
						},
						{
							id: "m-2",
							src: "https://picsum.photos/id/1016/800/600",
							alt: "Fog settling over a mountain ridge",
						},
					]}
				/>
				<PostActionBar
					replyCount={7}
					repostCount={21}
					likeCount={188}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard visibility="circle">
				<PostAuthorLine author={jun} timestamp="20m" />
				<PostBody text="Small circle question: does anyone still run the nightly build locally, or are we all just trusting CI now?" />
				<PostActionBar
					replyCount={2}
					repostCount={1}
					likeCount={23}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>
		</AppShell>
	),
};
