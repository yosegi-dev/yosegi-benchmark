import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "~/components/app-shell";
import { FeedTabs } from "~/components/feed-tabs";
import { FollowButton } from "~/components/follow-button";
import { NotificationBell } from "~/components/notification-bell";
import { PostActionBar } from "~/components/post-action-bar";
import { PostAuthorLine } from "~/components/post-author-line";
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
import { VisibilityPicker } from "~/components/visibility-picker";

const noop = () => {};

const viewer = {
	id: "u_sora",
	displayName: "Sora Kimura",
	handle: "sora",
	avatarUrl: "https://images.example.com/avatars/sora.png",
	verified: false,
};

const rin = {
	id: "u_rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://images.example.com/avatars/rin.png",
	verified: true,
};

const kai = {
	id: "u_kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://images.example.com/avatars/kai.png",
	verified: false,
};

const mio = {
	id: "u_mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://images.example.com/avatars/mio.png",
	verified: false,
};

const jun = {
	id: "u_jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://images.example.com/avatars/jun.png",
	verified: true,
};

const aoi = {
	id: "u_aoi",
	displayName: "Aoi Mori",
	handle: "aoi",
	avatarUrl: "https://images.example.com/avatars/aoi.png",
	verified: false,
};

const haru = {
	id: "u_haru",
	displayName: "Haru Kondo",
	handle: "haru",
	avatarUrl: "https://images.example.com/avatars/haru.png",
	verified: true,
};

const nao = {
	id: "u_nao",
	displayName: "Nao Ueda",
	handle: "nao",
	avatarUrl: "https://images.example.com/avatars/nao.png",
	verified: false,
};

const postRin = {
	id: "p_1",
	author: rin,
	body: "Spent the morning re-reading the design tokens doc and finally understood why the spacing scale is what it is. Small units, consistent rhythm.",
	createdAt: "2026-08-17T07:10:00.000Z",
	visibility: "public" as const,
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai = {
	id: "p_2",
	author: kai,
	body: "This is the clearest explanation of the spacing scale I have seen. Pinning it for the next design review.",
	createdAt: "2026-08-17T08:02:00.000Z",
	visibility: "followers" as const,
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postMio = {
	id: "p_3",
	author: mio,
	body: "Two shots from the studio this week. Natural light only, no retouching.",
	createdAt: "2026-08-17T08:41:00.000Z",
	visibility: "public" as const,
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun = {
	id: "p_4",
	author: jun,
	body: "Quiet note for the close friends list: the migration is done and nothing broke. Sleeping for twelve hours now.",
	createdAt: "2026-08-17T09:05:00.000Z",
	visibility: "circle" as const,
	replyCount: 2,
	repostCount: 1,
	likeCount: 27,
	likedByViewer: false,
};

const trendFrontend = {
	id: "t_1",
	label: "#designtokens",
	postCount: 18400,
	category: "Technology",
};

const trendFilm = {
	id: "t_2",
	label: "Studio light",
	postCount: 9200,
	category: "Photography",
};

const trendRelease = {
	id: "t_3",
	label: "Release week",
	postCount: 3100,
};

const meta: Meta = {
	title: "Screens/TimelineScreen",
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

export const Timeline: StoryObj = {
	render: () => (
		<AppShell
			density="cozy"
			header={
				<TimelineHeader
					viewer={viewer}
					onViewerPress={noop}
					search={<SearchField value="" onQueryChange={noop} placeholder="Search" />}
					notifications={<NotificationBell unreadCount={5} onBellPress={noop} tone="quiet" />}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed="for-you" onFeedChange={noop} />
					<PostComposer
						draft=""
						onDraftChange={noop}
						onSubmitPress={noop}
						viewer={viewer}
						visibility="public"
						submitLabel="Post"
						visibilityPicker={<VisibilityPicker visibility="public" onVisibilityChange={noop} />}
					/>
					<PostCard
						post={postRin}
						authorLine={
							<PostAuthorLine
								author={rin}
								label="2h"
								visibility="public"
								avatar={<UserAvatar author={rin} />}
							/>
						}
						actions={
							<PostActionBar
								post={postRin}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postKai}
						authorLine={
							<PostAuthorLine
								author={kai}
								label="1h"
								visibility="followers"
								avatar={<UserAvatar author={kai} />}
							/>
						}
						quoted={
							<QuotedPost post={postRin} avatar={<UserAvatar author={rin} density="compact" />} />
						}
						actions={
							<PostActionBar
								post={postKai}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postMio}
						authorLine={
							<PostAuthorLine
								author={mio}
								label="45m"
								visibility="public"
								avatar={<UserAvatar author={mio} />}
							/>
						}
						media={
							<PostMedia
								images={[
									{
										url: "https://images.example.com/posts/studio-window.jpg",
										alt: "A window seat lit by late afternoon sun",
									},
									{
										url: "https://images.example.com/posts/studio-desk.jpg",
										alt: "A wooden desk with a camera and contact sheets",
									},
								]}
							/>
						}
						actions={
							<PostActionBar
								post={postMio}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postJun}
						authorLine={
							<PostAuthorLine
								author={jun}
								label="20m"
								visibility="circle"
								avatar={<UserAvatar author={jun} />}
							/>
						}
						actions={
							<PostActionBar
								post={postJun}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trending now"
						items={
							<>
								<TrendItem rank={1} trend={trendFrontend} onTrendPress={noop} />
								<TrendItem rank={2} trend={trendFilm} onTrendPress={noop} />
								<TrendItem rank={3} trend={trendRelease} onTrendPress={noop} />
							</>
						}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={
							<>
								<SuggestedUserRow
									author={aoi}
									reason="Followed by @rin"
									avatar={<UserAvatar author={aoi} density="compact" />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
								/>
								<SuggestedUserRow
									author={haru}
									reason="Followed by @kai and 3 others"
									avatar={<UserAvatar author={haru} density="compact" />}
									follow={<FollowButton following={false} onFollowToggle={noop} />}
								/>
								<SuggestedUserRow
									author={nao}
									reason="New to the timeline"
									avatar={<UserAvatar author={nao} density="compact" />}
									follow={<FollowButton following={true} onFollowToggle={noop} />}
								/>
							</>
						}
					/>
				</>
			}
		/>
	),
};
