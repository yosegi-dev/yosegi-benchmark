import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

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
import type { AuthorModel, FeedKind, PostModel, TrendModel, Visibility } from "~/models";

const viewer: AuthorModel = {
	id: "u-nao",
	displayName: "Nao Kubo",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/150?img=12",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/150?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/150?img=51",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/150?img=45",
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/150?img=68",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout today. Two columns, sticky header, and every card finally\nlines up on the same grid.",
	createdAt: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part nobody sees in the screenshot: the grid work underneath.",
	createdAt: "1h",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from the studio this morning. Same lens, ten minutes apart.",
	createdAt: "38m",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle post: the migration is done and nothing broke. Sleeping well tonight.",
	createdAt: "12m",
	visibility: "circle",
	replyCount: 2,
	repostCount: 3,
	likeCount: 27,
	likedByViewer: false,
};

const mioImages = [
	{ url: "https://picsum.photos/seed/mio-a/800/600", alt: "Studio desk lit from the left" },
	{ url: "https://picsum.photos/seed/mio-b/800/600", alt: "The same desk ten minutes later" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#designsystems", postCount: 18400, category: "Design" },
	{ id: "t-2", label: "Storybook 9", category: "Technology", postCount: 9320 },
	{ id: "t-3", label: "#typescript", postCount: 41200, category: "Programming" },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-aoi",
			displayName: "Aoi Nakamura",
			handle: "aoi",
			avatarUrl: "https://i.pravatar.cc/150?img=24",
			verified: true,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Hayashi",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/150?img=15",
		},
		reason: "Followed by kai and 3 others",
	},
	{
		author: {
			id: "u-yuki",
			displayName: "Yuki Mori",
			handle: "yuki",
			avatarUrl: "https://i.pravatar.cc/150?img=59",
		},
		reason: "New to your timeline",
	},
];

const noop = () => {};

function TimelineScreen() {
	const [query, setQuery] = useState("");
	const [feed, setFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [following, setFollowing] = useState<Record<string, boolean>>({});

	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value={query} onQueryChange={setQuery} />}
					notifications={<NotificationBell unreadCount={5} onBellPress={noop} />}
					onViewerPress={noop}
				/>
			}
			main={
				<div style={{ display: "grid", gap: "1rem" }}>
					<FeedTabs activeFeed={feed} onFeedChange={setFeed} />

					<PostComposer
						viewer={viewer}
						draft={draft}
						visibility={visibility}
						visibilityPicker={
							<VisibilityPicker visibility={visibility} onVisibilityChange={setVisibility} />
						}
						onDraftChange={setDraft}
						onSubmitPress={noop}
					/>

					<PostCard
						post={postRin}
						authorLine={
							<PostAuthorLine
								author={postRin.author}
								label={postRin.createdAt}
								visibility={postRin.visibility}
								avatar={<UserAvatar author={postRin.author} />}
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
								author={postKai.author}
								label={postKai.createdAt}
								visibility={postKai.visibility}
								avatar={<UserAvatar author={postKai.author} />}
							/>
						}
						quoted={
							<QuotedPost post={postRin} avatar={<UserAvatar author={postRin.author} density="compact" />} />
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
								author={postMio.author}
								label={postMio.createdAt}
								visibility={postMio.visibility}
								avatar={<UserAvatar author={postMio.author} />}
							/>
						}
						media={<PostMedia images={mioImages} />}
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
								author={postJun.author}
								label={postJun.createdAt}
								visibility={postJun.visibility}
								avatar={<UserAvatar author={postJun.author} />}
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
				</div>
			}
			sidebar={
				<div>
					<TrendPanel
						heading="Trends for you"
						items={trends.map((trend, index) => (
							<TrendItem key={trend.id} rank={index + 1} trend={trend} onTrendPress={noop} />
						))}
					/>

					<SuggestedUserPanel
						heading="Who to follow"
						rows={suggestions.map(({ author, reason }) => (
							<SuggestedUserRow
								key={author.id}
								author={author}
								reason={reason}
								avatar={<UserAvatar author={author} />}
								follow={
									<FollowButton
										following={following[author.id] ?? false}
										onFollowToggle={(next) =>
											setFollowing((current) => ({ ...current, [author.id]: next }))
										}
									/>
								}
							/>
						))}
					/>
				</div>
			}
		/>
	);
}

const meta = {
	title: "Screens/TimelineScreen",
	component: TimelineScreen,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
