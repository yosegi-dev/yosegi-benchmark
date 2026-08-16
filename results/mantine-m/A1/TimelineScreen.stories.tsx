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

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					avatarUrl="https://i.pravatar.cc/80?img=12"
					displayName="Rin Amano"
					handle="rin"
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
							name="#TypeScript"
							postCount={18200}
							onClick={noop}
						/>
						<TrendItem
							category="Design"
							name="#DesignSystems"
							postCount={9400}
							onClick={noop}
						/>
						<TrendItem
							category="Music"
							name="#NowPlaying"
							postCount={3100}
							onClick={noop}
						/>
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						<SuggestedUserRow
							displayName="Aoi Nakamura"
							handle="aoi"
							avatarUrl="https://i.pravatar.cc/80?img=31"
							bio="Frontend engineer"
						>
							<FollowButton following={false} onToggle={noop} />
						</SuggestedUserRow>
						<SuggestedUserRow
							displayName="Haru Kobayashi"
							handle="haru"
							avatarUrl="https://i.pravatar.cc/80?img=32"
							bio="Product designer"
						>
							<FollowButton following={false} onToggle={noop} />
						</SuggestedUserRow>
						<SuggestedUserRow
							displayName="Sora Tanaka"
							handle="sora"
							avatarUrl="https://i.pravatar.cc/80?img=33"
							bio="Writes about type systems"
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
					handle="rin"
					avatarUrl="https://i.pravatar.cc/80?img=1"
					time="2h"
				/>
				<PostBody text="Shipped the new timeline layout today. Two columns, and the sidebar finally stops fighting the main feed." />
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
					handle="kai"
					avatarUrl="https://i.pravatar.cc/80?img=2"
					time="1h"
				/>
				<PostBody text="This matches what we measured last quarter — the sidebar was the whole problem." />
				<QuotedPost
					displayName="Rin Amano"
					handle="rin"
					avatarUrl="https://i.pravatar.cc/80?img=1"
					time="2h"
					text="Shipped the new timeline layout today. Two columns, and the sidebar finally stops fighting the main feed."
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
					handle="mio"
					avatarUrl="https://i.pravatar.cc/80?img=3"
					time="34m"
				/>
				<PostBody text="Two shots from this morning's walk before the rain came in." />
				<PostMedia
					images={[
						{
							src: "https://images.example.com/timeline/morning-street.jpg",
							alt: "A quiet street at dawn",
						},
						{
							src: "https://images.example.com/timeline/river-bridge.jpg",
							alt: "A bridge over a river under grey clouds",
						},
					]}
				/>
				<PostActionBar
					replyCount={7}
					repostCount={21}
					likeCount={188}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard visibility="circle">
				<PostAuthorLine
					displayName="Jun Ito"
					handle="jun"
					avatarUrl="https://i.pravatar.cc/80?img=4"
					time="12m"
				/>
				<PostBody text="Keeping this one to the circle: the migration plan is done, review starts Monday." />
				<PostActionBar
					replyCount={2}
					repostCount={1}
					likeCount={26}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>
		</AppShell>
	);
}

const meta: Meta<typeof TimelineScreen> = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
