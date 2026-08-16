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
	avatarUrl: "https://placehold.co/96x96/png?text=RA",
	verified: true,
};

const kai: AuthorModel = {
	id: "author-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://placehold.co/96x96/png?text=KD",
};

const mio: AuthorModel = {
	id: "author-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://placehold.co/96x96/png?text=MS",
};

const postOne: PostModel = {
	id: "post-1",
	author: rin,
	body: "Reposting the same screenshot in four threads is not a bug report. Please stop.",
	createdAt: "2026-08-17T05:10:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 4,
	likeCount: 38,
	likedByViewer: false,
};

const postTwo: PostModel = {
	id: "post-2",
	author: kai,
	body: "Quoting this so the moderation log keeps the original context.",
	createdAt: "2026-08-17T02:10:00.000Z",
	visibility: "followers",
	replyCount: 3,
	repostCount: 1,
	likeCount: 9,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "post-3",
	author: mio,
	body: "Two screenshots from the report queue, attached for review.",
	createdAt: "2026-08-16T07:10:00.000Z",
	visibility: "unlisted",
	replyCount: 21,
	repostCount: 7,
	likeCount: 64,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{
		url: "https://placehold.co/640x400/png?text=Report+1",
		alt: "First reported screenshot",
	},
	{
		url: "https://placehold.co/640x400/png?text=Report+2",
		alt: "Second reported screenshot",
	},
];

const trends: TrendModel[] = [
	{ id: "trend-typescript", label: "#typescript", postCount: 8320 },
	{ id: "trend-storybook", label: "#storybook", postCount: 6120 },
	{ id: "trend-designsystems", label: "#designsystems", postCount: 3980 },
];

function ModerationScreen() {
	return (
		<AppShell
			header={<h1>Moderation review</h1>}
			main={
				<>
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
				</>
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
	);
}

const meta = {
	title: "Screens/ModerationScreen",
	component: ModerationScreen,
} satisfies Meta<typeof ModerationScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
