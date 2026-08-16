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
	id: "u-sora",
	displayName: "Sora Kishi",
	handle: "sora",
	avatarUrl: "https://i.pravatar.cc/128?img=13",
	verified: true,
};

const rin: AuthorModel = {
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?img=5",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?img=32",
	verified: true,
};

const jun: AuthorModel = {
	id: "u-jun",
	displayName: "Jun Ito",
	handle: "jun",
	avatarUrl: "https://i.pravatar.cc/128?img=51",
};

const nao: AuthorModel = {
	id: "u-nao",
	displayName: "Nao Fujita",
	handle: "nao",
	avatarUrl: "https://i.pravatar.cc/128?img=24",
};

const aki: AuthorModel = {
	id: "u-aki",
	displayName: "Aki Kurose",
	handle: "aki",
	avatarUrl: "https://i.pravatar.cc/128?img=45",
	verified: true,
};

const ren: AuthorModel = {
	id: "u-ren",
	displayName: "Ren Hoshino",
	handle: "ren",
	avatarUrl: "https://i.pravatar.cc/128?img=60",
};

const postOne: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new type-driven component registry this morning. Generating it straight from the host's props turned a whole class of guesswork into a lookup.",
	createdAt: "2026-08-13T09:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postTwo: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underrate: the registry is not documentation, it is the contract. If it disagrees with the code, the code wins and the registry is regenerated.",
	createdAt: "2026-08-13T08:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two shots from the studio window this week. Same frame, four days apart.",
	createdAt: "2026-08-13T07:15:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 15,
	likeCount: 128,
	likedByViewer: false,
};

const postFour: PostModel = {
	id: "p-4",
	author: jun,
	body: "Quiet reminder to myself: a smaller diff that passes CI beats a bigger one that almost does.",
	createdAt: "2026-08-13T06:02:00.000Z",
	visibility: "circle",
	replyCount: 2,
	repostCount: 3,
	likeCount: 24,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{
		url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800",
		alt: "Morning light across the studio window, first of two",
	},
	{
		url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
		alt: "The same window four days later, overcast",
	},
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 6120, category: "Trending in Frontend" },
	{ id: "t-3", label: "#TypeScript", postCount: 42300, category: "Technology" },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{ author: nao, reason: "Followed by rin" },
	{ author: aki, reason: "Followed by kai and 3 others" },
	{ author: ren, reason: "New to your network" },
];

const noop = () => {};

const columnStyle = { display: "grid", gap: "1rem" } as const;

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
					onViewerPress={noop}
					search={<SearchField value={query} onQueryChange={setQuery} placeholder="Search Yosegi" />}
					notifications={<NotificationBell unreadCount={3} onBellPress={noop} tone="quiet" />}
				/>
			}
			main={
				<div style={columnStyle}>
					<FeedTabs activeFeed={feed} onFeedChange={setFeed} />

					<PostComposer
						draft={draft}
						onDraftChange={setDraft}
						onSubmitPress={noop}
						viewer={viewer}
						visibility={visibility}
						visibilityPicker={
							<VisibilityPicker visibility={visibility} onVisibilityChange={setVisibility} />
						}
					/>

					<PostCard
						post={postOne}
						authorLine={
							<PostAuthorLine
								author={rin}
								label="2h"
								visibility={postOne.visibility}
								avatar={<UserAvatar author={rin} />}
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
								visibility={postTwo.visibility}
								avatar={<UserAvatar author={kai} />}
							/>
						}
						quoted={<QuotedPost post={postOne} avatar={<UserAvatar author={rin} density="compact" />} />}
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
								label="4h"
								visibility={postThree.visibility}
								avatar={<UserAvatar author={mio} />}
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
								label="6h"
								visibility={postFour.visibility}
								avatar={<UserAvatar author={jun} />}
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
				</div>
			}
			sidebar={
				<div style={columnStyle}>
					<TrendPanel
						heading="Trends for you"
						items={
							<>
								{trends.map((trend, index) => (
									<TrendItem key={trend.id} rank={index + 1} trend={trend} onTrendPress={noop} />
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
										reason={reason}
										avatar={<UserAvatar author={author} density="compact" />}
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
							</>
						}
					/>
				</div>
			}
		/>
	);
}

const meta = {
	title: "Screens/B",
	component: TimelineScreen,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof TimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
