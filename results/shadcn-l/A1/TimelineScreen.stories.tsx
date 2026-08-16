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

const noop = () => {};

const viewer = {
	id: "u-viewer",
	name: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/96?img=64",
};

const rin = {
	id: "u-rin",
	name: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/96?img=12",
};

const kai = {
	id: "u-kai",
	name: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/96?img=33",
};

const mio = {
	id: "u-mio",
	name: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/96?img=45",
};

const jun = {
	id: "u-jun",
	name: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/96?img=57",
};

function TimelineScreen() {
	return (
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
						<TrendItem
							category="Technology"
							title="TypeScript 6.0"
							postCount={18200}
							onSelect={noop}
						/>
						<TrendItem
							category="Design"
							title="Design Systems"
							postCount={9400}
							onSelect={noop}
						/>
						<TrendItem
							category="Photography"
							title="Golden Hour"
							postCount={4310}
							onSelect={noop}
						/>
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						<SuggestedUserRow
							user={rin}
							bio="Frontend engineer. Building small tools."
							action={<FollowButton following={false} onToggle={noop} />}
						/>
						<SuggestedUserRow
							user={mio}
							bio="Photographer based in Kyoto."
							action={<FollowButton following={false} onToggle={noop} />}
						/>
						<SuggestedUserRow
							user={jun}
							bio="Writing about type systems."
							action={<FollowButton following={true} onToggle={noop} />}
						/>
					</SuggestedUserPanel>
				</>
			}
		>
			<FeedTabs value="for-you" onValueChange={noop} />

			<PostComposer
				author={viewer}
				value=""
				onChange={noop}
				visibility="public"
				onVisibilityChange={noop}
				onSubmit={noop}
				placeholder="What's happening?"
			/>

			<PostCard>
				<PostAuthorLine author={rin} timestamp="2h" visibility="public" />
				<PostBody text="Spent the morning rewriting the layout engine. Half the code is gone and it renders twice as fast." />
				<PostActionBar
					replyCount={12}
					repostCount={48}
					likeCount={310}
					liked={true}
					reposted={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard>
				<PostAuthorLine author={kai} timestamp="1h" visibility="followers" />
				<PostBody text="This matches what we saw last quarter. Deleting code is still the best optimization." />
				<QuotedPost
					author={rin}
					text="Spent the morning rewriting the layout engine. Half the code is gone and it renders twice as fast."
					timestamp="2h"
				/>
				<PostActionBar
					replyCount={4}
					repostCount={9}
					likeCount={76}
					liked={false}
					reposted={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard>
				<PostAuthorLine author={mio} timestamp="45m" visibility="public" />
				<PostBody text="Two frames from the river walk this morning. The fog burned off right as I got there." />
				<PostMedia
					images={[
						{
							src: "https://picsum.photos/id/1015/800/600",
							alt: "Fog over the river at sunrise",
						},
						{
							src: "https://picsum.photos/id/1016/800/600",
							alt: "A stone bridge in morning light",
						},
					]}
					onImageClick={noop}
				/>
				<PostActionBar
					replyCount={7}
					repostCount={21}
					likeCount={168}
					liked={false}
					reposted={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard>
				<PostAuthorLine author={jun} timestamp="20m" visibility="circle" />
				<PostBody text="Small circle question: has anyone found a good way to describe variance without drawing a diagram?" />
				<PostActionBar
					replyCount={2}
					repostCount={1}
					likeCount={19}
					liked={false}
					reposted={false}
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
