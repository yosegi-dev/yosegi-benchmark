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
	id: "u-you",
	displayName: "Aoi Kurata",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=32",
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=54",
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=45",
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=68",
};

const rinPost = {
	id: "p-1",
	author: rin,
	text: "Rewrote the whole layout pass this morning and the timeline finally scrolls at 60fps on a five year old phone. Small win, but it took three days.",
	timestamp: "2h",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	liked: true,
};

const trends = [
	{ id: "t-1", label: "#TypeScript", category: "Technology", postCount: 18400 },
	{ id: "t-2", label: "Design Systems", category: "Design", postCount: 7320 },
	{ id: "t-3", label: "#Storybook", category: "Technology", postCount: 2140 },
];

const suggestions = [
	{
		id: "u-nao",
		displayName: "Nao Fujita",
		handle: "nao",
		avatarUrl: "https://i.pravatar.cc/128?img=5",
	},
	{
		id: "u-sora",
		displayName: "Sora Kimura",
		handle: "sora",
		avatarUrl: "https://i.pravatar.cc/128?img=23",
	},
	{
		id: "u-yui",
		displayName: "Yui Nakano",
		handle: "yui",
		avatarUrl: "https://i.pravatar.cc/128?img=47",
	},
];

function TimelineScreen() {
	return (
		<AppShell
			header={<TimelineHeader viewer={viewer} notificationCount={3} />}
			sidebar={
				<>
					<TrendPanel>
						{trends.map((trend) => (
							<TrendItem key={trend.id} trend={trend} />
						))}
					</TrendPanel>
					<SuggestedUserPanel>
						{suggestions.map((user) => (
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
				<PostBody text={rinPost.text} />
				<PostActionBar
					replyCount={12}
					repostCount={48}
					likeCount={310}
					liked={true}
				/>
			</PostCard>

			<PostCard visibility="followers">
				<PostAuthorLine author={kai} timestamp="1h" />
				<PostBody text="This matches what we measured last quarter. The layout pass was never the bottleneck people assumed it was." />
				<QuotedPost post={rinPost} />
				<PostActionBar
					replyCount={4}
					repostCount={9}
					likeCount={73}
					liked={false}
				/>
			</PostCard>

			<PostCard visibility="public">
				<PostAuthorLine author={mio} timestamp="46m" />
				<PostBody text="Two frames from the component audit. Left is before the spacing tokens landed, right is after." />
				<PostMedia
					images={[
						"https://picsum.photos/id/1015/800/600",
						"https://picsum.photos/id/1025/800/600",
					]}
				/>
				<PostActionBar
					replyCount={7}
					repostCount={21}
					likeCount={142}
					liked={false}
				/>
			</PostCard>

			<PostCard visibility="circle">
				<PostAuthorLine author={jun} timestamp="18m" />
				<PostBody text="Reminder to self: write the migration note before the branch gets merged, not after someone asks about it." />
				<PostActionBar
					replyCount={2}
					repostCount={1}
					likeCount={16}
					liked={false}
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
