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
				avatarUrl="https://i.pravatar.cc/80?img=12"
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
						category="Technology"
						label="#TypeScript"
						postCount={12800}
						onClick={noop}
					/>
					<TrendItem
						category="Design"
						label="#DesignSystems"
						postCount={5400}
						onClick={noop}
					/>
					<TrendItem
						category="Sports"
						label="#WorldCup"
						postCount={98200}
						onClick={noop}
					/>
				</TrendPanel>
				<SuggestedUserPanel title="Who to follow">
					<SuggestedUserRow
						displayName="Aoi Kimura"
						handle="@aoi"
						avatarUrl="https://i.pravatar.cc/80?img=21"
						bio="Frontend engineer"
					>
						<FollowButton following={false} onToggle={noop} />
					</SuggestedUserRow>
					<SuggestedUserRow
						displayName="Haru Nakano"
						handle="@haru"
						avatarUrl="https://i.pravatar.cc/80?img=22"
						bio="Illustrator"
					>
						<FollowButton following={false} onToggle={noop} />
					</SuggestedUserRow>
					<SuggestedUserRow
						displayName="Sora Fujii"
						handle="@sora"
						avatarUrl="https://i.pravatar.cc/80?img=23"
						bio="Product designer"
					>
						<FollowButton following={true} onToggle={noop} />
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
			avatarUrl="https://i.pravatar.cc/80?img=12"
			placeholder="What's happening?"
		/>

		<PostCard visibility="public">
			<PostAuthorLine
				displayName="Rin Amano"
				handle="@rin"
				avatarUrl="https://i.pravatar.cc/80?img=12"
				relativeTime="2h"
			/>
			<PostBody text="Shipped the new timeline layout today. Two columns, and it finally feels right on a wide screen." />
			<PostActionBar
				replyCount={12}
				repostCount={48}
				likeCount={310}
				liked={true}
				onReply={noop}
				onRepost={noop}
				onLike={noop}
			/>
		</PostCard>

		<PostCard visibility="followers">
			<PostAuthorLine
				displayName="Kai Doi"
				handle="@kai"
				avatarUrl="https://i.pravatar.cc/80?img=13"
				relativeTime="1h"
			/>
			<PostBody text="This is exactly the direction I was hoping for." />
			<QuotedPost
				displayName="Rin Amano"
				handle="@rin"
				avatarUrl="https://i.pravatar.cc/80?img=12"
				relativeTime="2h"
				text="Shipped the new timeline layout today. Two columns, and it finally feels right on a wide screen."
			/>
			<PostActionBar
				replyCount={4}
				repostCount={9}
				likeCount={57}
				liked={false}
				onReply={noop}
				onRepost={noop}
				onLike={noop}
			/>
		</PostCard>

		<PostCard visibility="public">
			<PostAuthorLine
				displayName="Mio Sato"
				handle="@mio"
				avatarUrl="https://i.pravatar.cc/80?img=14"
				relativeTime="45m"
			/>
			<PostBody text="Two shots from this morning's walk along the river." />
			<PostMedia
				images={[
					{
						src: "https://picsum.photos/id/1015/640/480",
						alt: "River at sunrise",
					},
					{
						src: "https://picsum.photos/id/1016/640/480",
						alt: "Bridge over the river",
					},
				]}
			/>
			<PostActionBar
				replyCount={7}
				repostCount={21}
				likeCount={164}
				liked={false}
				onReply={noop}
				onRepost={noop}
				onLike={noop}
			/>
		</PostCard>

		<PostCard visibility="circle">
			<PostAuthorLine
				displayName="Jun Ito"
				handle="@jun"
				avatarUrl="https://i.pravatar.cc/80?img=15"
				relativeTime="10m"
			/>
			<PostBody text="Quiet note for the circle: the migration is done and nothing broke." />
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

const meta = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof TimelineScreen>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
