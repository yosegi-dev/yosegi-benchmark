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

const meta: Meta = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

export const Timeline: StoryObj = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					viewer={{
						id: "viewer",
						displayName: "Rin Amano",
						handle: "rin",
						avatarUrl: "https://i.pravatar.cc/80?img=1",
					}}
					searchValue=""
					searchPlaceholder="Search"
					onSearchChange={() => {}}
					notificationCount={3}
					onNotificationClick={() => {}}
				/>
			}
			sidebar={
				<>
					<TrendPanel title="Trends for you">
						<TrendItem
							rank={1}
							category="Technology"
							topic="#Storybook"
							postCount={12800}
							onClick={() => {}}
						/>
						<TrendItem
							rank={2}
							category="Design"
							topic="#DesignSystems"
							postCount={9400}
							onClick={() => {}}
						/>
						<TrendItem
							rank={3}
							category="Programming"
							topic="#TypeScript"
							postCount={4300}
							onClick={() => {}}
						/>
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						<SuggestedUserRow
							user={{
								id: "u-nao",
								displayName: "Nao Kubo",
								handle: "nao",
								avatarUrl: "https://i.pravatar.cc/80?img=5",
							}}
							bio="Frontend engineer. Building design systems."
						>
							<FollowButton following={false} onToggle={() => {}} />
						</SuggestedUserRow>
						<SuggestedUserRow
							user={{
								id: "u-hana",
								displayName: "Hana Mori",
								handle: "hana",
								avatarUrl: "https://i.pravatar.cc/80?img=9",
							}}
							bio="Illustrator, occasional photographer."
						>
							<FollowButton following={false} onToggle={() => {}} />
						</SuggestedUserRow>
						<SuggestedUserRow
							user={{
								id: "u-sora",
								displayName: "Sora Nishi",
								handle: "sora",
								avatarUrl: "https://i.pravatar.cc/80?img=12",
							}}
							bio="Writing about accessibility on the web."
						>
							<FollowButton following={true} onToggle={() => {}} />
						</SuggestedUserRow>
					</SuggestedUserPanel>
				</>
			}
		>
			<FeedTabs value="for-you" onValueChange={() => {}} />

			<PostComposer
				value=""
				placeholder="What's happening?"
				visibility="public"
				onValueChange={() => {}}
				onVisibilityChange={() => {}}
				onSubmit={() => {}}
			/>

			<PostCard id="post-1" visibility="public">
				<PostAuthorLine
					author={{
						id: "u-rin",
						displayName: "Rin Amano",
						handle: "rin",
						avatarUrl: "https://i.pravatar.cc/80?img=1",
					}}
					timestamp="2h"
				/>
				<PostBody text="Shipped the first pass of the timeline today. Four posts, one sidebar, and a composer that finally remembers its visibility setting." />
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

			<PostCard id="post-2" visibility="followers">
				<PostAuthorLine
					author={{
						id: "u-kai",
						displayName: "Kai Doi",
						handle: "kai",
						avatarUrl: "https://i.pravatar.cc/80?img=3",
					}}
					timestamp="1h"
				/>
				<PostBody text="This is the part everyone underestimates. Visibility is a product decision, not a checkbox." />
				<QuotedPost
					author={{
						id: "u-rin",
						displayName: "Rin Amano",
						handle: "rin",
						avatarUrl: "https://i.pravatar.cc/80?img=1",
					}}
					text="Shipped the first pass of the timeline today. Four posts, one sidebar, and a composer that finally remembers its visibility setting."
					timestamp="2h"
				/>
				<PostActionBar
					replyCount={5}
					repostCount={9}
					likeCount={64}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>

			<PostCard id="post-3" visibility="public">
				<PostAuthorLine
					author={{
						id: "u-mio",
						displayName: "Mio Sato",
						handle: "mio",
						avatarUrl: "https://i.pravatar.cc/80?img=7",
					}}
					timestamp="42m"
				/>
				<PostBody text="Two frames from this morning's walk. The light was doing something strange over the river." />
				<PostMedia
					images={[
						{
							src: "https://picsum.photos/seed/river-a/800/600",
							alt: "Morning light over a river",
						},
						{
							src: "https://picsum.photos/seed/river-b/800/600",
							alt: "A footbridge in the fog",
						},
					]}
				/>
				<PostActionBar
					replyCount={3}
					repostCount={21}
					likeCount={187}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>

			<PostCard id="post-4" visibility="circle">
				<PostAuthorLine
					author={{
						id: "u-jun",
						displayName: "Jun Ito",
						handle: "jun",
						avatarUrl: "https://i.pravatar.cc/80?img=15",
					}}
					timestamp="10m"
				/>
				<PostBody text="Small circle only: I am rewriting the whole notification pipeline tonight and I have no regrets yet." />
				<PostActionBar
					replyCount={1}
					repostCount={0}
					likeCount={7}
					liked={false}
					onReply={() => {}}
					onRepost={() => {}}
					onLike={() => {}}
				/>
			</PostCard>
		</AppShell>
	),
};
