import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AppShell } from "~/components/app-shell";
import { FeedTabs } from "~/components/feed-tabs";
import { FollowButton } from "~/components/follow-button";
import { IconActionButton } from "~/components/icon-action-button";
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
	id: "u-aoi",
	displayName: "Aoi Nakamura",
	handle: "aoi",
	avatarUrl: "https://i.pravatar.cc/150?img=15",
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
	avatarUrl: "https://i.pravatar.cc/150?img=12",
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
	avatarUrl: "https://i.pravatar.cc/150?img=8",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipped the new timeline layout this morning. Two columns, sticky header, and the whole thing finally feels calm at desktop width.",
	createdAt: "2026-08-13T07:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 48,
	likeCount: 310,
	likedByViewer: true,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part people underrate: the calm comes from the spacing scale, not from the components.",
	createdAt: "2026-08-13T06:40:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 61,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Morning walk before the deploy window. Two frames worth keeping.",
	createdAt: "2026-08-13T05:55:00.000Z",
	visibility: "public",
	replyCount: 7,
	repostCount: 21,
	likeCount: 154,
	likedByViewer: false,
};

const postJun: PostModel = {
	id: "p-4",
	author: jun,
	body: "Small circle question: how do you all handle review load when half the team is on release duty?",
	createdAt: "2026-08-13T04:20:00.000Z",
	visibility: "circle",
	replyCount: 3,
	repostCount: 2,
	likeCount: 28,
	likedByViewer: false,
};

const mioImages: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/seed/mio-a/800/600", alt: "River path under early light" },
	{ url: "https://picsum.photos/seed/mio-b/800/600", alt: "Bridge railing with morning fog" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#DesignSystems", postCount: 18400, category: "Technology" },
	{ id: "t-2", label: "Storybook 9", postCount: 9320, category: "Technology" },
	{ id: "t-3", label: "Typhoon No. 7", postCount: 45100, category: "News" },
];

const suggestions: { author: AuthorModel; reason: string }[] = [
	{
		author: {
			id: "u-nao",
			displayName: "Nao Kishi",
			handle: "nao",
			avatarUrl: "https://i.pravatar.cc/150?img=21",
			verified: true,
		},
		reason: "Followed by @rin",
	},
	{
		author: {
			id: "u-hana",
			displayName: "Hana Oda",
			handle: "hana",
			avatarUrl: "https://i.pravatar.cc/150?img=27",
		},
		reason: "Followed by @kai and 3 others",
	},
	{
		author: {
			id: "u-sora",
			displayName: "Sora Miyake",
			handle: "sora",
			avatarUrl: "https://i.pravatar.cc/150?img=51",
		},
		reason: "New to your topics",
	},
];

const noop = () => {};

function TimelineScreen() {
	const [query, setQuery] = useState("");
	const [activeFeed, setActiveFeed] = useState<FeedKind>("for-you");
	const [draft, setDraft] = useState("");
	const [visibility, setVisibility] = useState<Visibility>("public");
	const [following, setFollowing] = useState<Record<string, boolean>>({});

	return (
		<AppShell
			header={
				<TimelineHeader
					viewer={viewer}
					search={<SearchField value={query} onQueryChange={setQuery} placeholder="Search Yosegi" />}
					notifications={
						<IconActionButton
							ariaLabel="Notifications"
							icon={<span aria-hidden="true">🔔</span>}
							onClick={noop}
						/>
					}
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
						onDraftChange={setDraft}
						onSubmitPress={noop}
						visibilityPicker={
							<VisibilityPicker visibility={visibility} onVisibilityChange={setVisibility} />
						}
					/>
					<PostCard
						post={postRin}
						authorLine={
							<PostAuthorLine
								author={postRin.author}
								label="2h"
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
								label="3h"
								visibility={postKai.visibility}
								avatar={<UserAvatar author={postKai.author} />}
							/>
						}
						quoted={<QuotedPost post={postRin} avatar={<UserAvatar author={postRin.author} density="compact" />} />}
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
								label="4h"
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
								label="6h"
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
				</>
			}
			sidebar={
				<>
					<TrendPanel
						heading="Trending now"
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
										following={following[author.id] === true}
										onFollowToggle={(next) =>
											setFollowing((current) => ({ ...current, [author.id]: next }))
										}
									/>
								}
							/>
						))}
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
