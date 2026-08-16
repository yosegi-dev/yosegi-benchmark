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
	name: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/96?img=15",
};

const rin: AuthorModel = {
	id: "u-rin",
	name: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/96?img=32",
};

const kai: AuthorModel = {
	id: "u-kai",
	name: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/96?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	name: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/96?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	name: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/96?img=68",
};

const trends: TrendModel[] = [
	{ id: "t-1", category: "Technology", name: "#TypeScript", postCount: 18400 },
	{ id: "t-2", category: "Design", name: "#DesignSystems", postCount: 9200 },
	{ id: "t-3", category: "Photography", name: "#GoldenHour", postCount: 4310 },
];

const suggestions: AuthorModel[] = [
	{
		id: "u-aya",
		name: "Aya Morita",
		handle: "aya",
		avatarUrl: "https://i.pravatar.cc/96?img=24",
	},
	{
		id: "u-sho",
		name: "Sho Nakai",
		handle: "sho",
		avatarUrl: "https://i.pravatar.cc/96?img=51",
	},
	{
		id: "u-emi",
		name: "Emi Hara",
		handle: "emi",
		avatarUrl: "https://i.pravatar.cc/96?img=9",
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
			header={<TimelineHeader user={viewer} notificationCount={3} />}
			sidebar={
				<>
					<TrendPanel title="Trends for you">
						{trends.map((trend) => (
							<TrendItem key={trend.id} trend={trend} />
						))}
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						{suggestions.map((user) => (
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
				author={viewer}
				value=""
				onChange={() => {}}
				visibility="public"
				onVisibilityChange={() => {}}
				onSubmit={() => {}}
			/>

			<PostCard visibility="public">
				<PostAuthorLine author={rin} timestamp="2h" />
				<PostBody text="Spent the morning rewriting our registry loader and it finally reads like the thing it actually does." />
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
				<PostBody text="This is the part everyone skips, and it is the part that decides whether the rest holds up." />
				<QuotedPost
					author={rin}
					timestamp="2h"
					text="Spent the morning rewriting our registry loader and it finally reads like the thing it actually does."
				/>
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
				<PostAuthorLine author={mio} timestamp="35m" />
				<PostBody text="Two frames from the harbour walk yesterday. The light lasted about four minutes." />
				<PostMedia
					images={[
						{
							src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
							alt: "Harbour at sunset",
						},
						{
							src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
							alt: "Fog over the water",
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
				<PostAuthorLine author={jun} timestamp="12m" />
				<PostBody text="Small circle question: does anyone still run the nightly job by hand, or has that finally died?" />
				<PostActionBar
					replyCount={2}
					repostCount={1}
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
