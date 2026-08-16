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
	avatarUrl: "https://placehold.co/96x96/png?text=A",
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://placehold.co/96x96/png?text=R",
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://placehold.co/96x96/png?text=K",
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://placehold.co/96x96/png?text=M",
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://placehold.co/96x96/png?text=J",
};

const noop = () => {};

function TimelineScreen() {
	return (
		<AppShell
			header={
				<TimelineHeader
					avatar={<UserAvatar user={viewer} size="medium" />}
					search={
						<SearchField
							value=""
							onChange={noop}
							placeholder="Search Yosegi"
						/>
					}
					notifications={<NotificationBell count={3} onClick={noop} />}
				/>
			}
			sidebar={
				<>
					<TrendPanel title="Trends for you">
						<TrendItem
							trend={{
								id: "t-1",
								category: "Technology",
								label: "#TypeScript",
								postCount: 18400,
							}}
						/>
						<TrendItem
							trend={{
								id: "t-2",
								category: "Design",
								label: "#DesignSystems",
								postCount: 9320,
							}}
						/>
						<TrendItem
							trend={{
								id: "t-3",
								category: "Tokyo · Trending",
								label: "#Storybook",
								postCount: 4210,
							}}
						/>
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						<SuggestedUserRow
							user={{
								id: "u-hana",
								displayName: "Hana Kubo",
								handle: "hana",
								avatarUrl: "https://placehold.co/96x96/png?text=H",
							}}
							action={<FollowButton following={false} onClick={noop} />}
						/>
						<SuggestedUserRow
							user={{
								id: "u-sora",
								displayName: "Sora Nakai",
								handle: "sora",
								avatarUrl: "https://placehold.co/96x96/png?text=S",
							}}
							action={<FollowButton following={false} onClick={noop} />}
						/>
						<SuggestedUserRow
							user={{
								id: "u-taku",
								displayName: "Taku Mori",
								handle: "taku",
								avatarUrl: "https://placehold.co/96x96/png?text=T",
							}}
							action={<FollowButton following={true} onClick={noop} />}
						/>
					</SuggestedUserPanel>
				</>
			}
		>
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
				<PostBody text="Shipped the new registry pipeline today. Types in, components out, no hand-written config anywhere." />
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
				<PostAuthorLine author={kai} time="1h" />
				<PostBody text="This is the part everyone underestimates. Generating the screen is easy; making it type-check is the whole job." />
				<QuotedPost
					author={rin}
					time="2h"
					text="Shipped the new registry pipeline today. Types in, components out, no hand-written config anywhere."
				/>
				<PostActionBar
					replyCount={5}
					repostCount={21}
					likeCount={96}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>
			<PostCard visibility="public">
				<PostAuthorLine author={mio} time="45m" />
				<PostBody text="Two screenshots from the design review this morning. Left is the old spacing scale, right is the new one." />
				<PostMedia
					images={[
						{
							src: "https://placehold.co/640x360/png?text=Before",
							alt: "Old spacing scale applied to the timeline",
						},
						{
							src: "https://placehold.co/640x360/png?text=After",
							alt: "New spacing scale applied to the timeline",
						},
					]}
				/>
				<PostActionBar
					replyCount={8}
					repostCount={33}
					likeCount={174}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>
			<PostCard visibility="circle">
				<PostAuthorLine author={jun} time="12m" />
				<PostBody text="Small circle post: the migration is going to take one more sprint than we told anyone. Planning accordingly." />
				<PostActionBar
					replyCount={3}
					repostCount={2}
					likeCount={27}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>
		</AppShell>
	);
}

const meta = {
	title: "Screens/A1",
	component: TimelineScreen,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
