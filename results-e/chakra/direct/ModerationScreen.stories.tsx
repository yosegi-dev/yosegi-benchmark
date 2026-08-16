import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "~/components/app-shell";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostCard } from "~/components/post-card";
import { PostMedia } from "~/components/post-media";
import { QuotedPost } from "~/components/quoted-post";
import { TrendItem } from "~/components/trend-item";
import { TrendPanel } from "~/components/trend-panel";
import { UserAvatar } from "~/components/user-avatar";
import type { AuthorModel, PostModel, TrendModel } from "~/models";

const rin: AuthorModel = {
	id: "author-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://example.com/avatars/rin.png",
	verified: true,
};

const kai: AuthorModel = {
	id: "author-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://example.com/avatars/kai.png",
};

const mio: AuthorModel = {
	id: "author-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://example.com/avatars/mio.png",
};

const postOne: PostModel = {
	id: "post-1",
	author: rin,
	body: "Reminder that the moderation queue is triaged twice a day, not continuously.",
	createdAt: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 4,
	likeCount: 38,
	likedByViewer: false,
};

const postTwo: PostModel = {
	id: "post-2",
	author: kai,
	body: "Quoting this because the twice-a-day cadence is exactly what the report backlog reflects.",
	createdAt: "5h",
	visibility: "followers",
	replyCount: 3,
	repostCount: 1,
	likeCount: 9,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "post-3",
	author: mio,
	body: "Two screenshots from the review tool, attached for the record.",
	createdAt: "1d",
	visibility: "unlisted",
	replyCount: 7,
	repostCount: 2,
	likeCount: 21,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{ url: "https://example.com/media/queue-overview.png", alt: "Review queue overview" },
	{ url: "https://example.com/media/queue-detail.png", alt: "Review queue detail" },
];

const trends: TrendModel[] = [
	{ id: "trend-typescript", label: "#typescript", postCount: 8320 },
	{ id: "trend-storybook", label: "#storybook", postCount: 6120 },
	{ id: "trend-designsystems", label: "#designsystems", postCount: 3980 },
];

const meta: Meta = {
	title: "Screens/ModerationScreen",
};

export default meta;

export const Default: StoryObj = {
	render: () => (
		<AppShell
			header={<h1>Moderation review</h1>}
			main={
				<div>
					<PostCard
						post={postOne}
						authorLine={
							<PostAuthorLine
								author={postOne.author}
								label="2h"
								visibility="public"
								avatar={<UserAvatar author={postOne.author} />}
							/>
						}
						actions={<div>Reported 3 times</div>}
					/>
					<PostCard
						post={postTwo}
						authorLine={
							<PostAuthorLine
								author={postTwo.author}
								label="5h"
								visibility="followers"
								avatar={<UserAvatar author={postTwo.author} />}
							/>
						}
						quoted={
							<QuotedPost post={postOne} avatar={<UserAvatar author={postOne.author} />} />
						}
						actions={<div>Reported once</div>}
					/>
					<PostCard
						post={postThree}
						authorLine={
							<PostAuthorLine
								author={postThree.author}
								label="1d"
								visibility="unlisted"
								avatar={<UserAvatar author={postThree.author} />}
							/>
						}
						media={<PostMedia images={postThreeImages} />}
						actions={<div>Reported 5 times</div>}
					/>
				</div>
			}
			sidebar={
				<TrendPanel
					heading="Review queue trends"
					items={
						<>
							{trends.map((trend, index) => (
								<TrendItem key={trend.id} rank={index + 1} trend={trend} />
							))}
						</>
					}
				/>
			}
		/>
	),
};
