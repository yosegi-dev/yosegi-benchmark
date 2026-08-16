import type { Meta, StoryObj } from "@storybook/react";

import { AppShell } from "~/components/app-shell";
import { FeedTabs } from "~/components/feed-tabs";
import { FollowButton } from "~/components/follow-button";
import { NotificationBell } from "~/components/notification-bell";
import { PostActionBar } from "~/components/post-action-bar";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostBody } from "~/components/post-body";
import { PostCard } from "~/components/post-card";
import { PostComposer } from "~/components/post-composer";
import { PostMedia } from "~/components/post-media";
import { QuotedPost } from "~/components/quoted-post";
import { SearchField } from "~/components/search-field";
import { SuggestedUserPanel } from "~/components/suggested-user-panel";
import { SuggestedUserRow } from "~/components/suggested-user-row";
import { TimelineHeader } from "~/components/timeline-header";
import { TrendItem } from "~/components/trend-item";
import { TrendPanel } from "~/components/trend-panel";
import { UserAvatar } from "~/components/user-avatar";

const viewer = {
	id: "u-viewer",
	displayName: "Aoi Kimura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/96?img=15",
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/96?img=1",
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/96?img=12",
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/96?img=5",
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/96?img=8",
};

const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
		viewport: { defaultViewport: "desktop" },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					avatar={<UserAvatar src={viewer.avatarUrl} alt={viewer.displayName} size="md" />}
					search={<SearchField value="" placeholder="Search" onChange={() => {}} />}
					actions={<NotificationBell count={3} onClick={() => {}} />}
				/>
			}
			sidebar={
				<>
					<TrendPanel title="Trends for you">
						<TrendItem
							trend={{
								id: "t-1",
								label: "#FrontendFriday",
								category: "Technology",
								postCount: 12400,
							}}
							onClick={() => {}}
						/>
						<TrendItem
							trend={{
								id: "t-2",
								label: "Design Systems",
								category: "Design",
								postCount: 8210,
							}}
							onClick={() => {}}
						/>
						<TrendItem
							trend={{
								id: "t-3",
								label: "#TypeScript",
								category: "Programming",
								postCount: 5730,
							}}
							onClick={() => {}}
						/>
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						<SuggestedUserRow
							user={{
								id: "u-hana",
								displayName: "Hana Kubo",
								handle: "hana",
								avatarUrl: "https://i.pravatar.cc/96?img=20",
							}}
						>
							<FollowButton following={false} onToggle={() => {}} />
						</SuggestedUserRow>
						<SuggestedUserRow
							user={{
								id: "u-sora",
								displayName: "Sora Nakai",
								handle: "sora",
								avatarUrl: "https://i.pravatar.cc/96?img=31",
							}}
						>
							<FollowButton following={false} onToggle={() => {}} />
						</SuggestedUserRow>
						<SuggestedUserRow
							user={{
								id: "u-yuki",
								displayName: "Yuki Hara",
								handle: "yuki",
								avatarUrl: "https://i.pravatar.cc/96?img=45",
							}}
						>
							<FollowButton following={true} onToggle={() => {}} />
						</SuggestedUserRow>
					</SuggestedUserPanel>
				</>
			}
		>
			<FeedTabs value="for-you" onChange={() => {}} />
			<PostComposer
				value=""
				visibility="public"
				onChange={() => {}}
				onVisibilityChange={() => {}}
				onSubmit={() => {}}
				placeholder="What's happening?"
			/>
			<PostCard visibility="public">
				<PostAuthorLine author={rin} relativeTime="2h" />
				<PostBody text="Rebuilt the timeline layout today. Two columns, no magic numbers, everything on the spacing scale." />
				<PostActionBar replyCount={12} repostCount={48} likeCount={310} liked={true} />
			</PostCard>
			<PostCard visibility="followers">
				<PostAuthorLine author={kai} relativeTime="3h" />
				<PostBody text="This matches what we landed on last sprint. Sharing for the team." />
				<QuotedPost
					author={rin}
					relativeTime="2h"
					text="Rebuilt the timeline layout today. Two columns, no magic numbers, everything on the spacing scale."
				/>
				<PostActionBar replyCount={4} repostCount={9} likeCount={57} liked={false} />
			</PostCard>
			<PostCard visibility="public">
				<PostAuthorLine author={mio} relativeTime="5h" />
				<PostBody text="Two shots from the component review. Before and after the density pass." />
				<PostMedia
					images={[
						{ src: "https://picsum.photos/seed/timeline-a/640/360", alt: "Before the density pass" },
						{ src: "https://picsum.photos/seed/timeline-b/640/360", alt: "After the density pass" },
					]}
				/>
				<PostActionBar replyCount={7} repostCount={21} likeCount={143} liked={false} />
			</PostCard>
			<PostCard visibility="circle">
				<PostAuthorLine author={jun} relativeTime="8h" />
				<PostBody text="Small circle note: the follower-only posts still need a clearer badge." />
				<PostActionBar replyCount={2} repostCount={1} likeCount={18} liked={false} />
			</PostCard>
		</AppShell>
	),
};
