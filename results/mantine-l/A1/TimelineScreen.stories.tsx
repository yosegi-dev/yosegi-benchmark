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
	id: "u-viewer",
	name: "Aoi Nakano",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/150?img=15",
	verified: false,
};

const rin = {
	id: "u-rin",
	name: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/150?img=32",
	verified: true,
};

const kai = {
	id: "u-kai",
	name: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/150?img=12",
	verified: false,
};

const mio = {
	id: "u-mio",
	name: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?img=45",
	verified: false,
};

const jun = {
	id: "u-jun",
	name: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=52",
	verified: false,
};

const rinPost = {
	id: "p-1",
	author: rin,
	text: "Shipped the new timeline rendering path today. Scroll feels twice as smooth on older phones.",
	createdAt: "2026-08-13T09:20:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	liked: true,
};

const trendingNow = {
	id: "t-1",
	topic: "#TypeScript",
	category: "Technology",
	postCount: 18400,
	rank: 1,
};

const trendingDesign = {
	id: "t-2",
	topic: "Design systems",
	category: "Design",
	postCount: 9120,
	rank: 2,
};

const trendingCoffee = {
	id: "t-3",
	topic: "#MorningCoffee",
	category: "Lifestyle",
	postCount: 5230,
	rank: 3,
};

const mioMedia = [
	{
		id: "m-1",
		src: "https://picsum.photos/id/1015/800/600",
		alt: "A river running through a canyon at sunrise",
		width: 800,
		height: 600,
	},
	{
		id: "m-2",
		src: "https://picsum.photos/id/1025/800/600",
		alt: "A pug wrapped in a blanket",
		width: 800,
		height: 600,
	},
];

const noop = () => {};

function TimelineScreen() {
	return (
		<AppShell
			header={<TimelineHeader user={viewer} notificationCount={3} />}
			sidebar={
				<>
					<TrendPanel>
						<TrendItem trend={trendingNow} />
						<TrendItem trend={trendingDesign} />
						<TrendItem trend={trendingCoffee} />
					</TrendPanel>
					<SuggestedUserPanel>
						<SuggestedUserRow user={rin}>
							<FollowButton following={false} onToggle={noop} />
						</SuggestedUserRow>
						<SuggestedUserRow user={mio}>
							<FollowButton following={false} onToggle={noop} />
						</SuggestedUserRow>
						<SuggestedUserRow user={jun}>
							<FollowButton following onToggle={noop} />
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
			/>

			<PostCard>
				<PostAuthorLine author={rin} timestamp="2h" />
				<PostBody text={rinPost.text} />
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

			<PostCard>
				<PostAuthorLine author={kai} timestamp="1h" />
				<PostBody text="This matches what we measured on the mid-tier Android fleet last week." />
				<QuotedPost post={rinPost} />
				<PostActionBar
					replyCount={4}
					repostCount={9}
					likeCount={72}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard>
				<PostAuthorLine author={mio} timestamp="45m" />
				<PostBody text="Two frames from this morning's walk before the fog lifted." />
				<PostMedia images={mioMedia} />
				<PostActionBar
					replyCount={7}
					repostCount={15}
					likeCount={128}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard>
				<PostAuthorLine author={jun} timestamp="20m" />
				<PostBody text="Keeping this one to the circle: the offsite notes are finally written up." />
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
	title: "Screens/Timeline",
	component: TimelineScreen,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
