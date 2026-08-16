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
	name: "Aoi Mori",
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
	avatarUrl: "https://i.pravatar.cc/150?img=32",
};

const jun = {
	id: "u-jun",
	name: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=54",
};

const sidebar = (
	<>
		<TrendPanel title="Trends for you">
			<TrendItem
				rank={1}
				category="Technology"
				name="#TypeScript"
				postCount={12400}
			/>
			<TrendItem
				rank={2}
				category="Design"
				name="#DesignSystems"
				postCount={8300}
			/>
			<TrendItem rank={3} category="Frontend" name="#Storybook" postCount={4100} />
		</TrendPanel>
		<SuggestedUserPanel title="Who to follow">
			<SuggestedUserRow
				user={{
					id: "u-sora",
					name: "Sora Kimura",
					handle: "sora",
					avatarUrl: "https://i.pravatar.cc/150?img=5",
				}}
				reason="Followed by Rin Amano"
			>
				<FollowButton following={false} onToggle={() => {}} />
			</SuggestedUserRow>
			<SuggestedUserRow
				user={{
					id: "u-nao",
					name: "Nao Fujii",
					handle: "nao",
					avatarUrl: "https://i.pravatar.cc/150?img=20",
				}}
				reason="Based on your activity"
			>
				<FollowButton following={false} onToggle={() => {}} />
			</SuggestedUserRow>
			<SuggestedUserRow
				user={{
					id: "u-haru",
					name: "Haru Nakano",
					handle: "haru",
					avatarUrl: "https://i.pravatar.cc/150?img=41",
				}}
				reason="New to the timeline"
			>
				<FollowButton following={true} onToggle={() => {}} />
			</SuggestedUserRow>
		</SuggestedUserPanel>
	</>
);

const TimelineScreen = () => (
	<AppShell
		header={
			<TimelineHeader
				user={viewer}
				searchValue=""
				onSearchChange={() => {}}
				notificationCount={3}
				onNotificationClick={() => {}}
			/>
		}
		sidebar={sidebar}
	>
		<FeedTabs value="for-you" onChange={() => {}} />

		<PostComposer
			author={viewer}
			value=""
			onChange={() => {}}
			visibility="public"
			onVisibilityChange={() => {}}
			onSubmit={() => {}}
			placeholder="What's happening?"
		/>

		<PostCard visibility="public">
			<PostAuthorLine author={rin} timestamp="2h" />
			<PostBody text="Shipped the new timeline layout today. Two columns, one sidebar, and a composer that finally feels fast." />
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
			<PostAuthorLine author={kai} timestamp="1h" />
			<PostBody text="This is exactly the direction I was hoping for. The composer alone saves me a dozen clicks a day." />
			<QuotedPost
				author={rin}
				text="Shipped the new timeline layout today. Two columns, one sidebar, and a composer that finally feels fast."
				timestamp="2h"
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
			<PostAuthorLine author={mio} timestamp="45m" />
			<PostBody text="Two shots from this morning's walk. The light was doing something unusual on the way to the station." />
			<PostMedia
				images={[
					{
						src: "https://picsum.photos/id/1015/800/600",
						alt: "A river running between pine covered hills",
					},
					{
						src: "https://picsum.photos/id/1025/800/600",
						alt: "A close portrait of a dog resting on a wooden floor",
					},
				]}
			/>
			<PostActionBar
				replyCount={7}
				repostCount={21}
				likeCount={168}
				liked={false}
				onReply={() => {}}
				onRepost={() => {}}
				onLike={() => {}}
			/>
		</PostCard>

		<PostCard visibility="circle">
			<PostAuthorLine author={jun} timestamp="20m" />
			<PostBody text="Keeping this one small: the migration is done, nothing broke, and I am going to sleep for a very long time." />
			<PostActionBar
				replyCount={2}
				repostCount={3}
				likeCount={41}
				liked={false}
				onReply={() => {}}
				onRepost={() => {}}
				onLike={() => {}}
			/>
		</PostCard>
	</AppShell>
);

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
