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
	id: "u-viewer",
	displayName: "Aoi Kimura",
	handle: "aoi",
	avatarUrl: "https://cdn.example.com/avatars/aoi.png",
	verified: false,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://cdn.example.com/avatars/rin.png",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://cdn.example.com/avatars/kai.png",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://cdn.example.com/avatars/mio.png",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://cdn.example.com/avatars/jun.png",
};

// `createdAt` is the raw timestamp on the model; PostAuthorLine takes the
// already-formatted relative string separately, so the two are kept in step here.
const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout this morning. Two columns, one gutter, and finally no horizontal scroll on 1280.",
	createdAt: "2026-08-14T02:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part nobody sees in the screenshot: the gutter is what makes it readable.",
	createdAt: "2026-08-14T01:40:00.000Z",
	visibility: "followers",
	replyCount: 3,
	repostCount: 9,
	likeCount: 64,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from the studio session yesterday. Same lens, ten minutes apart.",
	createdAt: "2026-08-13T23:05:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 188,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet week. Reading more than I am writing, which is usually the right ratio.",
	createdAt: "2026-08-13T18:20:00.000Z",
	visibility: "circle",
	replyCount: 1,
	repostCount: 2,
	likeCount: 27,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{ url: "https://cdn.example.com/media/studio-01.jpg", alt: "Studio desk lit from the left" },
	{ url: "https://cdn.example.com/media/studio-02.jpg", alt: "The same desk ten minutes later" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#designsystems", postCount: 12400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 8210, category: "Technology" },
	{ id: "t-3", label: "#nightphoto", postCount: 3940, category: "Photography" },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-hina",
			displayName: "Hina Ogawa",
			handle: "hina",
			avatarUrl: "https://cdn.example.com/avatars/hina.png",
			verified: true,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-sota",
			displayName: "Sota Nakai",
			handle: "sota",
			avatarUrl: "https://cdn.example.com/avatars/sota.png",
		},
		reason: "Followed by kai and 3 others",
	},
	{
		author: {
			id: "u-yuki",
			displayName: "Yuki Mori",
			handle: "yuki",
			avatarUrl: "https://cdn.example.com/avatars/yuki.png",
		},
		reason: "New to your topics",
	},
];

const noop = () => {};

function TimelineScreen() {
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [query, setQuery] = useState("");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [followedIds, setFollowedIds] = useState<string[]>([]);

	const toggleFollow = (id: string, following: boolean) => {
		setFollowedIds((current) =>
			following ? [...current, id] : current.filter((followedId) => followedId !== id),
		);
	};

	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={
						<SearchField value={query} placeholder="Search" onQueryChange={setQuery} />
					}
					notifications={<NotificationBell unreadCount={5} onBellPress={noop} />}
					onViewerPress={noop}
				/>
			}
			main={
				<>
					<FeedTabs activeFeed={activeFeed} onFeedChange={setActiveFeed} />
					<PostComposer
						viewer={viewer}
						draft={draft}
						visibility={visibility}
						visibilityPicker={
							<VisibilityPicker
								visibility={visibility}
								onVisibilityChange={setVisibility}
							/>
						}
						onDraftChange={setDraft}
						onSubmitPress={() => setDraft("")}
						submitLabel="Post"
					/>
					<PostCard
						post={postOne}
						authorLine={
							<PostAuthorLine
								author={rin}
								label="2h"
								avatar={<UserAvatar author={rin} />}
								visibility={postOne.visibility}
							/>
						}
						actions={
							<PostActionBar
								post={postOne}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postTwo}
						authorLine={
							<PostAuthorLine
								author={kai}
								label="3h"
								avatar={<UserAvatar author={kai} />}
								visibility={postTwo.visibility}
							/>
						}
						quoted={<QuotedPost post={postOne} avatar={<UserAvatar author={rin} />} />}
						actions={
							<PostActionBar
								post={postTwo}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postThree}
						authorLine={
							<PostAuthorLine
								author={mio}
								label="5h"
								avatar={<UserAvatar author={mio} />}
								visibility={postThree.visibility}
							/>
						}
						media={<PostMedia images={postThreeImages} />}
						actions={
							<PostActionBar
								post={postThree}
								onReplyPress={noop}
								onRepostPress={noop}
								onLikePress={noop}
							/>
						}
					/>
					<PostCard
						post={postFour}
						authorLine={
							<PostAuthorLine
								author={jun}
								label="10h"
								avatar={<UserAvatar author={jun} />}
								visibility={postFour.visibility}
							/>
						}
						actions={
							<PostActionBar
								post={postFour}
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
						heading="Trends for you"
						items={
							<>
								{trends.map((trend, index) => (
									<TrendItem
										key={trend.id}
										trend={trend}
										rank={index + 1}
										onTrendPress={noop}
									/>
								))}
							</>
						}
					/>
					<SuggestedUserPanel
						heading="Who to follow"
						rows={
							<>
								{suggestions.map(({ author, reason }) => (
									<SuggestedUserRow
										key={author.id}
										author={author}
										avatar={<UserAvatar author={author} />}
										follow={
											<FollowButton
												following={followedIds.includes(author.id)}
												onFollowToggle={(following) =>
													toggleFollow(author.id, following)
												}
											/>
										}
										reason={reason}
									/>
								))}
							</>
						}
					/>
				</>
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
