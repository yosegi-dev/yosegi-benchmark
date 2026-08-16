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
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/96?img=64",
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
	avatarUrl: "https://i.pravatar.cc/96?img=23",
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/96?img=33",
};

const haru = {
	id: "u-haru",
	displayName: "Haru Kobayashi",
	handle: "haru",
	avatarUrl: "https://i.pravatar.cc/96?img=45",
};

const nao = {
	id: "u-nao",
	displayName: "Nao Fujii",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/96?img=52",
};

const sora = {
	id: "u-sora",
	displayName: "Sora Yamada",
	handle: "sora",
	avatarUrl: "https://i.pravatar.cc/96?img=58",
};

const postMedia = [
	{
		id: "m-1",
		src: "https://placehold.co/640x420/1d4ed8/ffffff.png",
		alt: "Morning light over the harbour",
		width: 640,
		height: 420,
	},
	{
		id: "m-2",
		src: "https://placehold.co/640x420/be123c/ffffff.png",
		alt: "A tray of freshly baked bread",
		width: 640,
		height: 420,
	},
];

const noop = () => {};

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
							name="#TypeScript"
							postCount={12400}
							onClick={noop}
						/>
						<TrendItem
							category="Design"
							name="#DesignSystems"
							postCount={8300}
							onClick={noop}
						/>
						<TrendItem
							category="Tokyo"
							name="#朝ごはん"
							postCount={4100}
							onClick={noop}
						/>
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						<SuggestedUserRow user={haru} reason="Follows you">
							<FollowButton
								userId={haru.id}
								following={false}
								onToggle={noop}
							/>
						</SuggestedUserRow>
						<SuggestedUserRow user={nao} reason="Popular in Design">
							<FollowButton userId={nao.id} following={false} onToggle={noop} />
						</SuggestedUserRow>
						<SuggestedUserRow user={sora} reason="Based on your likes">
							<FollowButton
								userId={sora.id}
								following={true}
								onToggle={noop}
							/>
						</SuggestedUserRow>
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
				placeholder="What's happening?"
			/>

			<PostCard postId="p-1" visibility="public">
				<PostAuthorLine author={rin} relativeTime="2h" />
				<PostBody text="Rewrote the whole layout pass this morning and it finally fits on one screen. Small win, big relief." />
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

			<PostCard postId="p-2" visibility="followers">
				<PostAuthorLine author={kai} relativeTime="1h" />
				<PostBody text="This is exactly the kind of cleanup that never shows up in a changelog." />
				<QuotedPost
					author={rin}
					text="Rewrote the whole layout pass this morning and it finally fits on one screen. Small win, big relief."
					relativeTime="2h"
				/>
				<PostActionBar
					replyCount={3}
					repostCount={9}
					likeCount={64}
					liked={false}
					reposted={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard postId="p-3" visibility="public">
				<PostAuthorLine author={mio} relativeTime="42m" />
				<PostBody text="Two photos from the walk back. The light was doing something strange today." />
				<PostMedia images={postMedia} />
				<PostActionBar
					replyCount={7}
					repostCount={21}
					likeCount={188}
					liked={false}
					reposted={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard postId="p-4" visibility="circle">
				<PostAuthorLine author={jun} relativeTime="15m" />
				<PostBody text="Keeping this one to the circle: the migration is done, and nobody noticed. Best possible outcome." />
				<PostActionBar
					replyCount={2}
					repostCount={4}
					likeCount={27}
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
