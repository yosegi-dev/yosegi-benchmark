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
import type { AuthorModel, PostModel, TrendModel } from "~/models";

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
	avatarUrl: "https://i.pravatar.cc/96?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/96?img=32",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/96?img=48",
};

const viewer: AuthorModel = {
	id: "u-viewer",
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/96?img=20",
};

const post1: PostModel = {
	id: "p-1",
	author: rin,
	text: "Shipped the new timeline renderer today. Scroll jank on long threads is finally gone.",
	visibility: "public",
	createdAt: "2h",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	liked: true,
};

const trends: TrendModel[] = [
	{ id: "t-1", category: "Technology", label: "#TypeScript", postCount: 18400 },
	{ id: "t-2", category: "Design", label: "#DesignSystems", postCount: 9120 },
	{ id: "t-3", category: "Trending in Japan", label: "#Storybook", postCount: 4380 },
];

const suggested: AuthorModel[] = [
	{
		id: "u-nao",
		displayName: "Nao Kimura",
		handle: "nao",
		avatarUrl: "https://i.pravatar.cc/96?img=15",
	},
	{
		id: "u-haru",
		displayName: "Haru Tanaka",
		handle: "haru",
		avatarUrl: "https://i.pravatar.cc/96?img=25",
	},
	{
		id: "u-sora",
		displayName: "Sora Fujii",
		handle: "sora",
		avatarUrl: "https://i.pravatar.cc/96?img=36",
	},
];

const meta = {
	title: "Screens/TimelineScreen",
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
						{suggested.map((user) => (
							<SuggestedUserRow key={user.id} user={user}>
								<FollowButton following={false} onClick={() => {}} />
							</SuggestedUserRow>
						))}
					</SuggestedUserPanel>
				</>
			}
		>
			<FeedTabs value="for-you" onChange={() => {}} />

			<PostComposer
				value=""
				onChange={() => {}}
				visibility="public"
				onVisibilityChange={() => {}}
				onSubmit={() => {}}
			/>

			<PostCard visibility="public">
				<PostAuthorLine author={rin} timestamp="2h" />
				<PostBody text={post1.text} />
				<PostActionBar
					replyCount={12}
					repostCount={48}
					likeCount={310}
					liked={true}
				/>
			</PostCard>

			<PostCard visibility="followers">
				<PostAuthorLine author={kai} timestamp="1h" />
				<PostBody text="This matches what we saw in profiling last week. Worth reading the whole thread." />
				<QuotedPost post={post1} />
				<PostActionBar
					replyCount={4}
					repostCount={9}
					likeCount={57}
					liked={false}
				/>
			</PostCard>

			<PostCard visibility="public">
				<PostAuthorLine author={mio} timestamp="35m" />
				<PostBody text="Two shots from the studio wall we repainted this morning." />
				<PostMedia
					images={[
						{
							src: "https://picsum.photos/seed/timeline-a/640/420",
							alt: "Freshly painted studio wall in warm beige",
						},
						{
							src: "https://picsum.photos/seed/timeline-b/640/420",
							alt: "Paint cans and rollers on a drop cloth",
						},
					]}
				/>
				<PostActionBar
					replyCount={7}
					repostCount={15}
					likeCount={128}
					liked={false}
				/>
			</PostCard>

			<PostCard visibility="circle">
				<PostAuthorLine author={jun} timestamp="12m" />
				<PostBody text="Small circle only: the offsite is moving to the second week of March." />
				<PostActionBar
					replyCount={2}
					repostCount={0}
					likeCount={19}
					liked={false}
				/>
			</PostCard>
		</AppShell>
	),
};
