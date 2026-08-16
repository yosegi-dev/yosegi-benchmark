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
	name: "Ren Kudo",
	displayName: "Ren Kudo",
	handle: "ren",
	avatarUrl: "https://i.pravatar.cc/96?img=12",
};

const rin = {
	id: "u-rin",
	name: "Rin Amano",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/96?img=32",
};

const kai = {
	id: "u-kai",
	name: "Kai Doi",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/96?img=54",
};

const mio = {
	id: "u-mio",
	name: "Mio Sato",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/96?img=45",
};

const jun = {
	id: "u-jun",
	name: "Jun Ito",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/96?img=68",
};

const quotedPost = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline renderer today. It finally scrolls at 120fps on a five year old laptop.",
	text: "Shipped the new timeline renderer today. It finally scrolls at 120fps on a five year old laptop.",
	createdAt: "2026-08-17T09:00:00.000Z",
	time: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	liked: true,
};

const postMedia = [
	{
		id: "m-1",
		src: "https://picsum.photos/seed/mio-a/800/600",
		alt: "A rain-soaked crossing at dusk",
		width: 800,
		height: 600,
	},
	{
		id: "m-2",
		src: "https://picsum.photos/seed/mio-b/800/600",
		alt: "A vending machine glowing in an empty alley",
		width: 800,
		height: 600,
	},
];

const trends = [
	{ id: "t-1", name: "#TypeScript", topic: "#TypeScript", category: "Technology", postCount: 18400 },
	{ id: "t-2", name: "#Storybook", topic: "#Storybook", category: "Technology", postCount: 9120 },
	{ id: "t-3", name: "#夏の写真", topic: "#夏の写真", category: "Photography", postCount: 4380 },
];

const suggestedUsers = [
	{
		id: "u-aoi",
		name: "Aoi Nakamura",
		displayName: "Aoi Nakamura",
		handle: "aoi",
		avatarUrl: "https://i.pravatar.cc/96?img=21",
	},
	{
		id: "u-sora",
		name: "Sora Hayashi",
		displayName: "Sora Hayashi",
		handle: "sora",
		avatarUrl: "https://i.pravatar.cc/96?img=8",
	},
	{
		id: "u-nao",
		name: "Nao Kimura",
		displayName: "Nao Kimura",
		handle: "nao",
		avatarUrl: "https://i.pravatar.cc/96?img=60",
	},
];

const noop = () => {};

const header = <TimelineHeader user={viewer} notificationCount={3} searchValue="" onSearchChange={noop} />;

const sidebar = (
	<>
		<TrendPanel title="Trends for you">
			{trends.map((trend) => (
				<TrendItem key={trend.id} trend={trend} />
			))}
		</TrendPanel>
		<SuggestedUserPanel title="Who to follow">
			{suggestedUsers.map((user) => (
				<SuggestedUserRow key={user.id} user={user}>
					<FollowButton following={false} onToggle={noop} />
				</SuggestedUserRow>
			))}
		</SuggestedUserPanel>
	</>
);

const TimelineScreen = () => (
	<AppShell header={header} sidebar={sidebar}>
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
			<PostAuthorLine author={rin} time="2h" />
			<PostBody text="Shipped the new timeline renderer today. It finally scrolls at 120fps on a five year old laptop." />
			<PostActionBar replyCount={12} repostCount={48} likeCount={310} liked onReply={noop} onRepost={noop} onLike={noop} />
		</PostCard>

		<PostCard visibility="followers">
			<PostAuthorLine author={kai} time="1h" />
			<PostBody text="This is the part everyone skips: the renderer is only fast because the data layer stopped lying about what changed." />
			<QuotedPost post={quotedPost} />
			<PostActionBar replyCount={4} repostCount={11} likeCount={73} liked={false} onReply={noop} onRepost={noop} onLike={noop} />
		</PostCard>

		<PostCard visibility="public">
			<PostAuthorLine author={mio} time="45m" />
			<PostBody text="Walked home the long way and the whole city looked like a set piece. Two frames I liked." />
			<PostMedia images={postMedia} />
			<PostActionBar replyCount={9} repostCount={26} likeCount={188} liked={false} onReply={noop} onRepost={noop} onLike={noop} />
		</PostCard>

		<PostCard visibility="circle">
			<PostAuthorLine author={jun} time="20m" />
			<PostBody text="Small circle only: I am rewriting the scheduler again. Third time this quarter. It will be worth it." />
			<PostActionBar replyCount={2} repostCount={3} likeCount={41} liked={false} onReply={noop} onRepost={noop} onLike={noop} />
		</PostCard>
	</AppShell>
);

const meta: Meta = {
	title: "Screens/TimelineScreen",
	parameters: {
		layout: "fullscreen",
		viewport: { defaultViewport: "desktop" },
	},
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => <TimelineScreen />,
};
