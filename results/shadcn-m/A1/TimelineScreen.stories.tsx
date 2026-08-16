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
	name: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/96?img=15",
};

const rin = {
	id: "u-rin",
	name: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/96?img=32",
};

const kai = {
	id: "u-kai",
	name: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/96?img=12",
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
	avatarUrl: "https://i.pravatar.cc/96?img=68",
};

const meta: Meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj;

export const Timeline: Story = {
	render: () => (
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
			sidebar={
				<>
					<TrendPanel title="Trends for you">
						<TrendItem
							trend={{
								id: "t-1",
								category: "Technology",
								name: "TypeScript 6.0",
								postCount: 18400,
							}}
							onClick={() => {}}
						/>
						<TrendItem
							trend={{
								id: "t-2",
								category: "Design",
								name: "Design Tokens",
								postCount: 9210,
							}}
							onClick={() => {}}
						/>
						<TrendItem
							trend={{
								id: "t-3",
								category: "Trending in Japan",
								name: "梅雨入り",
								postCount: 42300,
							}}
							onClick={() => {}}
						/>
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						<SuggestedUserRow
							user={{
								id: "u-aoi",
								name: "Aoi Nakamura",
								handle: "aoi",
								avatarUrl: "https://i.pravatar.cc/96?img=24",
							}}
						>
							<FollowButton following={false} onClick={() => {}} />
						</SuggestedUserRow>
						<SuggestedUserRow
							user={{
								id: "u-sora",
								name: "Sora Hayashi",
								handle: "sora",
								avatarUrl: "https://i.pravatar.cc/96?img=51",
							}}
						>
							<FollowButton following={false} onClick={() => {}} />
						</SuggestedUserRow>
						<SuggestedUserRow
							user={{
								id: "u-haru",
								name: "Haru Kondo",
								handle: "haru",
								avatarUrl: "https://i.pravatar.cc/96?img=7",
							}}
						>
							<FollowButton following onClick={() => {}} />
						</SuggestedUserRow>
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

			<PostCard visibility="public">
				<PostAuthorLine author={rin} timestamp="2h" />
				<PostBody text="Shipped the new registry pipeline this morning. Turns out most of the work was deleting code we no longer needed." />
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

			<PostCard visibility="followers">
				<PostAuthorLine author={kai} timestamp="1h" />
				<PostBody text="This matches what we saw last quarter — the deletions are the release notes." />
				<QuotedPost
					author={rin}
					timestamp="2h"
					text="Shipped the new registry pipeline this morning. Turns out most of the work was deleting code we no longer needed."
				/>
				<PostActionBar
					replyCount={4}
					repostCount={11}
					likeCount={87}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>

			<PostCard visibility="public">
				<PostAuthorLine author={mio} timestamp="35m" />
				<PostBody text="Two frames from the studio session yesterday. Natural light only, no retouching." />
				<PostMedia
					images={[
						{
							src: "https://images.example.com/timeline/studio-01.jpg",
							alt: "A wooden desk beside a tall window",
						},
						{
							src: "https://images.example.com/timeline/studio-02.jpg",
							alt: "A ceramic mug lit from the side",
						},
					]}
				/>
				<PostActionBar
					replyCount={9}
					repostCount={26}
					likeCount={512}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>

			<PostCard visibility="circle">
				<PostAuthorLine author={jun} timestamp="12m" />
				<PostBody text="Small circle only: the offsite is confirmed for the second week of next month." />
				<PostActionBar
					replyCount={2}
					repostCount={0}
					likeCount={19}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>
		</AppShell>
	),
};
