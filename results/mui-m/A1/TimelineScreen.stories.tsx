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
	avatarUrl: "https://i.pravatar.cc/150?img=15",
};

const rin = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/150?img=32",
};

const kai = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/150?img=12",
};

const mio = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?img=45",
};

const jun = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=8",
};

const quotedPost = {
	id: "post-1",
	author: rin,
	text: "Shipped the new timeline renderer this morning. Scroll performance is finally where I wanted it six months ago.",
	relativeTime: "2h",
	visibility: "public" as const,
};

const trends = [
	{ id: "t-1", category: "Technology", label: "#TypeScript", postCount: 18400 },
	{ id: "t-2", category: "Design", label: "Design tokens", postCount: 9210 },
	{ id: "t-3", category: "Trending in Japan", label: "#朝活", postCount: 4380 },
];

const suggestions = [rin, mio, jun];

const noop = () => {};

const meta: Meta = {
	title: "Screens/TimelineScreen",
};

export default meta;

export const Timeline: StoryObj<typeof meta> = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					user={viewer}
					searchValue=""
					onSearchChange={noop}
					notificationCount={3}
				/>
			}
			sidebar={
				<>
					<TrendPanel title="Trends for you">
						{trends.map((trend) => (
							<TrendItem key={trend.id} trend={trend} onClick={noop} />
						))}
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						{suggestions.map((user) => (
							<SuggestedUserRow key={user.id} user={user}>
								<FollowButton following={false} onToggle={noop} />
							</SuggestedUserRow>
						))}
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
				placeholder="What's happening?"
			/>

			<PostCard visibility="public">
				<PostAuthorLine author={rin} relativeTime="2h" />
				<PostBody text="Shipped the new timeline renderer this morning. Scroll performance is finally where I wanted it six months ago." />
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
				<PostAuthorLine author={kai} relativeTime="1h" />
				<PostBody text="This is the part everyone skips: the win was in the measurement, not the rewrite." />
				<QuotedPost post={quotedPost} />
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
				<PostAuthorLine author={mio} relativeTime="34m" />
				<PostBody text="Two shots from this morning's walk before the studio opened." />
				<PostMedia
					images={[
						{
							src: "https://picsum.photos/id/1015/800/600",
							alt: "A river running between pine-covered hills",
						},
						{
							src: "https://picsum.photos/id/1025/800/600",
							alt: "A quiet street at dawn",
						},
					]}
				/>
				<PostActionBar
					replyCount={3}
					repostCount={9}
					likeCount={142}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>

			<PostCard visibility="circle">
				<PostAuthorLine author={jun} relativeTime="12m" />
				<PostBody text="Small circle question: what is the smallest change you made this year that you would not undo?" />
				<PostActionBar
					replyCount={8}
					repostCount={2}
					likeCount={37}
					liked={false}
					onReply={noop}
					onRepost={noop}
					onLike={noop}
				/>
			</PostCard>
		</AppShell>
	),
};
