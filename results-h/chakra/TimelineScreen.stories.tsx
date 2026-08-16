import type { Meta, StoryObj } from "@storybook/react";
import { type ReactNode, useState } from "react";
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
	displayName: "Nao Kubota",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=15",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=45",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/160?img=68",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Rewrote the sync layer over the weekend. Cold start is down from 4.2s to 900ms, and the diff is smaller than the one that made it slow.",
	createdAt: "2026-08-13T09:12:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people skip: the fix was deleting code, not adding a cache.",
	createdAt: "2026-08-13T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 11,
	likeCount: 63,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two frames from this morning's walk along the canal. The light only does this for about ten minutes.",
	createdAt: "2026-08-13T07:55:00.000Z",
	visibility: "public",
	replyCount: 9,
	repostCount: 27,
	likeCount: 184,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet note for the circle: I am taking next week off. Ping me only if the build is on fire.",
	createdAt: "2026-08-13T06:20:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 1,
	likeCount: 28,
	likedByViewer: false,
};

/** Pre-formatted, because PostAuthorLine takes the relative time as a string. */
const timeLabels: Record<string, string> = {
	"p-1": "2h",
	"p-2": "3h",
	"p-3": "4h",
	"p-4": "6h",
};

const mediaImages = [
	{
		url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
		alt: "Sunrise over the canal, seen from the east bank",
	},
	{
		url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
		alt: "Row of trees along the towpath in low morning light",
	},
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#ColdStart", postCount: 4820, category: "Technology" },
	{ id: "t-2", label: "Canal District", postCount: 1290, category: "Photography" },
	{ id: "t-3", label: "#ShipItFriday", postCount: 763 },
];

const suggestions: { author: AuthorModel; reason?: string }[] = [
	{
		author: {
			id: "u-hana",
			displayName: "Hana Ogawa",
			handle: "hana",
			avatarUrl: "https://i.pravatar.cc/160?img=24",
			verified: true,
		},
		reason: "Followed by rin",
	},
	{
		author: {
			id: "u-taro",
			displayName: "Taro Nishi",
			handle: "taro",
			avatarUrl: "https://i.pravatar.cc/160?img=57",
		},
		reason: "Followed by kai and 3 others",
	},
	{
		author: {
			id: "u-sena",
			displayName: "Sena Fujii",
			handle: "sena",
			avatarUrl: "https://i.pravatar.cc/160?img=39",
		},
	},
];

function TimelineScreen() {
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [query, setQuery] = useState("");
	const [following, setFollowing] = useState<Record<string, boolean>>({});
	/** Only the viewer's like differs from the seed data, so it is the one thing kept as state. */
	const [likes, setLikes] = useState<Record<string, boolean>>({});

	const withViewerLike = (post: PostModel): PostModel => {
		const liked = likes[post.id] ?? post.likedByViewer;
		if (liked === post.likedByViewer) {
			return post;
		}
		return {
			...post,
			likedByViewer: liked,
			likeCount: post.likeCount + (liked ? 1 : -1),
		};
	};

	const toggleLike = (post: PostModel) => {
		setLikes((current) => ({
			...current,
			[post.id]: !(current[post.id] ?? post.likedByViewer),
		}));
	};

	const renderCard = (seed: PostModel, extras?: { media?: ReactNode; quoted?: ReactNode }) => {
		const post = withViewerLike(seed);
		return (
			<PostCard
				post={post}
				authorLine={
					<PostAuthorLine
						author={post.author}
						label={timeLabels[post.id] ?? ""}
						avatar={<UserAvatar author={post.author} />}
						visibility={post.visibility}
					/>
				}
				actions={
					<PostActionBar
						post={post}
						onReplyPress={() => {}}
						onRepostPress={() => {}}
						onLikePress={() => toggleLike(seed)}
					/>
				}
				media={extras?.media}
				quoted={extras?.quoted}
			/>
		);
	};

	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={
						<SearchField value={query} placeholder="Search Yosegi" onQueryChange={setQuery} />
					}
					notifications={<NotificationBell unreadCount={3} onBellPress={() => {}} />}
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
							<VisibilityPicker visibility={visibility} onVisibilityChange={setVisibility} />
						}
						onDraftChange={setDraft}
						onSubmitPress={() => setDraft("")}
						submitLabel="Post"
					/>
					{renderCard(postRin)}
					{renderCard(postKai, {
						quoted: <QuotedPost post={postRin} avatar={<UserAvatar author={rin} />} />,
					})}
					{renderCard(postMio, { media: <PostMedia images={mediaImages} /> })}
					{renderCard(postJun)}
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trends for you"
						items={
							<>
								{trends.map((trend, index) => (
									<TrendItem key={trend.id} trend={trend} rank={index + 1} onTrendPress={() => {}} />
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
												following={following[author.id] ?? false}
												onFollowToggle={(next) =>
													setFollowing((current) => ({ ...current, [author.id]: next }))
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
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
