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

const viewer: AuthorModel = {
	id: "u-viewer",
	name: "Aoi Kimura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/150?u=aoi",
};

const rin: AuthorModel = {
	id: "u-rin",
	name: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/150?u=rin",
};

const kai: AuthorModel = {
	id: "u-kai",
	name: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/150?u=kai",
};

const mio: AuthorModel = {
	id: "u-mio",
	name: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?u=mio",
};

const jun: AuthorModel = {
	id: "u-jun",
	name: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?u=jun",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "The new build finally boots on the first try. Three weeks of flaky startup, gone.",
	createdAt: "2026-08-13T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	liked: true,
};

const trends: TrendModel[] = [
	{
		id: "t-1",
		name: "#StorybookCSF",
		category: "Frontend",
		postCount: 18400,
	},
	{
		id: "t-2",
		name: "#DesignTokens",
		category: "Design",
		postCount: 9260,
	},
	{
		id: "t-3",
		name: "#TypeScript",
		category: "Technology",
		postCount: 52100,
	},
];

const suggestedUsers: AuthorModel[] = [
	{
		id: "u-hana",
		name: "Hana Kurosawa",
		handle: "hana",
		avatarUrl: "https://i.pravatar.cc/150?u=hana",
	},
	{
		id: "u-sora",
		name: "Sora Nakai",
		handle: "sora",
		avatarUrl: "https://i.pravatar.cc/150?u=sora",
	},
	{
		id: "u-taku",
		name: "Taku Miyamoto",
		handle: "taku",
		avatarUrl: "https://i.pravatar.cc/150?u=taku",
	},
];

const meta = {
	title: "Screens/A1",
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
						{suggestedUsers.map((user) => (
							<SuggestedUserRow
								key={user.id}
								user={user}
								action={<FollowButton following={false} onToggle={() => {}} />}
							/>
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

			<PostCard>
				<PostAuthorLine author={rin} timestamp="2h" visibility="public" />
				<PostBody text={postOne.body} />
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

			<PostCard>
				<PostAuthorLine author={kai} timestamp="1h" visibility="followers" />
				<PostBody text="This matches what I saw on the staging cluster last night. Worth writing up." />
				<QuotedPost post={postOne} />
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

			<PostCard>
				<PostAuthorLine author={mio} timestamp="46m" visibility="public" />
				<PostBody text="Two shots from the studio wall this morning. Same paint, different light." />
				<PostMedia
					images={[
						{
							src: "https://placehold.co/800x600/png",
							alt: "Studio wall in morning light",
						},
						{
							src: "https://placehold.co/800x600/png",
							alt: "Studio wall in afternoon light",
						},
					]}
				/>
				<PostActionBar
					replyCount={7}
					repostCount={21}
					likeCount={143}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>

			<PostCard>
				<PostAuthorLine author={jun} timestamp="12m" visibility="circle" />
				<PostBody text="Small circle question: does anyone still run the nightly export by hand?" />
				<PostActionBar
					replyCount={2}
					repostCount={1}
					likeCount={18}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>
		</AppShell>
	),
};
