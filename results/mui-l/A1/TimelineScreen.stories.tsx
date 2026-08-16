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

const TimelineScreen = () => (
	<AppShell
		header={
			<TimelineHeader
				avatarSrc="https://i.pravatar.cc/80?img=15"
				displayName="Rin Amano"
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
						rank={1}
						category="Technology"
						label="#TypeScript"
						postCount={12800}
						onClick={noop}
					/>
					<TrendItem
						rank={2}
						category="Design"
						label="#DesignSystems"
						postCount={8400}
						onClick={noop}
					/>
					<TrendItem
						rank={3}
						category="Trending in Japan"
						label="#Storybook"
						postCount={3120}
						onClick={noop}
					/>
				</TrendPanel>
				<SuggestedUserPanel title="Who to follow">
					<SuggestedUserRow
						avatarSrc="https://i.pravatar.cc/80?img=31"
						displayName="Aoi Nakamura"
						handle="@aoi"
						bio="Frontend engineer. Building design systems."
					>
						<FollowButton following={false} onToggle={noop} />
					</SuggestedUserRow>
					<SuggestedUserRow
						avatarSrc="https://i.pravatar.cc/80?img=32"
						displayName="Haru Kimura"
						handle="@haru"
						bio="Product designer, tea drinker."
					>
						<FollowButton following={false} onToggle={noop} />
					</SuggestedUserRow>
					<SuggestedUserRow
						avatarSrc="https://i.pravatar.cc/80?img=33"
						displayName="Sora Tanaka"
						handle="@sora"
						bio="Writes about accessibility."
					>
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
			avatarSrc="https://i.pravatar.cc/80?img=15"
			placeholder="What's happening?"
		/>

		<PostCard visibility="public">
			<PostAuthorLine
				avatarSrc="https://i.pravatar.cc/80?img=5"
				displayName="Rin Amano"
				handle="@rin"
				timestamp="2h"
			/>
			<PostBody text="Spent the morning pruning props off our shared components. Half of them existed because one screen needed a one-off spacing tweak." />
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
			<PostAuthorLine
				avatarSrc="https://i.pravatar.cc/80?img=12"
				displayName="Kai Doi"
				handle="@kai"
				timestamp="1h"
			/>
			<PostBody text="This is the whole argument for a component registry in one paragraph." />
			<QuotedPost
				avatarSrc="https://i.pravatar.cc/80?img=5"
				displayName="Rin Amano"
				handle="@rin"
				timestamp="2h"
				text="Spent the morning pruning props off our shared components. Half of them existed because one screen needed a one-off spacing tweak."
			/>
			<PostActionBar
				replyCount={4}
				repostCount={19}
				likeCount={86}
				liked={false}
				onReply={noop}
				onRepost={noop}
				onLike={noop}
			/>
		</PostCard>

		<PostCard visibility="public">
			<PostAuthorLine
				avatarSrc="https://i.pravatar.cc/80?img=20"
				displayName="Mio Sato"
				handle="@mio"
				timestamp="45m"
			/>
			<PostBody text="Two shots from the studio wall today. Same palette, very different mood." />
			<PostMedia
				images={[
					{
						src: "https://picsum.photos/id/1015/800/600",
						alt: "Studio wall in morning light",
					},
					{
						src: "https://picsum.photos/id/1025/800/600",
						alt: "The same wall after sunset",
					},
				]}
			/>
			<PostActionBar
				replyCount={7}
				repostCount={33}
				likeCount={204}
				liked={false}
				onReply={noop}
				onRepost={noop}
				onLike={noop}
			/>
		</PostCard>

		<PostCard visibility="circle">
			<PostAuthorLine
				avatarSrc="https://i.pravatar.cc/80?img=8"
				displayName="Jun Ito"
				handle="@jun"
				timestamp="12m"
			/>
			<PostBody text="Small circle post: the migration is going better than I told everyone it would." />
			<PostActionBar
				replyCount={2}
				repostCount={3}
				likeCount={21}
				liked={false}
				onReply={noop}
				onRepost={noop}
				onLike={noop}
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
