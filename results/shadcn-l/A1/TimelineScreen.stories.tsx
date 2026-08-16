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

const viewer = {
	id: "u0",
	name: "You",
	handle: "@you",
	avatarUrl: "https://i.pravatar.cc/80?img=8",
};

const rin = {
	id: "u1",
	name: "Rin Amano",
	handle: "@rin",
	avatarUrl: "https://i.pravatar.cc/80?img=1",
};

const kai = {
	id: "u2",
	name: "Kai Doi",
	handle: "@kai",
	avatarUrl: "https://i.pravatar.cc/80?img=2",
};

const mio = {
	id: "u3",
	name: "Mio Sato",
	handle: "@mio",
	avatarUrl: "https://i.pravatar.cc/80?img=3",
};

const jun = {
	id: "u4",
	name: "Jun Ito",
	handle: "@jun",
	avatarUrl: "https://i.pravatar.cc/80?img=4",
};

const suggested = [
	{
		id: "u5",
		name: "Aoi Nakamura",
		handle: "@aoi",
		avatarUrl: "https://i.pravatar.cc/80?img=5",
	},
	{
		id: "u6",
		name: "Sora Tanaka",
		handle: "@sora",
		avatarUrl: "https://i.pravatar.cc/80?img=6",
	},
	{
		id: "u7",
		name: "Haru Kimura",
		handle: "@haru",
		avatarUrl: "https://i.pravatar.cc/80?img=7",
	},
];

const trends = [
	{
		id: "t1",
		name: "#DesignSystems",
		category: "Technology",
		postCount: 12400,
	},
	{
		id: "t2",
		name: "#Storybook",
		category: "Frontend",
		postCount: 8300,
	},
	{
		id: "t3",
		name: "#TypeScript",
		category: "Programming",
		postCount: 45100,
	},
];

const photos = [
	{
		src: "https://picsum.photos/seed/mio-a/640/480",
		alt: "A quiet street at dusk",
	},
	{
		src: "https://picsum.photos/seed/mio-b/640/480",
		alt: "Neon signs reflected in a puddle",
	},
];

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
					onSearchChange={() => {}}
					notificationCount={3}
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
							<SuggestedUserRow key={user.id} user={user}>
								<FollowButton following={false} onToggle={() => {}} />
							</SuggestedUserRow>
						))}
					</SuggestedUserPanel>
				</>
			}
		>
			<FeedTabs value="for-you" onValueChange={() => {}} />

			<PostComposer
				value=""
				onChange={() => {}}
				visibility="public"
				onVisibilityChange={() => {}}
				onSubmit={() => {}}
			/>

			<PostCard visibility="public">
				<PostAuthorLine author={rin} timestamp="2h" />
				<PostBody text="Spent the morning rewriting our component registry. Everything that used to need a comment now needs a type instead." />
				<PostActionBar
					replyCount={12}
					repostCount={48}
					likeCount={310}
					liked
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>

			<PostCard visibility="followers">
				<PostAuthorLine author={kai} timestamp="1h" />
				<PostBody text="This is the part people skip and then wonder why the handoff hurts." />
				<QuotedPost
					author={rin}
					text="Spent the morning rewriting our component registry. Everything that used to need a comment now needs a type instead."
					timestamp="2h"
				/>
				<PostActionBar
					replyCount={4}
					repostCount={17}
					likeCount={96}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>

			<PostCard visibility="public">
				<PostAuthorLine author={mio} timestamp="45m" />
				<PostBody text="Two frames from last night's walk. The second one is the one I keep coming back to." />
				<PostMedia images={photos} />
				<PostActionBar
					replyCount={9}
					repostCount={23}
					likeCount={188}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>

			<PostCard visibility="circle">
				<PostAuthorLine author={jun} timestamp="20m" />
				<PostBody text="Small circle post: the migration lands Thursday, and I would like exactly one person to tell me it is fine." />
				<PostActionBar
					replyCount={2}
					repostCount={1}
					likeCount={31}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>
		</AppShell>
	),
};
